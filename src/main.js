import Vue from 'vue';
import router from '~/router/index';
import vueResource from 'vue-resource';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';
import VueI18n from "vue-i18n"
import elementEnLocale from 'element-ui/lib/locale/lang/en'
import elementZhLocale from 'element-ui/lib/locale/lang/zh-CN'
import App from './App.vue';
import store from '~/store/index';
import echarts from 'echarts';
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import '~/assets/iconfont/iconfont.css'

Vue.prototype.$echarts = echarts;


NProgress.inc(0.2)
NProgress.configure({
	easing: 'ease',
	speed: 500,
	showSpinner: false
})
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

Vue.use(vueResource);
Vue.use(VueI18n);


const i18n = new VueI18n({
	locale: store.state.index.language, //指定默认语言
	messages: {
		cn: {
			...require('~/lang/zh.json'),
			...elementZhLocale
		},
		en: {
			...require('~/lang/en.json'),
			...elementEnLocale
		}
	}
})
Vue.use(ElementUI, {
	i18n: (key, value) => i18n.t(key, value)
})


Vue.config.productionTip = false


const app = new Vue({
	router,
	store,
	i18n,
	render: h => h(App)
}).$mount('#app')

export default app;
