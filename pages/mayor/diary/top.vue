<template>
    <div>
        <h1 class="font-corben text-center text-2xl md:text-5xl">Mayor's Diary</h1>
        <p class="text-center mt-5 pb-5 border-b-2 border-dashed md:w-1/3 mx-auto md:text-xl">Mayorがその日に行ったInput/Outputと"気づき"を掲載しています。</p>
        <div v-for="(v,k) in data.results" :key="k">
            <DiaryList :title="v.title" :to="'/mayor/diary/'+v.properties.Name.title[0].text.content" />
        </div>

    </div>
</template>

<script setup>
import DiaryList from '~~/components/mayor/diary-list.vue';
const { data } = await useFetch('/api/diary');
//data.results[0].url
</script>