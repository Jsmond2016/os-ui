# OS-UI

- 官方预览：[os-ui](https://jsmond.gitee.io/my-ui/index.html#/)

- 代码库：[os-ui](https://github.com/Jsmond2016/os-ui)

OS UI 是一款基于 Vue 3 和 TypeScript 的 UI 组件库。

这款组件库是我作为学习 Vue3.0 和 Tyepscript 的学习成果，自己写 UI 、测试 Demo 和 官方网页

因为是个人学习的 UI 组件，并没有经过广泛的用户测试，因此强烈不建议你讲此 UI 库用于生产环境。

## 如何使用

```bash
# 新建一个 vue3 项目
npm i -g vue/cli

vue create vue-app

cd vue-app

# 添加依赖
npm i os-ui

```

具体使用，参考下面的例子

```js
<template>
  <Button @click="handleOpenDialog">hello</Button>
  <hr>
  <Switch v-model:value="switchValue"/>
  <hr>
  <Tabs v-model:selected="tabSelected">
    <Tab title="tab1">内容1</Tab>
    <Tab title="tab2">内容2</Tab>
  </Tabs>
</template>

<script>
import { Button, Switch, Dialog, openDialog, Tab, Tabs } from 'os-ui'
import 'os-ui/dist/lib/os-ui.css'
export default {
  name: 'App',
  components: {
    Button,
    Switch,
    Dialog,
    Tab,
    Tabs
  },
  data() {
    return {
      switchValue: false,
      tabSelected: 'tab1'
    }
  },
  methods: {
    handleOpenDialog() {
      openDialog({
        title: '测试测试',
        content: '内容'
      })
    }
  }
}
</script>

```
