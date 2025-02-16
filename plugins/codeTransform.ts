export default function transformPlugin() {
  return {
    name: 'vite-plugin-transform',
    transform(code, id) {
      // 移除 console.log
      if (id.endsWith('.ts') || id.endsWith('.js')) {
        return {
          code: code.replace(/console\.log\((.*)\);?/g, ''),
          map: null
        }
      }
      
      // 转换特定注释为代码
      if (id.endsWith('.vue')) {
        return {
          code: code.replace(
            /\/\/ @loading\s+(.+)/g, 
            'loading.value = true; try { $1 } finally { loading.value = false }'
          ),
          map: null
        }
      }
    }
  }
} 