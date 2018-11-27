<template>
  <div>
    <PageHeader :page="page"/>
    <div class="container">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import PageHeader from '~/components/PageHeader.vue'

  export default {
    components: {
      PageHeader
    },
    props: {
      page: {
        type: String,
        required: true,
      },
    },
    name: "PageContents"
  }
</script>

<style scoped lang="scss">
  .container {
    margin-top: 45px;
    margin-bottom: 45px;
  }
</style>
