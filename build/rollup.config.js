import cjs from "@rollup/plugin-commonjs" // commonjs转es module —— rollup只支持es module
import resolve from "@rollup/plugin-node-resolve" // 搭配@rollup/plugin-commonjs使用
import typescript from "rollup-plugin-typescript2" // 解析TS语法
import vue from "rollup-plugin-vue" // 解析vue
import babel from "@rollup/plugin-babel"
import scss from "rollup-plugin-scss" // 解析scss
import { writeFileSync, existsSync, mkdirSync } from "fs"

const extensions = [".js", ".ts", ".vue"]
export default {
  input: "packages/index.ts",
  output: [
    {
      file: "lib/index.esm.js", // 多文件输出的话，需要使用dir替代file
      format: "es", // 打包成esm形式
      globals: {
        vue: "Vue" // 告诉rollup全局变量Vue即是vue
      }
    }
  ],
  extensions,
  plugins: [ // 顺序很重要
    scss({
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      output: function (styles, styleNodes) {
        if (!existsSync("lib/")) {
          mkdirSync("lib/")
        }
        writeFileSync("lib/index.css", styles)
      }
    }),
    vue({
      // compileTemplate: true
    }),
    // requireContext(),
    resolve({
      jsnext: true,
      main: true,
      browser: true,
      extensions
    }),
    cjs(),
    typescript(),
    babel({
      exclude: 'node_modules/**', // 只转译我们的源代码
      runtimeHelpers: true
    })
  ],
  external: ["vue", "vant"]
}
