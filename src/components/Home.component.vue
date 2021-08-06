<template>
  <div>
    <section>
      <article v-if="users.length > 0">
        <ArticleComponent class="article" v-for="user in users" v-bind:key="user.id" :user="user" @delete="deleteUser($event)">
          <template slot="component">Componente Article</template>
        </ArticleComponent>
      </article>
    </section>
    <section>
      <article>
        <ElementComponent tipo="h2">Tipografías h2</ElementComponent>
        <ElementComponent tipo="h3">Tipografías h3</ElementComponent>
        <ElementComponent tipo="h4">Tipografías h4</ElementComponent>
      </article>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import axios from 'axios'

import ArticleComponent from './Article.component';
import ElementComponent from './Element.component';

  export default {
    name: '',
    data() {
      return {
        users: [],
      }
    },
    methods: {
      getUsers(){
        axios.get('https://jsonplaceholder.typicode.com/users')
          .then(resp => {
            this.users = resp.data;
            console.log(this.users);
          })
          .catch(err => console.error(err))
      },
      deleteUser(id){
        this.users = this.users.filter(user => user.id !== id);
        console.log(id);
      }
    },
    components: {
      ArticleComponent,
      ElementComponent,
    },
    mounted(){
      this.getUsers();
      this.$store.commit('setIdComponent')
    },
    computed: mapState({
      id: state => state.idComponent
    })
  }
</script>

<style scoped>

</style>