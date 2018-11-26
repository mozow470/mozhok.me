<template>
  <div>
    <Header/>
    <nuxt/>
  </div>
</template>

<script>
  import Header from '~/components/Header.vue'

  export default {
    components: {
      Header,
    }
  }
</script>

<style>
  body {
    background: #F1F1F1;
    font-family: 'Noto Sans JP', sans-serif;
  }
</style>
