<template>
  <div>
    <h2>{{ tituloMayuscula() }}</h2>
    <h3>Tareas a realizar: {{numTodo}}</h3>
    
  </div>
   
</template>
<script>
import {store} from '../main.js';
export default{
  props:{
    titulo:{
      type:String,
      required:true,
      default:'tareas'
    }
  },

  methods:{
    tituloMayuscula(){
      return this.titulo.toUpperCase()
    }
  },
  computed: {
    numTodo () {
      return store.getters.getCountTodos
    }
  }
}
</script>

