<template>
  <div class="article" :id="article.id">
    <div class="article-img img" :style="img" @click="go()">
      <Loading :source="loading"></Loading>
    </div>
    <div class="article-container">
      <h2 class="article-title" @click="go()">{{article.name}}</h2>
      <pre class="article-content" v-html="content[0].content"></pre>
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
      console.log(this.loading);
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
  methods: {
    go: () => {
      alert("暫無此頁");
    }
  },
  watch: {},
  components: {
    Loading
  }
};
</script>