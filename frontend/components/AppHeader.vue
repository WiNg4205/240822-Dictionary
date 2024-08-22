<template>
  <div class="flex justify-between border-b px-12 items-center select-none" :class="{'bg-black text-neutral-100 border-neutral-500': darkMode, 'bg-white': !darkMode}">
    <div class="h-16 w-full flex items-center gap-2">
      <font-awesome :icon="['fas', 'book']" class="size-6" />
      <h1 class="text-2xl font-bold">Dictionary</h1>
      <div class="border rounded-full ml-20 w-144 h-10 flex items-center pr-4 gap-3 focus:outline-2">
        <input v-model="word" type="text" placeholder="Enter word" class="w-full h-full focus:outline-none rounded-l-full text-black pl-6 border-r" @keydown.enter="changeText(word)" />
        <font-awesome :icon="['fas', 'magnifying-glass']" class="cursor-pointer" @click="changeText(word)" />
      </div>
    </div>
    <div class="cursor-pointer border rounded-full flex items-center justify-center size-10" :class="{'bg-neutral-950 hover:bg-neutral-900': darkMode, 'bg-white hover:bg-neutral-100': !darkMode}" @click="switchMode">
      <font-awesome :icon="['far', 'moon']" v-if="darkMode" class="size-6" />
      <font-awesome :icon="['far', 'sun']" v-else class="size-6" />      
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    text: String,
    changeText: Function,
    darkMode: Boolean,
    switchMode: Function
  })
</script>
