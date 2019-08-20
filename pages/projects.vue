<template>
  <PageContents page="PROJECTS">
    <p>現在公開中のオープンソースプロジェクトはありません。</p>
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
