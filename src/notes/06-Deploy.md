# 部署相关

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