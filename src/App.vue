<template>
  <div id="app" class="container">
    <div class="jumbotron">
      <titulo :titulo="titulo" :numTareas="numTareas"></titulo>
      <nueva-tarea :tareas="tareas" :incrementarContador="incrementarContador"></nueva-tarea>
      <lista-tareas :tareas="tareas"></lista-tareas>
    </div>
  </div>
</template>

<script>
import Titulo from './components/Titulo.vue';
import NuevaTarea from './components/NuevaTarea.vue';
import ListaTareas from './components/ListaTareas.vue';
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
      numTareas:2,
      tareas:[
        {
            id:1,
            texto:'Estudiar Vue',
            terminada:false
        },
        {
            id:2,
            texto:'Laburar... tenes idea lo loco que suena eso?',
            terminada:false
        }
      ],
      titulo:'Mi Lista de tareas'
    }
  }
}
</script>

<style>

</style>
