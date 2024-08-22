<template>
  <div class="h-screen w-screen overflow-x-hidden" :class="{'bg-neutral-50': !darkMode, 'bg-neutral-950': darkMode}">
    <AppHeader :text="text" :changeText="changeText" :darkMode="darkMode" :switchMode="switchMode" />
    <Fetch :word="text" :darkMode="darkMode" />
    <slot />
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  const text = ref()
  const darkMode = ref(false)

  const changeText = (newText) => {
    text.value = newText
  }

  const switchMode = () => {
    darkMode.value = !darkMode.value
  }
</script>