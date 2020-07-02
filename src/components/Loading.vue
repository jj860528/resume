<template>
  <div class="myloading" v-if = "isLoading"></div>
</template>
<script>
export default {
  name: "loading",
  props: {
    source: {
      type: Boolean,
      require: true,
      default: true
    }
  },
  data() {
    return {
      isLoading: true
    };
  },
  watch: {
    source: function(newValue, oldValue) {
      if (!newValue) {
        this.isLoading = false;
      }
    }
  }
};
</script>