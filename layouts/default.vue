<template>
  <div>
    <Header/>
    <nuxt/>
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

<style>
  body {
    background: #F1F1F1;
    font-family: 'M PLUS Rounded 1c', sans-serif;
    font-weight: 200;
  }
</style>
