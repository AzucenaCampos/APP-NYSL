import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import firebase from 'firebase/app'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "AIzaSyAbthL75cnPr6YTUseGgkbCY4dOI2SyzfA",
  authDomain: "app-nysl-a45b5.firebaseapp.com",
  databaseURL: "https://app-nysl-a45b5.firebaseio.com",
  projectId: "app-nysl-a45b5",
  storageBucket: "app-nysl-a45b5.appspot.com",
  messagingSenderId: "568512239910",
  appId: "1:568512239910:web:9a3ff6290512f37a2489e7",
  measurementId: "G-VZDS1MX4E4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
