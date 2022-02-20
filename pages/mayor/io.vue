<template>
    <div>
        ここはdiaryです。
        <p>{{JSON.stringify(data)}}</p>
    </div>
</template>

<script setup >
    const { data } = await useFetch('/api/diary')

   
</script>