import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(5)
  const fruitList = ref([])
  const increment = () => {
    count.value++
  }

  const getFruitList = async () => {
    const response = await (await fetch('http://localhost:5173/getFruitList')).json()
    // console.log('response: ', response);

    if (response.status) {
      fruitList.value = response.data
    }
  }

  // onServerPrefetch(async () => {
  //   await getFruitList()
  // })


  getFruitList()


  return {
    count,
    fruitList,
    increment,
  }
})
