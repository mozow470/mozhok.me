<template>
  <section class="nav-container">
    <NavContent
      title="PROFILE"
      gradientColor="#549b97"
      :backgroundUrl="require('~/assets/game.png')"/>
    <NavContent
      title="PROJECTS"
      gradientColor="#6887C1"
      :backgroundUrl="require('~/assets/game.png')"/>
    <NavContent
      title="GAMES"
      gradientColor="#C16D68"
      :backgroundUrl="require('~/assets/game.png')"/>
  </section>
</template>

<script>
  import NavContent from '~/components/NavContent.vue'
  export default {
    components: {
      NavContent
    }
  }
</script>

<style scoped>

</style>
