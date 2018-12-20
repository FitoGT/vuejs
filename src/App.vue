<template>
  <div id="app" class="container">
    <div class="jumbotron">
      <titulo :titulo="titulo"></titulo>
      <nueva-tarea :tareas="tareas"></nueva-tarea>
      <lista-tareas :tareas="tareas"></lista-tareas>
      <input-custom @emitEvent="parentMethod($event)"></input-custom>
      {{child}}
    </div>
  </div>
</template>

<script>
import Titulo from './components/Titulo.vue';
import NuevaTarea from './components/NuevaTarea.vue';
import ListaTareas from './components/ListaTareas.vue';
import InputCustom from './components/InputCustom.vue';
import {store} from './main.js'
export default{
  components:{
    Titulo,
    NuevaTarea,
    ListaTareas,
    InputCustom
  },
  methods:{
      incrementarContador(){
        return this.numTareas++
      },
      parentMethod($event){
        console.log($event)
        this.child = $event;
      }
  },
  data(){
    return{
      tareas:[],
      titulo:'Mi Lista de tareas',
      child:''
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
            store.commit('countTodos',this.tareas.length);
          }
        });
        
  }
}
</script>

<style>

</style>
