<template>
    <div>
        <Commons :contens="data"/>
    </div>
</template>

<script setup>
import Commons from '~~/components/commons.vue';
    const route=useRoute();
    const url='/api/diarySearch/'+route.params.id;
    const { data } = await useFetch(url);
</script>