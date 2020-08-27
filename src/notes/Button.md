# vue3-Button 组件

## Vue3 属性绑定细节

问题：vue3 会将所有父元素的事件默认绑定到子元素最外层

比如，我们给 button 添加  click 事件

```html
<--! 父元素 -->
<Button @click="handleClick">你好</Button>

 setup() {
    const handleClick = () => {
      console.log('hello')
    }
    return { handleClick }
  }

<--! 子元素 -->

<template>
  <div>
    <button>
      <slot />
    </button>
  </div>
</template>

```

我们发现，点击 button 外层的 div 也会触发 button 的 click 事件，是因为 vue3 做了事件绑定，统一绑定在组件最外层。

需求：将 事件传导给 里面的 button 按钮，怎么做？

- 设置 `inheritAttrs: false` ，表示取消默认绑定
- setup(props, context) 中的 context 里面有 attrs 属性，就是父元素传递进来的所有事件
- 使用 $attrs 或者 context.attrs 获取所有属性
- 使用 v-bind="$attrs" 批量绑定属性
- 使用 剩余操作符 ，将部分 事件 绑定到 button 组件中



```html
<template>
  <div :size="size">
    <button v-bind="rest">
      <slot />
    </button>
  </div>
</template>

<script>
  export default {
    inheritAttrs: false,
    setup(props, context) {
      const { size, ...rest } = context.attrs;
      return { size, rest };
    }
  }
</script>

```


## 关于 props V.S. attrs 区别如下

- props 要先声明才能取值，attrs 不用先声明，如下，props 里只声明了 size，没有声明 notShow，因此无法获取到 notShow

```html
<--! 父元素 -->
<Button @click="handleClick">你好</Button>

 setup() {
    const handleClick = () => {
      console.log('hello')
    }
    return { handleClick }
  }

<--! 子元素 -->

<template>
  <div>
    <button size="50" notShow="false">
      <slot />
    </button>
  </div>
</template>
<script lang='ts'>
export default {
  inheritAttrs: false,
  props: {
    size: Number,
  },
  setup(props, context) {
    const { size, ...rest } = context.attrs;

    console.log({...props}) //{size: "50"}
    console.log({...context.attrs}) //{notShow: "", onClick: f}

    return { size, rest };
  }
}

</script>
```

- props 不包含事件，attrs 包含

- props 没有声明的属性，会跑到 attrs 里

- props 支持 string 以外的类型，attrs 只有 string 类型

上面的几个特点，在上面的例子中都可以体现

## 添加基础样式

这里注意几个问题：

- 去除 scoped ，因为 data-v-xxx 中的 xxx 每次运行可能不同，必须输出稳定不变的 class 选择器，方便使用者覆盖
- 针对 firefox 浏览器可能出现的 outline 问题，使用下面代码处理

```css
&::-moz-focus-inner {
      border: 0;
    }
```
- 必须加前缀。
  - `.button` 不行，很容易被使用者覆盖,
  - `.jsmond-button` 可以，不太容易被覆盖, 
  - `.theme-link` 不行，很容易被使用者覆盖,
  - `.jsmond-theme-link` 可以，不太容易被覆盖


基础样式全部代码为：

```html
<template>
  <button class="jsmond-button" :class="{[`theme-${theme}`]: theme}">
    <slot />
  </button>
</template>



<style lang="scss">
  $h: 32px;
  $border-color: #d9d9d9;
  $color: #333;
  $blue: #40a9ff;
  $radius: 4px;

  .jsmond-button {
    box-sizing: border-box;
    height: $h;
    padding: 0 12px;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    background: white;
    color: $color;
    border: 1px solid $border-color;
    border-radius: $radius;
    box-shadow: 0 1px 0 fade-out(black, 0.95);

    &+& {
      margin-left: 8px;
    }

    &:hover,
    &:focus {
      color: $blue;
      border-color: $blue;
    }

    &:focus {
      outline: none;
    }

    &::-moz-focus-inner {
      border: 0;
    }
  }
</style>
```