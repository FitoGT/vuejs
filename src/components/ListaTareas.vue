<template>
     <ul class="list-group">
        <li v-for="(tarea, indice) of tareas" :key="indice" class="list-group-item" :class="{terminada: tarea.terminada}">
        {{ tarea.texto }}
        <span class="pull-right">
        <button type="button" class="btn btn-success btn-xs glyphicon glyphicon-ok"
               @click="update(indice)"       
        ></button>
        <button type="button" class="btn btn-danger btn-xs glyphicon glyphicon-remove"
                @click="del(indice)"       
        ></button>
        </span>
        </li>
    </ul>
</template>
<script>
import {store} from '../main.js'
export default {
    props:['tareas'],
    methods:{
        del(key){
            let id = this.tareas[key].id; 
            console.log(id);            
            this.$http.delete(`tareas/${id}.json`)
                .then(resp=>{
                    this.tareas.splice(key,1)
                    store.dispatch('countTodosAsync',this.tareas.length);
                    console.log(resp);
                })
        },
        update(key){
          let terminada = this.tareas[key].terminada =! this.tareas[key].terminada
          let id = this.tareas[key].id; 
          this.$http.patch(`tareas/${id}.json`,{
              terminada
          }).then(
              resp=>{
                  console.log(resp)
              }
          )  
        }
    }
}
</script>
<style scoped>
.terminada{
    color: gray;
    text-decoration: line-through;
}
</style>

