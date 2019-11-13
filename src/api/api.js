//api.js
import service from './config'
 
export const loginApi = (data,params) => {
    return service({
        url: '/login',
        method: 'post',
        data:data,
		params:params
    })
};