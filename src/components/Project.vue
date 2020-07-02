<template>
  <div class="project">
    <div class="project-img img" :style="img">
      <div :class="{Imgloading:Imgloading}">
        <div class="mask">
          <a @click="go(project.url)">
            <button>前往網站</button>
          </a>
        </div>
      </div>
    </div>
    <div class="introduction">
      <h2  @click="go(project.url)">{{project.name}}</h2>
      <b>{{project.introduction}}</b>
      <p>相關技術</p>
      <ul>
        <li v-for="(skill, index) in project.skills" :key="index">{{skill.skill}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "project-item",
  props: {
    ProjectItem: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      Imgloading: true,
      project: this.ProjectItem,
      img: {
        backgroundImage: "url(" + this.ProjectItem.img + ")",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }
    };
  },
  mounted:function(){
    //圖片載入動畫
    let image = new Image()
    image.onload = () =>
    this.Imgloading = false
    image.src = this.ProjectItem.img
  },
  methods:{
    go:(val)=>
      window.open(val)
  }
};
</script>