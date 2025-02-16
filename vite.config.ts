import { defineConfig } from 'vite'
import autoRoutes from './plugins/autoRoutes'
import autoImport from './plugins/autoImport'
import mockPlugin from './plugins/mockPlugin'
import imagePlugin from './plugins/imagePlugin'
import envPlugin from './plugins/envPlugin'
import transformPlugin from './plugins/codeTransform'
import removeDebugger from './plugins/removeDebugger'

export default defineConfig({
  plugins: [
    autoRoutes(),
    autoImport(),
    mockPlugin(),
    imagePlugin(),
    envPlugin(process.env),
    transformPlugin(),
    removeDebugger({
      // 移除所有 console
      removeConsole: true,
      // 或者只移除特定的 console 方法
      // removeConsole: ['log', 'debug', 'info'],
      
      // 移除 debugger 语句
      removeDebugger: true,
      
      // 移除其他调试函数
      extraFunctions: ['trace', 'debug.log']
    })
  ]
}) 