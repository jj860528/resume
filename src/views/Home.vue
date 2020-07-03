<template>
  <div>
    <Nav></Nav>
    <main class="main-container">
      <transition name="slide-fade">
        <router-view v-if="show"></router-view>
      </transition>
    </main>
    <div id="footer">
      <div class="container">
        <a href="mailto:jj860528@gmail.com">
          <font-awesome-icon icon="envelope" />
          jj860528@gmail.com
        </a>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from "@/components/Nav.vue";

export default {
  name: "Home",
  data() {
    return {
      show: true
    };
  },
  components: {
    Nav
  }
};
</script>
<style lang="scss">
.slide-fade-enter-active {
  transition: all 0.5s ease;
}
.slide-fade-leave-active {
  transition: all 0s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(30px);
  opacity: 0;
}
</style>