export default function envPlugin(env) {
  return {
    name: 'vite-plugin-env',
    config(config) {
      // 根据环境注入不同的配置
      return {
        define: {
          __API_URL__: JSON.stringify(env.API_URL),
          __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
          __BUILD_TIME__: JSON.stringify(new Date().toISOString())
        }
      }
    }
  }
} 