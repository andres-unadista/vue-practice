<template>
  <div class="menu">
    <router-link active-class="active" exact tag="li" to="/">
      <a>Inicio</a>
    </router-link>
    <router-link active-class="active" exact tag="li" to="/user/admin">
      <a>Administración</a>
    </router-link>
    <router-link active-class="active" tag="li" to="/user/21">
      <a>Usuarios 21</a>
    </router-link>
    <router-link active-class="active" tag="li" to="/user/211">
      <a>Usuario 211</a>
    </router-link>
  </div>
</template>

<script>
import {store} from '../store/store';
import { mapState } from 'vuex'

export default{
  store,
  data(){
    return{
    }
  },
  methods:{
    
  },
  created(){
    
  },
  components: {
  },
  mounted(){
    this.$store.commit('setIdComponent')
    // this.$store.state.idComponent
  },
  computed: mapState({
    id: state => state.idComponent
  })
}
</script>

<style scoped>
  .menu{
    background-color: #e9c46a;
    padding: 1.5em;
    display:flex;
    justify-content: flex-end;
  }

  li{
    list-style: none;
  }

  a{
    text-decoration: none;
    padding: 1em;
    background: #264653;
    color: white;
    cursor: pointer;
    margin: 0 2px;
  }

  .active a{
     background: green;
  }
</style>