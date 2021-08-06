<template>
  <div class="container">
    <h1 v-pending:back.#023047="22">{{ id }}</h1>
    <button @click="redirectHome">Ir al Inicio</button>
    <h2>Total de edad: {{getTotalAgeUsers}}</h2>
    <ul v-for="person in persons" v-bind:key="person.id">
      <li>{{person.name}}</li>
    </ul>
  </div>
</template>

<script>
import {mapGetters, mapActions, mapState} from 'vuex';

export default{
  name: 'total-age',
  data(){
    const {id} = this.$route.params;
    return { id };
  },
  computed: {
    ...mapState('user', ['persons']),
    ...mapGetters('user', ['getTotalAgeUsers'])
  },
  methods: {
    ...mapActions('user', ['getPersons']),
    redirectHome(){
      this.$router.push(
        '/', 
        () => console.log('Redirección exitosa'), 
        () => console.log('Redirección fallida')
      );
    }
  },
  mounted(){
    this.getPersons();
  },
  watch: {
    $route(to) {
        this.id = to.params.id;
    }
  }
}
</script>

<style scoped>
  .container{
    text-align: center;
  }

  button{
    padding: 1em;
    margin: 1em;
    background: #264653;
    color: white;
    cursor: pointer;
  }
</style>