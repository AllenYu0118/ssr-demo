<template>
  <div>
    <ul>
      <li v-for="item in counterStore.fruitList">{{ item.name }} - {{ item.price }}</li>
    </ul>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  async asyncData() {
    await useCounterStore()
    console.log('asyncData')
  }
})
</script>

<script setup>
import { useCounterStore } from '../stores/counter'
const counterStore = useCounterStore()
</script>


