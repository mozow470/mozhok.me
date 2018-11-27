<template>
  <PageContents page="PROFILE">
    <p>
      はじめまして。僕は17歳の男性でニックネームはMozu(読み「もず」)という名前で活動しています。<br>
      趣味はコーディング、音楽鑑賞、自転車で一人旅など...<br><br>

      コーディングは主にバックエンド(サーバ側)でフロントエンドは(クライアント側)は完全にUIフレームワークだよりです泣 インフラ周りは...駄目みたいです。<br>
      扱ったことのある言語・フレームワーク・その他

    </p>
    <ul>
      <li>Kotlin</li>
      <li>Java</li>
      <li>Ruby</li>
      <li>Rails</li>
      <li>JavaScript</li>
      <li>Node.js</li>
      <li>Vue.js</li>
      <li>Nuxt.js</li>
      <li>MySQL</li>
      <li>SQLite3</li>
    </ul>
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
