<template>
  <Html lang="ja"  class="h-full block">
    <Head>
      <Meta name="viewport" content='width=device-width, initial-scale=1' /> 
    </Head>
      <Body class="bg-black text-white block min-h-screen">
      <div>
        <HeaderAmaurot/>
        <NuxtLayout>
          <NuxtPage/>
        </NuxtLayout>
        <FooterAmaurot/>
      </div>

    </Body>
  </Html>
 
</template>

<script>
import HeaderAmaurot from "./components/header-amaurot.vue";
import footerAmaurotVue from "./components/footer-amaurot.vue";
  
</script>