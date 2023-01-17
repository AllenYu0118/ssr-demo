<template>
  <div>
    Home SSR

    <button @click="click">{{ count }}</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const count = ref(0)

const click = () => {
  count.value++
}
</script>
