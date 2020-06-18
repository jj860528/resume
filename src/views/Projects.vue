<template>
  <div class="main-project">
    <div class="community">
      <ProjectItem :ProjectItem="project" v-for="(project, index) in project" :key="index"></ProjectItem>
    </div>
  </div>
</template>
<script>
import ProjectItem from "@/components/Project.vue";

export default {
  name: "Project",
  data() {
    return {
      project: this.$store.state.projects,
      href: String
    };
  },
  components: {
    ProjectItem
  }
};
</script>