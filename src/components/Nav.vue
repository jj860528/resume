<template>
  <header class="main-header">
    <div class="container">
      <div class="main-personal">
        <img src="../assets/lifePersonal.jpg" alt="personal" />
        <h1>陳偉哲</h1>
        <h2>前端工程師．New Taipei．jj860528@gmail.com</h2>
        <div class="community">
          <nav class="link">
            <a href="https://github.com/jj860528" alt="Github">Github</a>
            <a href="https://www.facebook.com/chen.gavin.35" alt="Fackbook">Fackbook</a>
          </nav>
        </div>
      </div>
      <nav class="main-nav">
        <router-link to="/about">關於</router-link>
        <router-link to="/project">專案</router-link>
      </nav>
    </div>
  </header>
</template>
<script>
export default {
  name: "main-nav",
  data() {
    return {
    };
  }
};
</script>
<style  lang="scss">
</style>
