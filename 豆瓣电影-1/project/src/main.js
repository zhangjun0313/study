// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import router from './router'

import '@/assets/css/app.css'
Vue.config.productionTip = false
Vue.use(Vuex)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

var iScale=1/window.devicePixelRatio;
document.write('<meta name="viewport" content="width=device-width,initial-scale='+iScale+',minimum-scale='+iScale+',maximum-scale='+iScale+',user-scalable=no"/>');
var iWidth=document.documentElement.clientWidth;
document.getElementsByTagName('html')[0].style.fontSize = iWidth/46+ 'px';



let hotSubject = document.getElementsByClassName('hotSubject')[0]
let hotSubjectLis = hotSubject.getElementsByTagName('li')
for( let i = 0 ; i < hotSubjectLis.length ; i++ ){
    hotSubjectLis[i].addEventListener( 'touchstart' , function(){
        console.log('点击事件')
    } )
    hotSubjectLis[i].addEventListener( 'touchmove' , function(){
        console.log('移动事件')
    } )
    hotSubjectLis[i].addEventListener( 'touchend' , function(){
        console.log('抬起事件')
    } )
}