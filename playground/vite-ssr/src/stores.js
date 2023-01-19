import { defineStore } from 'pinia'
import { ref, onServerPrefetch } from 'vue'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(5)
  const fruitList = ref([])
  const increment = () => {
    count.value++
  }

  const getFruitList = async () => {
    const response = await (await fetch('http://localhost:5173/getFruitList')).json()

    if (response.status) {
      fruitList.value = response.data
    }
    console.log('response: ', response);
  }

  onServerPrefetch(async () => {
    getFruitList()
  })

  return {
    count,
    fruitList,
    increment
  }
})
