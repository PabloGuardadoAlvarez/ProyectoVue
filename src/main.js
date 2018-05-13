// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import firebase from'firebase'
import firestore from  'firebase/firestore'

import Vue from 'vue'
import App from './App'
import router from './router'
import props from './mixins/props'
/* eslint-disable no-new */



// Initialize Firebase
var config = {
  apiKey: 'AIzaSyDLj8-0ppaAjwqm7YJAQ8xjESTDlQXnWeU',
  authDomain: 'mi-super-proyecto-2af44.firebaseapp.com',
  databaseURL: 'https://mi-super-proyecto-2af44.firebaseio.com',
  projectId: 'mi-super-proyecto-2af44',
  storageBucket: 'mi-super-proyecto-2af44.appspot.com',
  messagingSenderId: '396472016768'
};
firebase.initializeApp(config);
Vue.use(firebase)
Vue.use(firestore)
Vue.mixin(props)

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

