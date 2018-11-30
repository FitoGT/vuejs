<template>
  <div id="app" class="container">
    <div class="jumbotron">
      <titulo :titulo="titulo"></titulo>
      <nueva-tarea :tareas="tareas"></nueva-tarea>
      <lista-tareas :tareas="tareas"></lista-tareas>
    </div>
  </div>
</template>

<script>
import Titulo from './components/Titulo.vue';
import NuevaTarea from './components/NuevaTarea.vue';
import ListaTareas from './components/ListaTareas.vue';
import {bus} from './main.js';
export default{
  components:{
    Titulo,
    NuevaTarea,
    ListaTareas
  },
  methods:{
      incrementarContador(){
        return this.numTareas++
      }
  },
  data(){
    return{
      tareas:[],
      titulo:'Mi Lista de tareas'
    }
  },
  created(){
    this.$http.get('tareas.json')
        .then(response=>{
          return response.json()
        })
        .then(json=>{
          for(let id in json){
            let tarea = {
              id:id,
              texto:json[id].texto,
              terminada : json[id].terminada
            }
            this.tareas.push(tarea);
            bus.actualizarContador(this.tareas.length);
          }
        });
        
  }
}
</script>

<style>

</style>
