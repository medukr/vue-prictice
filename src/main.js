import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Vuelidate from "vuelidate"; //простая библиотека для валидации полей формы

import dateFilter from "@/filters/date.filter";

import messagePlugin from "@/utils/message.plugin"

import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'

import firebase from "firebase/app";
import 'firebase/auth'
import 'firebase/database'


Vue.config.productionTip = false

Vue.use(messagePlugin)
Vue.use(Vuelidate)

Vue.filter('dateFilter', dateFilter); //регистрируем свой фильтр в приложение, называем dateFilter

const firebaseConfig = {
  apiKey: "AIzaSyBOhrR5EUQKsVTZYbazBAI1D878i5OPx-o",
  authDomain: "vue-practice-1e4d1.firebaseapp.com",
  databaseURL: "https://vue-practice-1e4d1.firebaseio.com",
  projectId: "vue-practice-1e4d1",
  storageBucket: "vue-practice-1e4d1.appspot.com",
  messagingSenderId: "714349468166",
  appId: "1:714349468166:web:70c9b1b19cddc4b5454187",
  measurementId: "G-C9Q02ZMDHJ"
};

firebase.initializeApp(firebaseConfig)

let app

firebase.auth().onAuthStateChanged(()=>{
  if (!app){
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})


