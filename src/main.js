import Vue from 'vue'
import store from './vuex/store'
import App from './App.vue'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue, BootstrapVueIcons)
Vue.config.productionTip = false

new Vue({
    store,
    render: h => h(App)
}).$mount('#app')
