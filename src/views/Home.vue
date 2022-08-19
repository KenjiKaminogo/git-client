<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" class="logo">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>

<style scoped>
  img{
    width:256px;
    margin-top:224.5px;
  }
</style>
