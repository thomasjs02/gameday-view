<template>
  <ThomasSmallwood msg="Welcome to Your Vue.js App"/>
  <link href="./assets/css/style.css" rel="stylesheet" type="text/css">
</template>

<script>
import ThomasSmallwood from './components/ThomasSmallwood.vue'
import './assets/css/style.css';

export default {
  name: 'App',
  components: {
    ThomasSmallwood
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
