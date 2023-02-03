<template>
  <div>
    <ul>
      <li v-for="item in counterStore.fruitList">{{ item.name }} - {{ item.price }}</li>
    </ul>
  </div>
</template>

<script setup>
import { useCounterStore } from '../stores/counter'
const counterStore = useCounterStore()
</script>
