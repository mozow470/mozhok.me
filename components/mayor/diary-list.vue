<template>
    <div>
        <a :href="to">
        <div class="pt-5 pb-5 mt-5 mb-5 text-center  rounded-md border-white border-t border-l border-r border-b md:w-1/3 mx-auto">
            <p class="text-xl">{{title}}</p>
        </div>
        </a>
    </div>
</template>

<script setup lang="ts">
    interface Props{
        title:string
        to:string
    }

    const props=withDefaults(defineProps<Props>(),{
        title:"",
        to:""
    })
</script>