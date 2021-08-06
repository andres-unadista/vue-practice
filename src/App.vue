<template>
  <div id="app">
    <HeaderComponent></HeaderComponent>
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderComponent from './components/Header.component';

export default {
  name: 'App',
  data(){
    return {
      users: [],
    }
  },
  components: {
    HeaderComponent,
  },
  methods: {
   
  },

}
</script>

<style>
body{
  padding: 0;
  margin: 0;
}

article{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  background: #f8edeb;
  overflow: auto;
  padding: 1em;
}

#app {
 
}
</style>
