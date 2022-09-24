import { App } from "vue"
import TestButton from "./components/Button"
const components = [
  TestButton
]

// 定义 install 方法， App 作为参数
const install = (app: App): void => {
  // 遍历注册所有组件
  components.map(component => app.component(component.name, component))
}

// 所有tempalte形式组件
export default {
  install
}
