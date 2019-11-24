import Vue from 'vue';
import router from '~/router/index';
import vueResource from 'vue-resource';
import VueI18n from 'vue-i18n';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';
import App from './App.vue';
import store from '~/store/index';
import echarts from 'echarts';
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

Vue.prototype.$echarts = echarts;


NProgress.inc(0.2)
NProgress.configure({ easing: 'ease', speed: 500, showSpinner: false })


router.beforeEach((to, from, next) => {
	NProgress.start()
	next()
})

router.afterEach(transition => {
	NProgress.done()
})

// Vue.http.interceptors.push((request, next) => {
//   NProgress.start();
// 
//   next((response)=>{
//     NProgress.done();
//   });
// });

Vue.use(ElementUI);
Vue.use(vueResource);
Vue.use(VueI18n);


const i18n = new VueI18n({
	locale: 'cn', // 设置应用的语言
	fallbackLocale: 'en', // 默认语言设置，当其他语言没有的情况下，使用en作为默认语言
	messages: {
		cn: {
			phone: '手机号',
			phonePlaceHolder:'请输入您的手机号',
			pwd:'密码',
			pwdPlaceHolder:'请输入您的密码',
			loginBtn:'登录'
		},
		en: {
			phone: 'phone number',
			phonePlaceHolder:'Please enter your mobile number',
			pwd:'password',
			pwdPlaceHolder:'Please enter your password',
			loginBtn:'sign in'
		}
	}
})

Vue.config.productionTip = false


const app = new Vue({
	router,
	store,
	i18n,
	render: h => h(App)
}).$mount('#app')

export default app;
