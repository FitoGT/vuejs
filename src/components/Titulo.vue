<template>
  <div>
    <h2>{{ tituloMayuscula() }}</h2>
    <h3>Tareas a realizar: {{numTareas}}</h3>
  </div>
   
</template>
<script>
export default{
  props:{
    titulo:{
      type:String,
      required:true,
      default:'tareas'
    },
    numTareas:{
      type:Number,
      default:0
    }
  },
  methods:{
    tituloMayuscula(){
      return this.titulo.toUpperCase()
    }
  }
}
</script>

