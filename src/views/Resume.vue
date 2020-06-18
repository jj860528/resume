<template>
  <div class = "main-resume">
    <pdf v-for="i in numPages" :key="i" :src="src" :page="i"></pdf>
  </div>
</template>
<script>
import pdf from "vue-pdf";
var loadingTask = pdf.createLoadingTask("./pdf/chen.pdf");

export default {
  name: "Resume",
  components: {
    pdf
  },

  data() {
    return {
      src: loadingTask,
      numPages: undefined
    };
  },
  mounted() {
    this.src.promise.then(pdf => {
      this.numPages = pdf.numPages;
    });
  }
};
</script>