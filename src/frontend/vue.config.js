module.exports = {

  devServer: {
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
        },

      }
    },
  css: {
    loaderOptions: {
      css: {
        sourceMap: true,
      },
    }
}
}
