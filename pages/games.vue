<template>
  <PageContents page="GAMES">
    <p>
      最近は、e-Sportsの大会観戦が個人的なトレンドです。
    </p>
    <p>
      プレイしたことのあるゲームの一覧です
    </p>
    <ul>
      <li>BattleField 4</li>
      <li>BattleField 1</li>
      <li>BattleField V</li>
      <li>VARORANT</li>
      <li>Tom Clancy's Rainbow Six Siege</li>
      <li>Fortnite</li>
      <li>PLAYERUNKNOWN'S BATTLEGROUNDS</li>
      <li>Minecraft</li>
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
        title: 'ゲーム'
      }
    },
    name: "games"
  }
</script>

<style scoped>
</style>
