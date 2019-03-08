<template>
  <div class="navbar-dropmenu" :class="{ active : $store.state.isMenuActive}">
    <div class="navbar-dropmenu-content">
      <ul>
        <li v-for="(content, index) in $store.state.pages" :key="index">
          <nuxt-link :to="content.path">{{content.title}}</nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "NavDropdown"
  }
</script>

<style scoped lang="scss">
  .navbar-dropmenu {
    -webkit-transition: max-height 300ms;
    transition: max-height 300ms;
    max-height: 0;
    visibility: hidden;

    background: $body-background;

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

      border-top: 1px solid $body-background;
      background: $contents-background;


      z-index: 102;
    }
  }

  .navbar-dropmenu-content {
    padding: 12px 10px;

    ul {
      text-align: center;
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        padding: 12px 24px;
        display: inline-block;

        @include tab {
          display: block;
        }

        a {
          position: relative;
          text-decoration: none;
          color: #333;

          &:after {
             position: absolute;
             bottom: -4px;
             left: 0;
             content: '';
             width: 100%;
             height: 1px;
             background: #333;
             transform: scale(0, 1);
             transform-origin: center top;
             transition: transform .3s;
           }

          &:hover::after {
            transform: scale(1, 1);
          }
        }
      }
    }
  }
</style>
