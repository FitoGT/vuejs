<template>
  <div>
    <h2>{{ tituloMayuscula() }}</h2>
    <h3>Tareas a realizar: {{numTareas}}</h3>
  </div>
   
</template>
<script>
import {bus} from '../main.js';
export default{
  props:{
    titulo:{
      type:String,
      required:true,
      default:'tareas'
    }
  },
  data(){
    return{
      numTareas:0
    }
  },
  methods:{
    tituloMayuscula(){
      return this.titulo.toUpperCase()
    }
  },
  created(){
    bus.$on('actualizarContador',(numTareas)=>{
      this.numTareas = numTareas;
    })
  }
}
</script>

