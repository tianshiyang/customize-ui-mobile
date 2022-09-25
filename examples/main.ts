import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Button } from "vant"
import 'vant/lib/index.css'

import "../lib/index.css"
// common.js引入格式
// const testComponents = require("../lib/index.common.js").default

// esm 引入
import testComponents from "../lib/index.esm.js"

createApp(App)
  .use(store)
  .use(Button)
  .use(testComponents)
  .use(router)
  .mount('#app')
