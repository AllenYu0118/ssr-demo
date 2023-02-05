import { renderToString } from "vue/server-renderer"
import { createApp } from "./main"

export async function render(url, manifest) {
  const { app, router, pinia } = createApp()

  await router.push(url)
  // console.log('router.currentRoute.value: ', router.currentRoute.value);
  await router.isReady()

  await router.currentRoute.value.matched.flatMap(record => {
    console.log('record: ', Object.values(record.components))
    // Object.values(record.components)
  })

  const state = JSON.stringify(pinia.state.value);
  const html = await renderToString(app, manifest)

  return [html, state]
}
