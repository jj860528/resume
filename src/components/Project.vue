<template>
  <div class="project">
    <div class="project-img img" :style ="img">
      <div class="mask">
        <a :href="project.url">
          <button>前往網站</button>
        </a>
      </div>
    </div>
    <div class="introduction">
      <h2>{{project.name}}</h2>
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
      required: true,
    }
  },
  data() {
    return {
      project: this.ProjectItem,
      img:{
        backgroundImage: "url("+require('../assets/'+this.ProjectItem.img)+")",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }
    };
  }
};
</script>