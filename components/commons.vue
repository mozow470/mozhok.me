<template>
    <div>
        <p>コンテンツを読み込んでいます</p>
        <div v-for="(v,k) in contens" :key="k">
             <div v-if="v.type=='heading_2'">
                 <h2 class="mt-5 mb-5 text-2xl font-bold">{{pickText(v.heading_2)}}</h2>
             </div>
             <div v-else-if="v.type=='bulleted_list_item'">
                 <li class="list-item">{{pickText(v.bulleted_list_item)}}</li>
             </div>
        </div>
    </div>
</template>

<script setup >
    const prop =defineProps({
        contens:[]
    });

    function pickText(obj){
        return obj.text[0].plain_text
    }
</script>