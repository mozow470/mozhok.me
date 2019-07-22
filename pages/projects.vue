<template>
  <PageContents page="PROJECTS">
    <p>もう少しでアプリを公開するかも...</p>
  </PageContents>
</template>

<script>
  import PageContents from '~/components/PageContents.vue'

  export default {
    components: {
      PageContents
    },
    head() {
      return {
        title: 'プロジェクト'
      }
    },
    name: "projects"
  }
</script>

<style scoped>

</style>
