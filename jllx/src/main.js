// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import vuerouter from 'vue-router'
import VueRouter from 'vue-router'
import {routes} from './router.js'
import vueresource from 'vue-resource'

Vue.config.productionTip = false



Vue.use(vuerouter)
Vue.use(vueresource)


const router = new VueRouter({
  routes,
  mode:'hash'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router
})
