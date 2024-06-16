module.exports = {
  publicPath: '/',
  outputDir: '../main/resources/static',
  devServer: {
    host: 'localhost',
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        ws: true,
        changeOrigin: true
      },
      '/v1': {
        target: 'http://localhost:8080',
        ws: true,
        changeOrigin: true
      }
    }
  },
  css: {
    loaderOptions: {
      css: {
        sourceMap: true
      }
    }
  }
}