import { createApp } from "./app.js";
import express from 'express'
import { renderToString } from "vue/server-renderer"

const server = express()
const PORT = 3002

server.get('/', (req, res) => {
    const app = createApp()

    renderToString(app).then(html => {
        res.set('Content-Type', 'text/html')
        res.status(200).send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Vue SSR Example</title>
            <script type="importmap">
            {
                "imports": {
                "vue": "https://unpkg.com/vue@3/dist/vue.esm-browser.js"
                }
            }
            </script>
            <script type="module" src="/client.js"></script>
        </head>
        <body>
            <div id="app">${html}</div>
        </body>
        </html>
        `)
    })
})

server.use(express.static('./src'))

server.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})