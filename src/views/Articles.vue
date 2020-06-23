<template>
  <div class ="articles">
      <Article></Article>
  </div>
</template>
<script>
import Article from '../components/Article.vue';

export default {
  name: "Articles",
  data() {
    return {};
  },
  components:{
      Article
  }
};
</script>