# 部署相关

## rollup 打包

新建 `lib/index.ts` 文件

```typescript
export { default as Button } from './Button.vue'
export { default as Switch } from './Switch.vue'
export { default as Dialog } from './Dialog.vue'
export { default as Tab } from './Tab.vue'
export { default as Tabs } from './Tabs.vue'
export { default as openDialog } from './openDialog.vue'
```

根目录新建 `rollup.config.js` 文件

```js
// 请先安装 rollup-plugin-esbuild rollup-plugin-vue rollup-plugin-scss sass rollup-plugin-terser
// 为了保证版本一致，请复制我的 package.json 到你的项目，并把 name 改成你的库名
import esbuild from 'rollup-plugin-esbuild'
import vue from 'rollup-plugin-vue'
import scss from 'rollup-plugin-scss'
import dartSass from 'sass';
import { terser } from "rollup-plugin-terser"

export default {
  input: 'src/lib/index.ts',
  output: {
    globals: {
      vue: 'Vue'
    },
    name: 'Gulu',
    file: 'dist/lib/gulu.js',
    format: 'umd',
    plugins: [terser()]
  },
  plugins: [
    scss({ include: /\.scss$/, sass: dartSass }),
    esbuild({
      include: /\.[jt]s$/,
      minify: process.env.NODE_ENV === 'production',
      target: 'es2015' 
    }),
    vue({
      include: /\.vue$/,
    })
  ],
} 
```

为避免 `node-sass` 安装慢的问题，在 `package.json` 文件中新增

```json
"resolutions": {
    "node-sass": "npm:sass@^1.26.11"
  },
```

然后，安装依赖和打包

```bash
yarn install

rollup -c
```



## yarn build

build 之后页面不显示：因为 rollup 不支持在 使用 import 时拼入字符串，要么让它支持（不靠谱），要么不用拼的方式（可用）

发布到 githu 可能遇到问题：


assets 目录带有下划线 `_assets` 导致 github 无法读取到该目录

根目录错误，应该引导到当前目录，而不是 `/` ，所以要这样修改

```js
// vite.config.js
// @ts-nocheck
import { md } from "./plugins/md";
import fs from 'fs'
import {baseParse} from '@vue/compiler-core'

export default {
  // 新增这两个
  base: '/',
  assetsDir: 'assets', 
  plugins: [md()],
  vueCustomBlockTransforms: {
    demo: (options) => {
      const { code, path } = options
      const file = fs.readFileSync(path).toString()
      const parsed = baseParse(file).children.find(n => n.tag === 'demo')
      const title = parsed.children[0].content
      const main = file.split(parsed.loc.source).join('').trim()
      return `export default function (Component) {
        Component.__sourceCode = ${
        JSON.stringify(main)
        }
        Component.__sourceCodeTitle = ${JSON.stringify(title)}
      }`.trim()
    }
  }
};
```

## 部署到 github

新建自动化脚本 `deploy.sh` 如下：

```bash
# windows 用户请使用 bash 或 cmder 操作，cmd 无效
rm -rf dist
yarn build
cd dist
git init
git add .
git commit . -m "update"
# 这里使用自己仓库的 ssh 地址（先配置 ssh-key），推荐使用 gitee 快速预览
git remote add origin git@gitee.com:jsmond/my-ui.git
git push -f -u origin master
cd -
echo '部署成功，稍等一会儿后，预览地址为：http://jsmond.gitee.io/my-ui/index.html'

```

## 部署到 码云