import express from 'express'
import { createSSRApp } from "vue"
import { renderToString } from "vue/server-renderer"

const server = express()
const PORT = 3002


server.get('/', (req, res) => {
    const app = createSSRApp({
        data: () => ({ count: 1 }),
        template: `<button @click="count++">{{ count }}</button>`
    })

    app.mount('#app')

    renderToString(app).then(html => {
        res.set('Content-Type', 'text/html')
        res.status(200).send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Vue SSR Example</title>
        </head>
        <body>
            <div id="app">${html}</div>
        </body>
        </html>
        `)
    })
})

server.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})