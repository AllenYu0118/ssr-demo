import { createPinia } from 'pinia'
import { useCounterStore } from './counter'

export default () => {
  const pinia = createPinia()

  useCounterStore(pinia)

  return pinia
}
