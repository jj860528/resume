<template>
  <div class ="articles">
      <Article :Article = "ArticlesItem" v-for="ArticlesItem in ArticlesItem" :key = "ArticlesItem.id"></Article>
  </div>
</template>
<script>
import Article from '../components/Article.vue';

export default {
  name: "Articles",
  data() {
    return {
      ArticlesItem:this.$store.state.articles
    };
  },
  mounted:function(){
  },
  components:{
      Article
  }
};
</script>