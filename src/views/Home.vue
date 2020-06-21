<template>
  <div>
      <Nav></Nav>
      <main class="main-container" >
        <transition name="slide-fade">
          <router-view v-if="show"></router-view>
        </transition>
      </main>
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from "@/components/Nav.vue";

export default {
  name: "Home",
  data(){
    return{
      show:true
    }
  },
  components: {
    Nav
  }
};
</script>
<style lang="scss">
  .slide-fade-enter-active {
  transition: all .5s ease;
}
.slide-fade-leave-active {
  transition: all .0s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(30px);
  opacity: 0;
}
</style>