//api.js
import service from './config'

export const loginApi = (data, params) => {
	return service({
		url: 'auth/login',
		method: 'post',
		data: data,
		params: params
	})
};

export const dataViewApi = (params) => {
	return service({
		url: 'source',
		method: 'get',
		params: params
	})
};

export const countryApi = (params) => {
	return service({
		url: 'country',
		method: 'get',
		params: params
	})
};

export const newsListApi = (id) => {
	return service({
		url: `news?source_id=${id}&page=1&page_size=10`,
		method: 'get'
	})
};


export const newsDeatilApi = (id) => {
	return service({
		url: `news/${id}`,
		method: 'get'
	})
};
