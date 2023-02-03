import { createSSRApp } from 'vue'
import App from './App.vue'
import { createRouter } from './router'
import createStore from './stores/'


export function createApp() {
  const app = createSSRApp(App)
  const pinia = createStore()
  const router = createRouter()

  app.use(pinia)
  app.use(router)

  return { app, router, pinia }
}
