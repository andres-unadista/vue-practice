<template>
  <div>
    <div class="container mt-2">
      <div class="row">
        <div class="col-md-4">
          <div class="card">
            <div class="card-header">
              <h4 class="card-title">Añadir usuario</h4>
            </div>
            <div class="card-body">
              <form >
                <div class="form-group">
                  <label for="name">Nombre</label>
                  <input type="text" v-model="newWebSite.name" id="name" class="form-control" placeholder="ingrese el nombre" aria-describedby="helpId">
                </div>
                <div class="form-group">
                  <label for="author">Autor</label>
                  <input type="text" v-model="newWebSite.author" id="author" class="form-control" placeholder="ingrese el nombre" aria-describedby="helpId">
                </div>
                <div class="form-group" v-if="!stateEdit">
                  <a v-on:click="setUser()" class="btn btn-primary btn-block">Crear</a>
                </div>
                <div class="form-group" v-else>
                  <a v-on:click="setUser()" class="btn btn-primary btn-block">Editar</a>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="col-md-8">
           <div class="card">
            <div class="card-header">
              <h4 class="card-title">Listado de usuarios</h4>
            </div>
            <div class="card-body">
              <table class="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Usuario</th>
                    <th>Operaciones</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(user, index) in users" :key="index"
                  >
                    <td scope="row">{{user.name}}</td>
                    <td>{{user.author}}</td>
                    <td>
                      <button class="btn btn-warning mr-1" v-on:click="editUser(index)">Editar</button>
                      <button class="btn btn-danger" v-on:click="deleteUser(index)">Eliminar</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default{
  name: 'admin-users',
  data(){
    return{
      users: [],
      stateEdit: false,
      indexEdit: null,
      newWebSite: {
        name: '',
        author: '',
      }
    }
  },
  methods:{
    setUser(){
      // edit or save
      let user = {...this.newWebSite};
      if(this.stateEdit){
        this.users[this.indexEdit] = user;
      } else {
        this.users.unshift(user);
      }
      this.stateEdit = false;
      this.emptyUser();
    },
    emptyUser(){
      this.newWebSite = {
        name: '',
        author: '',
      }
    },
    deleteUser(indexUser){
      this.users.splice(indexUser, 1);
    },
    editUser(indexUser){
      console.log(indexUser);
      const user = {...this.users[indexUser]};
      this.indexEdit = indexUser;
      this.newWebSite.name = user.name;
      this.newWebSite.author = user.author;
      this.stateEdit = true;
    }
  },
  components:{
    
  },
}
</script>

<style scoped>

</style>