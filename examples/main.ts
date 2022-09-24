import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Button } from "vant"
import 'vant/lib/index.css'

// common.js引入格式
import "../lib/index.css"
const testComponents = require("../lib/index.common.js").default

createApp(App)
  .use(store)
  .use(Button)
  .use(testComponents)
  .use(router)
  .mount('#app')
