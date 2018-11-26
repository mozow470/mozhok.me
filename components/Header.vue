<template>
    <div class="header">
      <div class="header-container">
        <div class="logo">
          <nuxt-link to="/">
            <img class="logo-svg" src="~/assets/images/header.svg"/>
          </nuxt-link>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped lang="scss">
  .header {
    width: 100%;
    height: auto;
    border: 1px solid #ffffff;
    background: #ffffff;
  }

  .header-container {
    max-width: 240px;
    display: flex;
    align-items: center;
    padding: 15px 24px;
    margin-left: auto;
    margin-right: auto;
  }

  .logo-svg {
    width: 200px;
    height: auto;
  }
</style>
