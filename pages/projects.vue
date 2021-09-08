<template>
  <PageContents page="PROJECTS">
    <p>実績</p>
    <ul>
      <li>2019 ~ 学習塾さま向け単語暗記アプリケーションの開発 (Private)</li>
      <li>2018 ~ メディアクリエイター様向けのホームページ</li>
      <li>2016 ~ 2020 Minecraftサーバープロジェクト「BetterDaysFPS」(On break)</li>
    </ul>
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
