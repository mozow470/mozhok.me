<template>
  <PageContents page="PROFILE">
    <p>
      Hello! 僕は18歳の男性でニックネームはMozu(読み「もず」)という名前で活動しています。<br>
      趣味はコーディング、音楽鑑賞、自転車など...<br><br>

      コーディングは主にバックエンドでフロントエンドはあまり得意ではないです。 インフラ周りは...駄目みたいです。<br>
    </p>
    <p>
      IDEはJetBrains s.r.oの
      <a href="https://www.jetbrains.com/idea/" target="_blank">IntelliJ IDEA Ultimate</a>
      を使用しています。
      <br>
      テキストエディタはMicrosoftの
      <a href="https://code.visualstudio.com/" target="_blank">Visual Studio Code</a>
      を使用しています。
    </p>
    <p>よろしくお願いいたします。</p>
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
        title: 'プロフィール'
      }
    },
    name: "profile"
  }
</script>

<style scoped>

</style>
