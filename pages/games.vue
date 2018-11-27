<template>
  <PageContents page="GAMES">
    <p>
      最近はプレイするよりも他人のプレイを見ることが多いです。eSportsの大会観戦や、プレイ配信など。
    </p>
    <p>
      BattleFieldがメインです。Rainbow six siegeもちょこちょこプレイしています。<br>
      以下プレイしたことのあるゲーム
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
    <button class="button">Origin</button>
    <!--<button class="btn-1">Button 1</button>-->
    <!--<button class="btn-2">Button 2</button>-->
    <!--<button class="btn-3">Button 3</button>-->
    <!--<button class="btn-4">Button 4</button>-->
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
