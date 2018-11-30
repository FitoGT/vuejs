import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';


export var bus = new Vue({
  methods:{
    actualizarContador(numTareas){
      this.$emit('actualizarContador',numTareas);
    }
  }
});

Vue.use(VueResource);
Vue.http.options.root='https://tareas-9923c.firebaseio.com';
new Vue({
  el: '#app',
  render: h => h(App)
})
