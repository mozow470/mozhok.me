<template>
    <div>
        <h1 class="text-3xl text-center font-corben">{{addSlash(route.params.id)}}</h1>
        <Commons :contens="data"/>
    </div>
</template>

<script setup>
import Commons from '~~/components/commons.vue';
    const route=useRoute();
    let url='/api/diarySearch/'+route.params.id ;
    function addSlash(text){
        const a=text[0];
        const b=text[1];
        const c=text[2];
        const d=text[3];
        const e=text[4];
        const f=text[5];
        const g=text[6];
        const h=text[7];
        return a+b+c+d+'/'+e+f+'/'+g+h;
    }
    const { data } = await useFetch(url);
</script>