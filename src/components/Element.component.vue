<script>
export default{
  name: 'elementComponent',
  props: {
    tipo: String    
  },
  render(createElement){
    return createElement(
      this.tipo,
      this.$slots.default
    )
  },
}
</script>

<style scoped>
*{
    width: 250px;
    text-align:center;
    margin: 5px;
  }
</style>