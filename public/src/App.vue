<template>
  <div id="app">
    <img style="height: 200px; width: 350px;" src="./assets/theLab.jpg">
    <router-view/>
    <Nav></Nav>
  </div>
</template>

<script>
  import Navigation from './components/Nav'
export default {
  name: 'App',
    components: {
    'Nav': Navigation
    }
}

// import Vue from 'vue'
// import BootstrapVue from 'bootstrap-vue'
//
// Vue.use(BootstrapVue);

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
