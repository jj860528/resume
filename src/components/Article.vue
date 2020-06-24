<template>
  <div class="article" :id="article.id">
    <div class="article-img img" :style="img"></div>
    <div class = "article-container">
      <h2 class="article-title">{{article.name}}</h2>
      <pre class="article-content" v-html="content[0].content"></pre>
    </div>
  </div>
</template>
<script>
export default {
  name: "Article",
  props: {
    Article: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      article: this.Article,
      content: this.Article.content || 1231,
      img: {
        backgroundImage: "url(" + this.Article.img + ")",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }
    }
  },
  watch:{
    textContent:function(){

    }
  }
};
</script>