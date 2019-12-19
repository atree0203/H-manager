const state = {
	// 存储token
	Authorization: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : '',
	phone: localStorage.getItem('phone') ? localStorage.getItem('phone') : '',
	language: 'en'
}
const mutations = {
	// 修改token，并将token存入localStorage
	changeLogin(state, user) {
		state.Authorization = user.Authorization;
		localStorage.setItem('Authorization', user.Authorization);
	},
	changePhone(state,user) {
		state.phone = user.phone;
		localStorage.setItem('phone', user.phone);
	},
	//改变语言
	changeLanguage(state,language) {
		state.language = language;
	}
}
const actions = {

}

export default {
	state,
	mutations,
	actions
}
