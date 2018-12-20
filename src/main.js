import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';
import Vuex from 'vuex'

Vue.use(Vuex)

// export var bus = new Vue({
//   methods:{
//     actualizarContador(numTareas){
//       this.$emit('actualizarContador',numTareas);
//     }
//   }
// });

export var store = new Vuex.Store({
  state:{
    count:0
  },
  getters:{
    getCountTodos: state => state.count,
  },
  mutations:{
    countTodos(state,numTodos){
      state.count = numTodos;
    }
  },
  actions:{
    countTodosAsync({commit},data){
      commit('countTodos',data);
    }
  }
})

Vue.use(VueResource);
Vue.http.options.root='https://tareas-9923c.firebaseio.com';
new Vue({
  el: '#app',
  render: h => h(App)
})
