export default function mockPlugin() {
  return {
    name: 'vite-plugin-mock',
    configureServer(server) {
      // 注册 mock 接口
      server.middlewares.use(async (req, res, next) => {
        if (req.url?.startsWith('/api')) {
          const mockData = await loadMockData(req.url)
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify(mockData))
          return
        }
        next()
      })
    }
  }
} 