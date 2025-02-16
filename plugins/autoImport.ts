import AutoImport from 'unplugin-auto-import/vite'
import { ElementPlusResolver } from 'unplugin-vue-components'

export default AutoImport({
  // 自动导入 Vue 相关函数
  imports: ['vue', 'vue-router', 'pinia'],
  // 自动导入 Element Plus 相关函数
  resolvers: [ElementPlusResolver()],
  // 生成 TypeScript 声明
  dts: 'src/auto-imports.d.ts',
}) 