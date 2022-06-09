const {
  defineConfig
} = require('@vue/cli-service')
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')

module.exports = defineConfig({
  transpileDependencies: true,


  configureWebpack: {
    resolve: {
      alias: {},
      fallback: {
        //其他的如果不启用可以用 keyname :false，例如：crypto:false, 
        "crypto": require.resolve("crypto-browserify"),
        "stream": require.resolve("stream-browserify")
      },
    },
    plugins: [new NodePolyfillPlugin()]
  }

})

module.exports = {
  devServer: {
    // 自动打开浏览器
    host: '192.168.1.174',
    open: true,
    port: 8080
  }
}