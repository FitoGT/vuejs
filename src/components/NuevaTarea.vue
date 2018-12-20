<template>
    <div class="input-group">
        <input type="text"
            placeholder="Escribe una nueva tarea"
            v-model="nuevaTarea"
            class="form-control"
            @keyup.enter="agregarTarea"
        />
        <span class="input-group-btn">
            <button type="button" @click="agregarTarea" class="btn btn-primary">Agregar  </button>
        </span>
    </div>
</template>
<script>
import {store} from '../main.js';
export default {
    data(){
       return{
           nuevaTarea:''
       } 
    },
    props:['tareas','incrementarContador'],
    methods:{
        agregarTarea(){
            var texto = this.nuevaTarea.trim();
            if(texto){
                this.tareas.push({
                    texto:texto,
                    terminada:false
                });
                this.$http.post('tareas.json',{
                    texto:texto,
                    terminada:false
                }).then(response =>{
                    console.log(response);
                })

               //this.incrementarContador();
               store.dispatch('countTodosAsync',this.tareas.length);
            }
            this.nuevaTarea = '';

        }
    },
    created(){
        store.commit('countTodos',this.tareas.length);
    }
}
</script>

