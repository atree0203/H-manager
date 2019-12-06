const path=require("path")
module.exports = {
	publicPath: '/',
	outputDir: 'dist',
	assetsDir: 'static',
	lintOnSave: process.env.NODE_ENV === 'development',
	productionSourceMap: false,
	devServer: {
		port: 8080,
		disableHostCheck: true,
		proxy: {
		  "/api": {
		    target: "http://172.16.5.103:8080/",
		    secure: false, // 接受 运行在 https 上的服务
		    changeOrigin: true, // 存在跨域
		    pathRewrite: {
		      "^/api": "" // 前端 /api/foo => 后端 /foo
		    }
		  }
		}
	},
	configureWebpack: {
		resolve: {
			alias: {
				"~": path.join(__dirname, 'src/')
			}
		}
	},
	transpileDependencies: [
		'vue-echarts',
		'resize-detector'
	]
};
