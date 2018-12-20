<template>
    <div>
        <input type="text" v-model="child" @input="childMethod">
    </div>
</template>

<script>
export default{
  data(){
    return{
      child:'Mi Lista de tareas'
    }
  },
  methods:{
    childMethod(){
      this.$emit('emitEvent',this.child);
    }
  }
}
</script>

<style>

</style>
