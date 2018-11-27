<template>
  <PageContents page="MUSIC">
    <p>
      洋楽から邦楽まで幅広いです。勉強や開発中はほぼBGMをかけてしています。好みの傾向は生楽器を使用した音楽(バンドとか)が多いです。<br>
      ライブやフェスティバルにもよく行きます。おすすめのアーティスト、曲があったら是非教えてください！
    </p>
    <p>Coming soon...</p>
    <button class="button">Playlist</button>
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
        title: 'Music'
      }
    },
    name: "music"
  }
</script>

<style scoped lang="scss">
</style>
