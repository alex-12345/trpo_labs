import {one} from "./js/one";
import "./css/style.css";
import Vue from 'vue'
import App from './App.vue'
/*
var cities = require('./json/countries.json');
one();
console.log(cities[0]);
document.write("sfds");
*/
new Vue({
    el: '#app',
  render: h => h(App)
  })