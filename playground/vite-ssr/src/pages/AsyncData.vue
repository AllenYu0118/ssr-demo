<template>
  <div>
    <ul>
      <li v-for="item in counterStore.fruitList">{{ item.name }} - {{ item.price }}</li>
    </ul>
</div>
</template>

<script setup>
import { inject, onServerPrefetch } from 'vue'
import { useCounterStore } from '../stores/counter'
const counterStore = useCounterStore()
const store = inject('store')

onServerPrefetch(async () => {
  const result = await counterStore.getFruitList()
  store.state.value.test = result
  console.log('store: ', store.state.value);
})
</script>


