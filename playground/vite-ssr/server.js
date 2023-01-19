import fs from "fs"
import path from "path"
import { fileURLToPath } from 'url'
import express from 'express'
import { createServer as createViteServer } from 'vite'

const PORT = 5173

async function createServer() {
  const __dirname = path.dirname(fileURLToPath(import.meta.url))
  const resolve = (p) => path.resolve(__dirname, p)
  const app = express()

  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom'
  })

  app.use(vite.middlewares)

  app.use('/getFruitList', async (req, res) => {
    const names = ['Orange', 'Apricot', 'Apple', 'Plum', 'Pear', 'Pome', 'Banana', 'Cherry', 'Grapes', 'Peach']

    const list = names.map((name, id) => {
      return {
        id: ++id,
        name,
        price: Math.ceil(Math.random() * 100)
      }
    })

    res.status(200).end(JSON.stringify({
      data: list,
      msg: '',
      status: 1,
    }))
  })

  app.use('*', async (req, res, next) => {
    const url = req.originalUrl

    try {
      let template = fs.readFileSync(resolve('./index.html'), 'utf-8',)

      template = await vite.transformIndexHtml(url, template)

      const { render } = await vite.ssrLoadModule('/src/entry-server.js')

      const [appHtml] = await render(url)

      const html = template.replace(`<!--app-html-->`, appHtml)


      res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
    } catch (e) {
      vite.ssrFixStacktrace(e)
      next(e)
    }
  })

  app.listen(PORT)
}

createServer().then(() => {
  console.log(`http://localhost:${PORT}`)
})


