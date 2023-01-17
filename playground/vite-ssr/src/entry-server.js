import { renderToString } from "vue/server-renderer"
import { createApp } from "./main"

export async function render(url, manifest) {
  const { app } = createApp()

  const html = await renderToString(app, {})

  return [html]
}
