<template>
  <div class="nav-content">
    <div class="nav-content-background" :style="{ backgroundImage: `url(${backgroundUrl})` }"></div>
    <div class="nav-content-gradient" :style="{ background: `linear-gradient(130deg, rgba(251, 251, 251, 0.3), ${gradientColor})` }"></div>
    <h2 class="nav-content-title">{{title}}</h2>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        required: true,
      },
      backgroundUrl: {
        type: String,
        required: true,
      },
      gradientColor: {
        type: String,
        required: true,
      }
    },
    name: "NavContent"
  }
</script>

<style scoped>
  .nav-content {
    position: relative;
    text-align: center;
  }

  .nav-content-background {
    z-index: 98;
    width: 100%;
    height: 200px;

    background-repeat: no-repeat;
    background-size: cover;
  }

  .nav-content-gradient {
    z-index: 99;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .nav-content-title {
    z-index: 100;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 80%;
    height: 3.2rem;

    font-family: 'Fredoka One';
    color: #DADADA;
  }
</style>
