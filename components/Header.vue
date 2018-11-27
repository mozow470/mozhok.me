<template>
  <div class="header">
    <div class="navbar">
      <div class="container">
        <nuxt-link to="/">
          <!--<svg version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4000 640" preserveAspectRatio="xMidYMid meet" class="logo-svg">-->
          <!--<g id="svg-fill" fill="#000000">-->
          <!--<path  d="M0 320 l0 -320 2000 0 2000 0 0 320 0 320 -2000 0 -2000 0 0 -320z"></path>-->
          <!--</g>-->
          <!--<g  id="layer102" fill="#ffffff">-->
          <!--<path class="st21" d="M0 320 l0 -320 2000 0 2000 0 0 320 0 320 -2000 0 -2000 0 0 -320z m2770 155 c-33 -33 -60 -66 -60 -72 0 -7 32 -73 71 -148 39 -75 70 -137 68 -139 -2 -2 -33 -8 -69 -15 -36 -7 -72 -14 -80 -17 -12 -3 -24 20 -50 99 -37 112 -45 108 -38 -15 l5 -78 -110 0 -109 0 6 32 c3 17 9 125 13 240 l6 208 89 0 88 0 0 -52 0 -53 31 50 c56 89 50 87 129 51 l69 -31 -59 -60z m-1874 86 c149 -68 182 -337 54 -444 -97 -82 -250 -49 -309 68 -22 41 -26 63 -26 130 1 123 45 207 130 246 51 24 99 24 151 0z m1378 -18 c104 -73 132 -263 58 -382 -86 -139 -305 -108 -358 51 -22 67 -16 187 13 243 26 49 78 99 118 114 48 17 124 5 169 -26z m726 17 c11 -11 20 -29 20 -40 0 -26 -34 -60 -60 -60 -34 0 -70 23 -77 48 -5 20 0 31 21 49 33 28 69 30 96 3z m-2778 -62 l3 -73 55 72 c30 40 58 72 62 73 4 0 28 -31 55 -70 26 -38 51 -70 56 -70 4 0 7 32 7 70 l0 70 53 0 54 0 7 -212 c4 -116 10 -224 13 -240 l6 -28 -84 1 -84 0 -39 81 c-46 92 -46 92 -97 -20 l-29 -62 -88 0 -87 0 7 122 c4 68 11 176 14 241 l6 117 54 0 53 0 3 -72z m1147 50 c24 -66 26 -63 -39 -60 -33 2 -60 1 -60 -2 0 -4 38 -94 84 -201 l85 -195 -196 0 -195 0 6 31 c3 17 6 62 6 100 l0 68 54 -6 54 -6 -43 147 -43 146 139 0 c135 0 140 -1 148 -22z m291 -43 c0 -64 12 -85 25 -44 6 17 13 20 36 15 29 -5 29 -5 29 44 l0 50 79 0 78 0 7 -152 c3 -84 9 -192 12 -240 l7 -88 -102 0 -102 0 6 122 c3 68 8 135 10 151 4 26 3 27 -39 27 -37 0 -44 -3 -41 -17 2 -10 6 -78 9 -150 l6 -133 -111 0 -111 0 5 29 c4 16 9 124 13 240 l7 211 89 0 88 0 0 -65z m1542 -7 l3 -71 54 71 c30 40 58 72 61 72 4 0 29 -32 56 -71 l49 -72 3 39 c1 21 5 54 8 72 5 32 6 32 59 32 l55 0 0 -103 c0 -57 3 -165 7 -240 l6 -137 -79 0 -80 0 -37 75 c-20 41 -41 75 -47 75 -6 0 -27 -34 -47 -75 l-37 -75 -89 0 -89 0 6 30 c3 17 8 106 11 198 3 92 8 186 11 210 l5 42 54 0 54 0 3 -72z m692 45 c4 -16 9 -35 11 -43 4 -12 -6 -14 -55 -12 l-60 4 0 -37 0 -38 50 5 c46 5 50 3 50 -16 0 -12 3 -31 6 -43 6 -22 4 -23 -50 -23 -47 0 -56 -3 -56 -17 0 -36 16 -46 64 -41 54 6 52 10 60 -114 l4 -78 -165 0 -165 0 6 42 c3 24 8 132 12 241 l7 197 137 0 138 0 6 -27z"></path>-->
          <!--<path class="st21" d="M786 448 c-22 -30 -22 -131 0 -152 24 -24 61 -20 80 9 12 18 15 39 12 75 -8 80 -58 117 -92 68z"></path>-->
          <!--<path class="st21" d="M2135 450 c-10 -11 -20 -42 -23 -70 -6 -64 15 -100 58 -100 57 0 78 98 35 164 -21 31 -45 33 -70 6z"></path>-->
          <!--</g>-->
          <!--</svg>-->


          <svg xmlns="http://www.w3.org/2000/svg" version="1.0" viewBox="0 0 4000 640"
               preserveAspectRatio="xMidYMid meet" class="logo-svg" :class="{ loading : loading }">
            <g id="layer101">
              <path class="logo-st" d="M2677 581 c-8 -9 -29 -38 -46 -66 l-31 -50 0 53 0 52 -88 0 -89 0 -6 -208 c-4 -115 -10 -223 -13 -240 l-6 -32 109 0 110 0 -5 78 c-7 123 1 127 38 15 26 -79 38 -102 50 -99 8 3 44 10 80 17 36 7 67 13 69 15 2 2 -29 64 -68 139 -39 75 -71 141 -71 148 0 6 27 39 60 72 l59 60 -69 31 c-63 29 -70 31 -83 15z M745 561 c-85 -39 -129 -123 -130 -246 0 -67 4 -89 26 -130 77 -151 284 -151 361 -1 29 56 35 157 15 227 -39 133 -162 201 -272 150z m110 -111 c10 -11 20 -42 23 -70 5 -60 -15 -100 -53 -100 -39 0 -55 25 -55 88 0 89 42 130 85 82z
M2904 557 c-21 -18 -26 -29 -21 -49 7 -25 43 -48 77 -48 26 0 60 34 60 60 0 28 -35 60 -64 60 -14 0 -37 -10 -52 -23z
M2105 569 c-81 -30 -136 -118 -143 -230 -8 -137 47 -232 150 -259 199 -54 333 178 225 390 -43 83 -150 129 -232 99z m100 -125 c43 -66 22 -164 -35 -164 -43 0 -64 36 -58 100 8 83 58 117 93 64z
M106 453 c-3 -65 -10 -173 -14 -241 l-7 -122 87 0 88 0 29 62 c51 112 51 112 97 20 l39 -81 84 0 84 -1 -6 28 c-3 16 -9 124 -13 240 l-7 212 -54 0 -53 0 0 -70 c0 -38 -3 -70 -7 -70 -5 0 -30 32 -56 70 -27 39 -51 70 -55 70 -4 -1 -32 -33 -62 -73 l-55 -72 -3 73 -3 72 -53 0 -54 0 -6 -117z
M1125 424 l43 -147 -54 6 -54 6 0 -68 c0 -38 -3 -83 -6 -100 l-6 -31 195 0 196 0 -85 195 c-46 107 -84 197 -84 201 0 3 27 4 60 2 65 -3 63 -6 39 60 -8 21 -13 22 -148 22 l-139 0 43 -146z
M1476 359 c-4 -116 -9 -224 -13 -240 l-5 -29 111 0 111 0 -6 133 c-3 72 -7 140 -9 150 -3 14 4 17 41 17 42 0 43 -1 39 -27 -2 -16 -7 -83 -10 -151 l-6 -122 102 0 102 0 -7 88 c-3 48 -9 156 -12 240 l-7 152 -78 0 -79 0 0 -50 c0 -49 0 -49 -29 -44 -23 5 -30 2 -36 -15 -13 -41 -25 -20 -25 44 l0 65 -88 0 -89 0 -7 -211z
M3086 528 c-3 -24 -8 -118 -11 -210 -3 -92 -8 -181 -11 -198 l-6 -30 89 0 89 0 37 75 c20 41 41 75 47 75 6 0 27 -34 47 -75 l37 -75 80 0 79 0 -6 137 c-4 75 -7 183 -7 240 l0 103 -55 0 c-53 0 -54 0 -59 -32 -3 -18 -7 -51 -8 -72 l-3 -39 -49 72 c-27 39 -52 71 -56 71 -3 0 -31 -32 -61 -72 l-54 -71 -3 71 -3 72 -54 0 -54 0 -5 -42z
M3606 373 c-4 -109 -9 -217 -12 -241 l-6 -42 165 0 165 0 -4 78 c-8 124 -6 120 -60 114 -48 -5 -64 5 -64 41 0 14 9 17 56 17 54 0 56 1 50 23 -3 12 -6 31 -6 43 0 19 -4 21 -50 16 l-50 -5 0 38 0 37 60 -4 c49 -2 59 0 55 12 -2 8 -7 27 -11 43 l-6 27 -138 0 -137 0 -7 -197z"/>
            </g>
          </svg>
        </nuxt-link>
        <div class="menu-trigger" :class="{ active : $store.state.isMenuActive}" @click="$store.commit('toggleMenu')">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
    <div class="navbar-dropmenu" :class="{ active : $store.state.isMenuActive}">
      <div class="navbar-dropmenu-content">
        <h3>このサイトは開発途中です。</h3>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Header",
    watch: {
      '$route.path': function () {
        this.loading = true;
        this.$store.commit('resetMenu');
        setTimeout(() => {
          this.loading = false;
        }, 5200)
      }
    },
    data() {
      return {
        loading: false,
      }
    }
  }
</script>

<style scoped lang="scss">

  .navbar {
    width: 100%;
    border: 1px solid #ffffff;
    background: #ffffff;
    padding: 12px 0;
    display: flex;
    height: $navHeight
  }

  .logo-svg {
    width: 150px;

    .logo-st {
      fill: #3d3c3e;
    }

    &.loading .logo-st {
      stroke-dasharray: 97%;
      stroke-dashoffset: 5%;
      stroke-width: 35px;
      animation: logo-animation 5200ms;

      @-webkit-keyframes logo-animation {
        0% {
          fill: #3d3c3e;
          stroke: transparent;
        }
        15% {
          fill: transparent;
          stroke: #3d3c3e;
          stroke-dashoffset: 5%;
        }
        45% {
          stroke-dashoffset: 97%;
        }
        75% {
          stroke-dashoffset: 196%;
          fill: transparent;
          stroke: #2a2a2a;
        }
        100% {
          stroke-dashoffset: 196%;
          fill: #3d3c3e;
          stroke: transparent;
        }
      }
    }
  }

  .menu-trigger {
    position: relative;
    width: 20px;
    height: 21px;

    float: right;
    cursor: pointer;
  }

  .menu-trigger,
  .menu-trigger span {
    display: inline-block;
    transition: all 340ms;
    box-sizing: border-box;
  }

  .menu-trigger span {
    position: absolute;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #848484;
    border-radius: 10px;
  }

  .menu-trigger span:nth-of-type(1) {
    top: calc(50% - 6px);
  }

  .menu-trigger span:nth-of-type(2) {
    top: calc(50% + 1px);
  }

  .menu-trigger span:nth-of-type(3) {
    top: calc(50% + 8px);
  }

  .menu-trigger.active span {
    background-color: #c16d68;
  }

  .menu-trigger.active span:nth-of-type(1) {
    -webkit-transform: translateY(20px) rotate(-315deg);
    transform: translateY(9px) rotate(-315deg);
  }

  .menu-trigger.active span:nth-of-type(2) {
    opacity: 0;
  }

  .menu-trigger.active span:nth-of-type(3) {
    -webkit-transform: translateY(-20px) rotate(315deg);
    transform: translateY(-5px) rotate(315deg);
  }

  .navbar-dropmenu {
    text-align: center;
    -webkit-transition: max-height 300ms;
    transition: max-height 300ms;
    max-height: 0;
    visibility: hidden;

    background: #F1F1F1;

    &.active {
      max-height: 100vh;
      visibility: visible;
    }

    @include sp {
      position: absolute;
      top: $navHeight;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: calc(100vh - 60px);

      z-index: 102;
    }

    .navbar-dropmenu-content {
      padding: 12px 10px;
    }

  }
</style>
