<template>
  <div>
    <Header/>
    <nuxt class="contents"/>
    <Footer/>
  </div>
</template>

<script>
  import Header from '~/components/Header.vue'
  import Footer from '~/components/Footer.vue'

  export default {
    components: {
      Header,
      Footer,
    }
  }
</script>

<style scoped lang="scss">
  .contents {
    @include tab {
      margin-top: $navHeight;
    }
  }
</style>
<style lang="scss">
  body {
    background: $body-background;
    font-family: 'M PLUS Rounded 1c', sans-serif;
    font-weight: 200;
  }
</style>
