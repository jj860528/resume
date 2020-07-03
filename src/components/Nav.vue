<template>
  <header class="main-header">
    <div class="container">
      <div class="main-personal">
        <img src="../assets/lifePersonal.jpg" alt="personal" />
        <h1>陳偉哲</h1>
        <h2>前端工程師．New Taipei．jj860528@gmail.com</h2>
        <div class="community">
          <nav class="link">
            <a alt="Github" @click="go('https://github.com/jj860528')">Github</a>
            <a alt="Fackbook" @click="go('https://www.facebook.com/chen.gavin.35')">Fackbook</a>
          </nav>
        </div>
      </div>
      <nav class="main-nav" :class="{fixedNav:fixedNav}" ref="Navheight">
        <router-link to="/about">關於</router-link>
        <router-link to="/project">專案</router-link>
        <!-- 還沒開始寫-->
        <router-link to="/article">文章</router-link>
      </nav>
    </div>
  </header>
</template>
<script>
export default {
  name: "main-nav",
  data() {
    return {
      fixedNav: false,
      Navheight: 425
    };
  },
  methods: {
    go: val => window.open(val),
    aaheight: function(val){
      //頁面高度
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      const fixedheght = scrollTop-this.Navheight
      if(fixedheght > 0){
        this.fixedNav = true
      }else{
        this.fixedNav = false
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.aaheight) //監聽滑鼠滾動
    var height = this.$refs.Navheight.getBoundingClientRect().top
    //this.Navheight = height
  },
  watch: {
    Navheight: function(newh, oldh) {
      var _that = this;
      //console.log(_that.$refs.Navheight.getBoundingClientRect().top)
      console.log(newh, oldh);
      // alert(this.$store.getters.screenHeight)
    }
  }
};
</script>
<style  lang="scss">
</style>
