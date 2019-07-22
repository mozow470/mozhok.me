<template>
  <PageContents page="GAMES">
    <p>
      最近はプレイするよりも他人のプレイを見ることが多いです。e-Sportsの大会観戦や、プレイ配信など。
    </p>
    <p>
      プレイしたことのあるゲームの一覧です
    </p>
    <ul>
      <li>BattleField 4</li>
      <li>BattleField 1</li>
      <li>BattleField V</li>
      <li>Tom Clancy's Rainbow Six Siege</li>
      <li>Fortnite</li>
      <li>PLAYERUNKNOWN'S BATTLEGROUNDS</li>
      <li>Minecraft</li>
      <li>Special Force 2</li>
    </ul>
    <p>Coming soon ...</p>
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
        title: 'ゲーム'
      }
    },
    name: "games"
  }
</script>

<style scoped>
</style>
