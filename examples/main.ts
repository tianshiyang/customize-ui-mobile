import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Button } from "vant"
import 'vant/lib/index.css'
import testComponents from "../packages"

createApp(App)
  .use(store)
  .use(Button)
  .use(testComponents)
  .use(router)
  .mount('#app')
