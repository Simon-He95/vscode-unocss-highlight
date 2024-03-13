import { window } from 'vscode'
import { findUp } from 'find-up'
import { parse } from '@vue/compiler-sfc'
import { getActiveTextEditorLanguageId } from '@vscode-use/utils'

export function getClassNames(
  targetText: string,
): Array<{ start: number; value: string }> {
  const arr = []
  // FIXME: 正規表現だけでは様々なケースに対応できない
  const regexes = [
    /(?:\b(?:class(?:Name)?|tw)\s*=\s*(?:(?:{([^>}]+)})|(["'`][^"'`]+["'`])))/,
    /(?:(clsx|classnames)\()([^)]+)\)/,
  ]
  const regex = new RegExp(regexes.map(r => r.source).join('|'), 'gm')
  const classNameMatches = targetText.matchAll(regex)
  for (const classNameMatch of classNameMatches) {
    const stringMatches = classNameMatch[0].matchAll(
      /(?:["'`]([\s\S.:/${}()[\]"']+)["'`])/g,
    )
    for (const stringMatch of stringMatches) {
      if (classNameMatch.index != null && stringMatch.index != null) {
        arr.push({
          start: classNameMatch.index + stringMatch.index,
          value: stringMatch[0],
        })
      }
    }
  }
  if (getActiveTextEditorLanguageId() === 'vue') {
    const r = getAttr(targetText)
    if (r)
      arr.push(...r)
  }

  return arr
}

export function getUtility(
  targetText: string,
  regex: RegExp,
): Array<{
  end: number
  start: number
  value: string
}> {
  const arr = []
  const matches = targetText.matchAll(regex)
  for (const match of matches) {
    if (match.index != null) {
      arr.push({
        start: match.index,
        end: match.index + match[0].length,
        value: match[0],
      })
    }
  }
  return arr
}

export async function hasUnoConfig() {
  const url = window.activeTextEditor?.document.uri.fsPath
  if (!url)
    return

  const config = await findUp(['uno.config.js', 'uno.config.ts', 'unocss.config.js', 'unocss.config.ts'], { cwd: url })
  return !!config
}

export function getAttr(code: string) {
  const {
    descriptor: { template },
    errors,
  } = parse(code)
  if (errors.length || !template)
    return
  const { ast } = template
  return dfs(ast.children)
}

function dfs(children: any, result: any = []) {
  for (const child of children) {
    const { props, children } = child
    if (props && props.length) {
      for (const prop of props) {
        if (prop.value)
          continue
        result.push({
          start: prop.loc.start.offset - 1,
          value: `"${prop.name}"`,
        })
      }
    }
    if (children && children.length)
      dfs(children, result) as any
  }
  return result
}
