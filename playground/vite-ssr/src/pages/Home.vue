<template>
  <div>
    Home SSR

    <button @click="counterStore.increment">{{ counterStore.count }}</button>
  </div>
</template>

<script setup>
import { useCounterStore } from '../stores'

const counterStore = useCounterStore()
</script>
