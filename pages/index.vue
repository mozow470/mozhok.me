<template>
  <section class="nav-container">
    <nuxt-link v-for="(content, index) in contants" :key="index" :to="content.path" >
      <NavContent
        :title="content.title"
        :gradientColor="content.color"
        :backgroundUrl="content.background"/>
    </nuxt-link>
  </section>
</template>

<script>
  import NavContent from '~/components/NavContent.vue'
  export default {
    head() {
      return {
        title: 'ホーム'
      }
    },
    components: {
      NavContent
    },
    data() {
      return {
        contants: [
          {
            title: "PROFILE",
            path: "/profile",
            background: require('~/assets/images/profile.png'),
            color: "#549b97"
          },
          {
            title: "PROJECTS",
            path: "/projects",
            background: require('~/assets/images/projects.png'),
            color: "#6887C1"
          },
          {
            title: "GAMES",
            path: "/games",
            background: require('~/assets/images/games.png'),
            color: "#C16D68"
          },
          {
            title: "MUSIC",
            path: "/music",
            background: require('~/assets/images/music.png'),
            color: "#A0C168"
          },
        ]
      }
    }
  }
</script>

<style scoped>

</style>
