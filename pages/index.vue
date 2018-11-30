<template>
  <section class="nav-container">
    <nuxt-link v-for="(content, index) in $store.state.pages" :key="index" :to="content.path" >
      <NavContent
        :title="content.title"
        :gradientColor="content.color"
        :backgroundUrl="content.background"
      />
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
  }
</script>

<style scoped>

</style>
