## Vue SSR 原理探究


## Example

playground

- basic 最基础例子
  - app.js 创建 Vue SSR 实例，客户端、服务端共用部分
  - client.js 把 Vue 实例挂载到客户端，保证数据的响应式
  - server.js 把 Vue 实例渲染为字符串，并通过 express 响应给客户端


- vite-ssr 基于 Vite 实现的 SSR
  - src
    - App.vue vue 应用组件入口
    - entry-client.js 客户端入口
    - entry-server.js 服务端入口
    - router.js 路由
    - stores.js pinia store
  - server.js 创建 Vite 服务

