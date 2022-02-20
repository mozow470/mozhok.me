<template>
  <Html lang="ja"  class="h-full block">
    <Head>
      <Meta name="viewport" content='width=device-width, initial-scale=1'/> 
    </Head>
      <Body class="bg-black text-white block ">
      <div>
        <HeaderAmaurot class="a-header"/>
        <NuxtLayout>
          <NuxtPage class=" pl-10 pr-10 mt-24"/>
        </NuxtLayout>
        <FooterAmaurot class=" pl-10 pr-10"/>
      </div>
    </Body>
  </Html>
 
</template>

<style>
.a-header{
    width: 100%; /* 幅いっぱいを指定 */
    position: fixed; /* ウィンドウを基準に画面に固定 */
    top: 0; /* 上下の固定位置を上から0pxにする */
    left: 0; /* 左右の固定位置を左から0pxにする */
    background-color: black;
}
</style>

<script>
import HeaderAmaurot from "./components/header-amaurot.vue";
import footerAmaurotVue from "./components/footer-amaurot.vue";


</script>