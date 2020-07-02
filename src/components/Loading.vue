<template>
  <div :class="myloading" :imgTime = "imgTime"></div>
</template>
<script>
export default {
  name: "loading",
  props:{
    myloading:{
      type: Boolean || true,
    },
    imgTime:{
      type:String,
      default:false
    }
  },
  data() {
    return {
      loading: this.loading,
      img: this.imgTime
    };
  },
  mounted: function() {
    //圖片載入動畫
    let image = new Image();
    image.onload = () => (this.loading = true);
    image.src = this.img;
    console.log('OK')
  }
};
</script>