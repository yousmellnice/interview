export default function autoRoutesPlugin() {
  return {
    name: 'vite-plugin-auto-routes',
    configureServer(server) {
      // 监听页面文件变化，动态更新路由
      server.watcher.add('src/pages/**/*.vue')
      server.watcher.on('add', (file) => {
        if (file.includes('src/pages')) {
          generateRoutes()
        }
      })
    },
    transform(code, id) {
      // 在路由文件中注入动态生成的路由配置
      if (id.endsWith('router.ts')) {
        return {
          code: generateRouteCode(code),
          map: null
        }
      }
    }
  }
} 