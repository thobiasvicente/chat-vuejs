import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import firebase from 'firebase'

Vue.config.productionTip = false

// Required for side-effects
require("firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyC1kkPaDuws2I7Jy0g7NtXF87Ozaf6Gy7o",
  authDomain: "chat-vuejs-e8a8a.firebaseapp.com",
  databaseURL: "https://chat-vuejs-e8a8a.firebaseio.com",
  projectId: "chat-vuejs-e8a8a",
  storageBucket: "chat-vuejs-e8a8a.appspot.com",
  messagingSenderId: "148338809674",
  appId: "1:148338809674:web:e0b82c6979dcba0572ffb3",
  measurementId: "G-LE0DG512Q9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var db = firebase.firestore();

window.db = db;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
