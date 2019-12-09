import axios from "axios";
import qs from "qs";
import app from "../main.js";
import router from '~/router/index';


/****** 创建axios实例 ******/
const service = axios.create({
	//baseURL: process.env.BASE_URL,  // api的base_url
	// baseURL: 'https://awstest.chargo.cn:8001', // api的base_url
	// baseURL: 'http://192.168.3.60:1080', // api的base_url
	baseURL: 'http://ec2-34-244-176-172.eu-west-1.compute.amazonaws.com:2333', // api的base_url
	timeout: 20000 // 请求超时时间
});

/****** request拦截器==>对请求参数做处理 ******/
service.interceptors.request.use(config => {
	config.method === ('post' || 'put') ?
		config.data = qs.stringify({ ...config.data
		}) :
		config.params = { ...config.params
		};
	config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
	config.headers['Accept-Language'] = 'en'
	if (config.url !== 'auth/login') {
		config.headers['authorization'] = localStorage.getItem('Authorization');
	}
	//清除get方法的缓存：尤其是IE浏览器缓存
	// if (config.method.toLocaleUpperCase() === 'GET') {
	// 	if (!config.params) config.params = {};
	// 	config.params['sendleTime'] = new Date().getTime();
	// }
	return config;
}, error => { //请求错误处理
	console.log(error)
	Promise.reject(error)
});

/****** respone拦截器==>对响应做处理 ******/
service.interceptors.response.use(
	response => {
		//token过期
		if (response.data.code === 2004) {
			router.replace({
				path: '/login'
			})
		}else{
			//这里根据后端提供的数据进行对应的处理
			if (response.data) {
				return response.data;
			}
		}
	},
	error => { //响应错误处理
		// console.log(Object.keys(error));

		// console.log(JSON.stringify(error));
		// let text = JSON.parse(JSON.stringify(error)).response.status === 404 ?
		// 	'404' :
		// 	'网络异常，请重试';

		return error.response
	}
);

export default service;
