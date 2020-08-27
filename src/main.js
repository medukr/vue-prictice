import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Vuelidate from "vuelidate"; //простая библиотека для валидации полей формы

import dateFilter from "@/filters/date.filter";

import messagePlugin from "@/utils/message.plugin"

import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'

Vue.config.productionTip = false

Vue.use(messagePlugin)
Vue.use(Vuelidate)

Vue.filter('dateFilter', dateFilter); //регистрируем свой фильтр в приложение, называем dateFilter

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
