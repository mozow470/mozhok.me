<template>
  
  <header>
  <div class="header pt-6  pl-10 pr-10">
      <ul class="flex justify-between">
        <li>
          <a href="/">
              <ul class="flex">
                <li><img src="../assets/img/Amaurot_Logo.svg" alt="" class="w-10 lg:w-16"></li>
                <li class="flex justify-center items-center"><h1 class="text-2xl lg:text-6xl pl-4 font-corben">Amaurot</h1></li>
            </ul>
          </a>
        </li>
        <li class="flex justify-center items-end">
          <ul class="hidden lg:flex">
            <li><a href="/memex/top"><h3 class="text-4xl pl-4 font-corben">Memex</h3></a></li>
            <li><a href="/story/top"><h3 class="text-4xl pl-4 font-corben">Story</h3></a></li>
            <li><a href="/mayor/top"><h3 class="text-4xl pl-4 font-corben">Mayor</h3></a></li>
            <li><a href="/contact/top"><h3 class="text-4xl pl-4 font-corben">Contact</h3></a></li>
          </ul>
        </li>
        <li class="lg:hidden hum">
            <button @click="isOpen=!isOpen"><img src="../assets/img/menu.svg" alt="" class="w-10 lg:w-16"></button>
        </li>
      </ul> 
    <!-- これはディムる用 -->
    <div :class='isOpen?"fullOverlay":"hidden"'>
    </div>
    <div :class='isOpen?"emerge":"hidden"'>
      <ul>
        <li><a href="/memex/top"><h3 class="pt-10 text-2xl pl-5 font-corben ">Memex</h3></a></li>
        <li><a href="/story/top"><h3 class="pt-10 text-2xl pl-5 font-corben">Story</h3></a></li>
        <li><a href="/mayor/top"><h3 class="pt-10 text-2xl pl-5 font-corben">Mayor</h3></a></li>
        <li><a href="/contact/top"><h3 class="pt-10 text-2xl pl-5 font-corben">Contact</h3></a></li>
      </ul>
    </div>
    
  </div>
  <div class="header-end">
  </div>
  </header>
</template>

<style>
  .header-end{
    width: 100%;
    height: 2px;
    background-color: white;
  }

  .emerge{
    position: fixed;
    top:66px;
    right:0px;
    width:50vw;
    height:calc(100vh - 66px);
    background: black;
    z-index: 2147483643;
  }

  .fullOverlay{
    position: fixed;
    top:66px;
    left: 0;
    width: 100vw;
    height: calc(100vh - 66px);
    background: rgba(100, 100, 100, .8);
    z-index: 2147483640;
  }

</style>

<script setup >
  let isOpen=ref(false);
  // watchEffect(()=>{
  //   if(isOpen.value){
  //     document.addEventListener('touchmove', noScroll, { passive: false });
  //     document.addEventListener('mousewheel', noScroll, { passive: false });
  //   }else{
  //    document.removeEventListener('touchmove', noScroll)
  //    document.removeEventListener('mousewheel', noScroll)
  //   }
  // })

  function noScroll (event) { event.preventDefault() }
</script>