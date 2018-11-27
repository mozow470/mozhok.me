<template>
  <PageContents page="PROJECTS"/>
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
