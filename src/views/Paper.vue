<template>
  <div v-html="content" class = "paper-content"></div>
</template>
<script>
export default {
  data() {
    return {
      id: this.$route.query.id,
      paper: [],
      content:"等待加載中",
    };
  },
  created: function(){
    this.paper = this.$store.state.articles
  },
  watch: {
    paper: function(val){
      const paperID = this.id
      function pap(data){
        return data.id === paperID
      }
      const paperContent = val.find(pap)
      if(paperContent){
        this.content = paperContent.content
      }
      
    }
  },
};
</script>
<style scoped>

.paper-content{
  text-align: left;
  line-height: 2em;
}
.paper-content /deep/ h1{
  text-align: center;
}
.paper-content /deep/ pre{
  background-color:rgb(31, 31, 31) ;
  color: azure;
  border-radius: 10px;
  margin: 2em 0;
}

</style>