<template>
  <PageContents page="MUSIC">
    <p>
      洋楽から邦楽まで幅広く聴いています！<br>
      よく聞くアーティスト一覧
    </p>
    <ul>
      <li>King Gnu</li>
      <li>SIRUP</li>
      <li><a href="https://open.spotify.com/artist/0hCWVMGGQnRVfDgmhwLIxq?si=9bm2_k9DRFq5--9za2wcvQ&dl_branch=1">サカナクション</a></li>
      <li>
        <a href="https://open.spotify.com/artist/0O1UtbTe4ca7HabaiMhYZ7?si=Q7oTraASSrGRkYYe7osasw&dl_branch=1">
          KIRINJI</a>
      </li>
      <li>
        <a href="https://open.spotify.com/artist/0qC4CNzOUtgdmdVzRqCa1d?si=hvM2v6L9SUOuHjDaYZt7ew&dl_branch=1">STUTS</a>
      </li>
      <li>
        <a href="https://open.spotify.com/artist/5b3ZFm6P1lpZIASMDnBDs9?si=1Xle4lPfSYSgdMmrm05nVw&dl_branch=1">Kan Sano</a>
      </li>
      <li>Indigo la End</li>
      <li>Susumu Hirasawa</li>
      <li>millennium parade</li>
      <li>幾多りら</li>
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
