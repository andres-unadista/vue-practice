<template>
  <div class="card">
    <slot name="component"></slot>
    <h2>{{user.name}}</h2>
    <div class="body">
      <p>{{user.email}} - {{user.phone}}</p>
      <button @click="emitDelete">
        Eliminar <i class="fa fa-trash-o" aria-hidden="true"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default{
  name: 'ArticleComponent',
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  data(){
    return{
      
    }
  },
  methods:{
    emitDelete(){
      this.$emit('delete', this.user.id);
    }
  },
  components:{
    
  },
}
</script>

<style scoped>
  .card{
    width: 250px;
    text-align:center;
    margin: 5px;
  }
  .card h2{
    background: #264653;
    margin: 0;
    color: white;
    padding: .5em;
  }
  .card .body{
    margin: 0;
    background: #2a9d8f;
    padding: 1em;
  }

  .card button{
    padding: 0.5em 1em;
    background: #d00000;
    color: white;
    border: none;
    cursor: pointer;
    font-size: 1em;
  }


</style>