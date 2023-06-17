<template>
<div :class="['box', { active: termo }]">
  <div class="search_container">
    <input v-model="termo" placeholder="Buscar" />
    <div class="icon_search_box">
      <IconSearch class="h-7 w-7 z-0" />
    </div>
  </div>
  <div class="channel_list_container" v-if="termo">
    <div v-for="canal in canais" class="channel_list">
      <div class="channel">
        <img :src="canal.thumbnail_url" class="h-8 w-8 rounded-full" alt="">
        <span class="font-medium text-[#e4e4e6]">{{ canal.display_name }}</span>
      </div>
      <Live v-if="canal.is_live" />
    </div>
  </div>
</div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import Live from "./Live.vue";
import IconSearch from "./icons/IconSearch.vue";

import { useTwitchApi } from "../composables/twitchApi";
const { searchChannel } = useTwitchApi()

const termo = ref(undefined)
const canais = ref([])

watch(termo, async () => {
  if (termo.value) {
    const { data: response } = await searchChannel(termo.value)
    canais.value = response.data.slice(0, 5)
  } else {
    canais.value = []
  }
})
</script>

<style scoped>
.box {
  @apply relative rounded-t-md;
}

.box.active {
  @apply bg-[#18181a] shadow-lg
}

.search_container {
  @apply flex items-center p-3 box-content
}

input {
  @apply z-10 min-w-[20vw] box-content h-10 outline-brand border border-[#67666a] text-[#e4e4e6] font-medium pl-2 rounded-s-md bg-surface leading-9
}

input:focus {
  @apply outline outline-4
}

input:hover {
  @apply border-2
}

.icon_search_box {
  @apply bg-[#302f35] p-1.5 rounded-r-md
}

.channel_list_container {
  @apply flex flex-col absolute bg-surface rounded-b-md;
  width: -webkit-fill-available;
}

.channel_list {
  @apply flex items-center p-2 justify-between
}

.channel {
  @apply flex gap-2 items-center
}
</style>

