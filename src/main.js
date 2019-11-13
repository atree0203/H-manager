import Vue from 'vue'
import App from './App.vue'
import router from '~/router/index'
import vueResource from 'vue-resource'

import Vuex from 'vuex';
// import vuexI18n from 'vuex-i18n';
import store from '~/store/index'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';
// import { LoadingPlugin } from 'vux'
// Vue.use(LoadingPlugin)

Vue.use(ElementUI);
Vue.use(vueResource)
Vue.use(Vuex);

Vue.config.productionTip = false

// const Store = new Vuex.Store({
//     modules: {
//         i18n: vuexI18n.store
//     }
// });
// Vue.use(vuexI18n.plugin, Store);
// const translationsEn = {
//     "content": "This is some {type} content"
// };

// translations can be kept in separate files for each language
// i.e. resources/i18n/de.json.
// add translations directly to the application

// Vue.i18n.add('en', translationsEn);
//  
// // set the start locale to use
// Vue.i18n.set('en');


const app = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

export default app;
