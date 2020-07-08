<template>
  <div class="article" :id="article.id">
    <div class="article-img img" :style="img" @click="go()">
      <Loading :source="loading"></Loading>
    </div>
    <div class="article-container">
      <h2 class="article-title" @click="go()">{{article.name}}</h2>
      <p class="article-content" v-html="introduction"></p>
    </div>
  </div>
</template>
<script>
import Loading from "./Loading.vue";
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
      loading: true,
      imgTime: this.Article.img,
      article: this.Article,
      introduction: this.Article.introduction,
      content: this.Article.content || "暫無內容",
      img: {
        backgroundImage: "url(" + this.Article.img + ")",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }
    };
  },
  created: function() {
    let image = new Image();
    image.onload = () => {
      this.loading = false;
    };
    image.src = this.imgTime;
    
  },
  /*mounted: function() {
    console.log(this.loading);
    let image = new Image();
    image.onload = () => {
      console.log(this.loading);
    };
    image.src = this.imgTime;
    this.loading = false;
  },*/
  methods:{
    go: function(){
      this.$router.push({path:'/paper',query:{id:this.article.id}});
    }
  },
  watch: {},
  components: {
    Loading
  }
};
</script>