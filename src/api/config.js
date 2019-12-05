import axios from "axios";
import qs from "qs";
import app from "../main.js";


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
	// console.log(config.url)
	
	config.method === ('post' || 'put') ?
		config.data = qs.stringify({ ...config.data
		}) :
		config.params = { ...config.params
		};
	config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
	config.headers['Accept-Language'] = 'en'
	if(config.url !== 'auth/login'){
		config.headers['authorization'] = localStorage.getItem('token');
		// config.headers['token'] = localStorage.getItem('token'); 
	}
	

	return config;
}, error => { //请求错误处理
	console.log(error)
	Promise.reject(error)
});


/****** respone拦截器==>对响应做处理 ******/
service.interceptors.response.use(
	response => { //成功请求到数据
		// console.log(response)
		//这里根据后端提供的数据进行对应的处理
		if (response.data) {
			return response.data;
		} else {

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
