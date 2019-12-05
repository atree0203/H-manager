//api.js
import service from './config'
 
export const loginApi = (data,params) => {
    return service({
        url: 'auth/login',
        method: 'post',
        data:data,
		params:params
    })
};

export const dataViewApi = (params) => {
    return service({
        url: 'source',
        method: 'get',
		params:params
    })
};