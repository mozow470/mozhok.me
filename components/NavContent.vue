<template>
  <div class="nav-content">
    <div class="nav-content-background" :style="{ backgroundImage: `url(${backgroundUrl})` }"></div>
    <div class="nav-content-gradient"
         :style="{ background: `linear-gradient(130deg, rgba(251, 251, 251, 0.3), ${gradientColor})` }"></div>
    <div v-if="wave" class="nav-content-wave" :style="{ background: `${gradientColor}` }"></div>
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
      },
      wave: {
        type: Boolean,
        default: true,
      },
    },
    name: "NavContent",
  }
</script>

<style scoped lang="scss">
  .nav-content {
    position: relative;
    text-align: center;
    overflow: hidden;
  }

  .nav-content:hover .nav-content-wave{
    width: 100%;
  }


  .nav-content-background {
    z-index: 98;
    width: 100%;
    height: 225px;

    background-repeat: no-repeat;
    background-size: cover;


    @include tab {
      height: 180px;
    }
  }

  .nav-content-gradient {
    z-index: 99;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .nav-content-wave {
    z-index: 100;
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    opacity: 0.78;
    transition: all 0.3s;
    -webkit-animation: all 0.3s;
  }

  .nav-content-title {
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
    line-height: 3.2rem;
  }

</style>
