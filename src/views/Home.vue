<template>
  <div>
      <Nav></Nav>
      <main class="main-container">
        <router-view></router-view>
      </main>
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from "@/components/Nav.vue";

export default {
  name: "Home",
  components: {
    Nav
  }
};
</script>
