<template>
  <div class="about">
    <section class = "about-section">
      <h1 class = "title">簡介</h1>
      <p class = "content">Hello，我來自新北市樹林，從小對電腦方面總是特別感興趣，所以選擇了工程師這個行業。
        <br>我的個性積極熱情，不畏懼挑戰與困難，謙卑接受任何指教與時時改進自我，在遇到困難的時候喜歡了解問題並且解決問題。
      </p>
    </section>
    <section class = "about-section">
      <h1 class = "title">相關技能</h1>
      <div class = "skills">
        <ul v-for="(skills, index) in SkillsData" :key = "index">
          <h1>{{skills.name}}</h1>
          <li v-for="(skill, index) in skills.skills" :key = "index">{{skill.skill}}</li>
        </ul>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data(){
    return{
      SkillsData: this.$store.state.skills
    }
  }
}
</script>