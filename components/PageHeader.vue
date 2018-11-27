<template>
  <div v-if="pageData" class="page-header-content">
    <div class="page-header-content-background" :style="{ backgroundImage: `url(${pageData.background})` }"></div>
    <div class="page-header-content-gradient" :style="{ background: `${pageData.color}` }"></div>
    <h2 class="page-header-content-title">{{pageData.title}}</h2>
  </div>
</template>

<script>
  export default {
    name: "PageHeader",
    props: {
      page: {
        type: String,
        required: true,
      },
    },
    data() {
      return {
        pageData: null,
      }
    },
    mounted() {
      this.data = this.$store.state.pages.forEach((value) => {
        if (value.title === this.page) {
          this.pageData = value;
        }
      })
    }
  }
</script>

<style scoped lang="scss">
  .page-header-content {
    position: relative;
    text-align: center;
  }

  .page-header-content-background {
    z-index: 99;
    width: 100%;
    height: 180px;

    background-repeat: no-repeat;
    background-size: cover;

    @include tab {
      height: 160px;
    }
  }

  .page-header-content-gradient {
    z-index: 100;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    opacity: 0.78;
  }

  .page-header-content-title {
    z-index: 101;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    height: 3.2rem;
    font-family: 'Fredoka One', cursive;
    color: #DADADA;
  }
</style>
