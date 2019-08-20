<template>
  <PageContents page="MUSIC">
    <p>
      洋楽から邦楽まで幅広いです。勉強や開発中はほぼBGMをかけてしています。好みの傾向は生楽器を使用した音楽(バンドとか)が多いです。<br>
      ライブやフェスティバルにもよく行きます。おすすめのアーティスト、曲があったら是非教えてください！
      よく聞くアーティスト一覧
    </p>
    <ul>
      <li>米津玄師</li>
      <li>Base Ball Bear</li>
      <li>サカナクション</li>
      <li>チャットモンチー</li>
      <li>ゲスの極み乙女</li>
      <li>Indigo la End</li>
      <li>Susumu Hirasawa</li>
      <li>P-Model</li>
      <li>相対性理論</li>
      <li>忘れらんねえよ</li>
      <li>神聖かまってちゃん</li>
      <li>Twenty One Pilots</li>
      <li>Imagine Dragons</li>
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
        title: 'Music'
      }
    },
    name: "music"
  }
</script>

<style scoped lang="scss">
</style>
