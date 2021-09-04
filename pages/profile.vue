<template>
  <PageContents page="PROFILE">
    <p>
      Hello! 僕はMozu(読み「もず」)という名前で活動しています。<br>
      慶應義塾大学 <a href="https://www.youtube.com/watch?v=hGLL2DNXWcw" target="_blank">安宅和人研究会</a>所属。
      趣味はコーディング、音楽鑑賞、ドローン空撮、サイクリング、テニスなど...<br><br>

      バックエンドコーディングを主として活動しています。フロントエンド、クラウド・インフラも専門としています。<br>
    </p>
    <p>
      IDEはJetBrains s.r.oの
      <a href="https://www.jetbrains.com/idea/" target="_blank">IntelliJ IDEA Ultimate</a>
      と
      <a href="https://www.jetbrains.com/webstorm/" target="_blank">WebStorm</a>
      を使用しています。
      <br>
      テキストエディタはMicrosoftの
      <a href="https://code.visualstudio.com/" target="_blank">Visual Studio Code</a>
      を使用しています。
    </p>
    <p>制作作品につきましては、当サイトのプロジェクトまたは<a href="https://github.com/mzhkz">GitHub</a>をご覧ください。ソフトウェア開発のご依頼に関しましては<a href="https://twitter.com/4x_scope" target="_blank">Twitter</a>のダイレクトメッセージにて受け付けております。</p>
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
