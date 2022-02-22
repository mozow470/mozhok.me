<template>
    <div class="md:w-1/3 mx-auto">
        <div v-for="(v,k) in contens" :key="k">
            <div :class="changeAge(v.age,v.type)">
             <div v-if="v.type=='heading_2'">
                 <h2 class="mt-5 mb-5 text-2xl font-bold border-b">{{pickText(v.heading_2)}}</h2>
             </div>
             <div v-else-if="v.type=='heading_1'">
                 <h1 class="mt-5 mb-5 text-3xl font-bold border-b-4 border-double">{{pickText(v.heading_1)}}</h1>
             </div>
             <div v-else-if="v.type=='heading_3'">
                 <h3 class="mt-5 mb-5 text-xl font-bold">{{pickText(v.heading_3)}}</h3>
             </div>
             <div v-else-if="v.type=='image'">
                 <img :src="v.image.file.url" alt="">
             </div>
             <div v-else-if="v.type=='bulleted_list_item'">
                 <li class="list-item">{{pickText(v.bulleted_list_item)}}</li>
             </div>
             <div v-else-if="v.type=='table'">
                <table class="w-full border-collapse">
                    <tr v-for="(value,key) in v.rows" :key="key" >
                        <th v-for="(val,ke) in value.table_row.cells" :key="ke" class="text-center font-normal text-sm pt-2 pb-2 border">{{val[0].plain_text}}</th>
                    </tr>
                </table>
             </div>
             <div v-else-if="v.type=='table_row'">
                 <!-- これは↑で実装済み -->
             </div>
             <div v-else-if="v.type=='paragraph'">
                <div v-if="v.paragraph.text==[]">
                    <p> </p>
                </div>
                <p v-else-if="(v.paragraph.text[0])">{{v.paragraph.text[0].plain_text}}</p>
             </div>
             <div v-else-if="v.type=='child_database'">
                <Webs :id="v.id"/>
             </div>
             <div v-else>
                 {{v.type}}
             </div>
            </div>
        </div>
    </div>
</template>

<script setup >
import Webs from './mayor/webs.vue';
   
const prop =defineProps({
    contens:[]
});

function pickText(obj){
    return obj.text[0].plain_text
}

function changeAge(age,type){
    if(type!='table_row'){
        switch(age){
            case 0: 
                return ''
            case 1:
                return 'ml-10'
            case 2:
                return 'ml-20'
            default:
                return 'ml-30'
        }
    }else{
        return ''
    }
    
}
</script>