import type { Plugin } from 'vite'

interface RemoveDebuggerOptions {
  // 是否移除 console
  removeConsole?: boolean | string[]
  // 是否移除 debugger
  removeDebugger?: boolean
  // 额外需要移除的函数调用
  extraFunctions?: string[]
}

export default function removeDebuggerPlugin(options: RemoveDebuggerOptions = {}): Plugin {
  const {
    removeConsole = true,
    removeDebugger = true,
    extraFunctions = []
  } = options

  return {
    name: 'vite-plugin-remove-debugger',
    apply: 'build', // 仅在构建时应用
    enforce: 'post', // 在其他插件之后运行

    transform(code: string, id: string) {
      // 只处理 JS/TS 文件
      if (!id.match(/\.[jt]sx?$/)) return

      let result = code

      // 移除 debugger 语句
      if (removeDebugger) {
        result = result.replace(/debugger;?/g, '')
      }

      // 移除 console 调用
      if (removeConsole) {
        if (typeof removeConsole === 'boolean') {
          // 移除所有 console 调用
          result = result.replace(
            /console\s*\.\s*(log|info|debug|warn|error|trace|dir|dirxml|table|count|countReset|group|groupEnd|groupCollapsed|time|timeEnd|timeLog|assert|profile|profileEnd|timeStamp|clear)\s*\([^)]*\);?/g,
            ''
          )
        } else if (Array.isArray(removeConsole)) {
          // 只移除指定的 console 方法
          removeConsole.forEach(method => {
            const regex = new RegExp(`console\\s*\\.\\s*${method}\\s*\\([^)]*\\);?`, 'g')
            result = result.replace(regex, '')
          })
        }
      }

      // 移除额外指定的函数调用
      if (extraFunctions.length > 0) {
        extraFunctions.forEach(func => {
          const regex = new RegExp(`${func}\\s*\\([^)]*\\);?`, 'g')
          result = result.replace(regex, '')
        })
      }

      // 如果代码没有变化，返回 null
      if (result === code) {
        return null
      }

      return {
        code: result,
        map: null // 可以根据需要生成 source map
      }
    }
  }
} 