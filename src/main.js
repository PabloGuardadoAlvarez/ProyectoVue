// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import firebase from'firebase'


import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

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
