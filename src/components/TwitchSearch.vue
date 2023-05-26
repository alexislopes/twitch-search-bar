<template>
  <div class="bg-[#18181a] p-2 shadow-lg rounded">

    <div class="flex items-center">
      <input v-model="termo" placeholder="Buscar" class="z-10 min-w-[20vw] focus:outline  focus:outline-4 outline-brand border border-[#67666a]  text-[#e4e4e6] font-medium hover:border-2 pl-2 rounded-s-md bg-surface leading-9"  />
      <div class="bg-[#302f35] p-1.5 rounded-r-md ml-1/2">
        <IconSearch class="h-7 w-7 z-0" />
      </div>
    </div>
    <div class="flex flex-col">
      <div v-for="canal in canais" class="flex items-center p-2 justify-between">
        <div class="flex gap-2 items-center">
          <IconHistory  class="h-6 w-6" :class="termo ? 'fill-[#e4e4e6]' : 'fill-brand'" />
          <span class="font-medium"  :class="termo ? 'text-[#e4e4e6]' : 'text-brand' ">{{ canal }}</span>
        </div>
        <IconX v-if="!termo" class="h-6 w-6"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import IconHistory from "./icons/IconHistory.vue";
import IconSearch from "./icons/IconSearch.vue";
import IconX from "./icons/IconX.vue";


const canais = ref(['casimito', 'fluyr', 'oldmanspacca', 'Coreano', 'alanzoka'])
const termo = ref(undefined)
</script>

