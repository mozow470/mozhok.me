<template>
    <div>
        <div v-for="(v,k) in data" :key="k">
            <a :href="v.properties.URL.url">
                <table class="border-collapse w-full mt-5 mb-5 ">
                    <tr class="border "><td class="pl-4 pr-4">{{v.properties.コメント.rich_text[0].plain_text}}</td></tr>
                    <tr class="border "><td class=" pl-4 pr-4">{{v.properties.タイトル.title[0].plain_text}}</td></tr>
                </table>
            </a>
        </div>
    </div>
</template>

<script setup>
    const webPro=defineProps({id:""})
    const url='/api/web/'+webPro.id
    const {data}= useFetch(url);
</script>