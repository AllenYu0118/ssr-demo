import { renderToString } from "vue/server-renderer"
import { createApp } from "./main"

export async function render(url, manifest) {
  const { app, router, pinia } = createApp()

  await router.push(url)
  await router.isReady()

  let state = {}

  await router.currentRoute.value.matched.flatMap(record => {
    state = JSON.stringify(pinia.state.value);
  })

  const html = await renderToString(app, manifest)

  return [html, state]
}
