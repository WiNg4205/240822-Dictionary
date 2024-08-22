<template>
  <ul class="flex flex-col gap-4 py-12 px-20">
    <li v-for="type in types" :key="type.partOfSpeech">
      <ul class="flex flex-col gap-4">
        <li class="border rounded-lg px-4 py-2" :class="{'text-neutral-100 border-neutral-500': darkMode, 'text-black bg-white': !darkMode}" v-for="definition in type.definitions" :key="definition.definition">
          <h3 class="font-semibold">{{ type.partOfSpeech }}</h3>
          <p>{{ definition.definition }}</p>
          <p v-if="definition.example" class="italic text-sm">Example: {{ definition.example }}</p>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script setup>
  import { ref, watchEffect } from 'vue'

  const props = defineProps({
    word: String,
    darkMode: Boolean
  })

  const data = ref(null)
  const types = ref([])

  watchEffect(async () => {
    if (props.word) {
      const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${props.word}`)
      data.value = await response.json()
      types.value = data.value[0].meanings
    }
  })
</script>
