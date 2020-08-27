<template>
  <div>
    <button :class="{checked: value}" @click="toggle">
      <span></span>
    </button>
    <div>{{value}}</div>
  </div>
</template>

<script lang='ts'>
  import {
    ref
  } from 'vue'
  export default {
    name: 'Switch',
    props: {
      value: Boolean
    },
    setup(props, context) { // 第二个参数 context
      const toggle = () => {
        // props.value = !props.value 这里不能直接更改 props 的值
        context.emit('update:value', !props.value)
      }
      return {
        toggle
      }
    }
  }
</script>

<style lang="scss" scoped>
  $h: 22px;
  $h2: $h - 4px;

  button {
    width: $h*2;
    height: $h;
    border: none;
    background: #bfbfbf;
    border-radius: $h / 2;
    position: relative;
    span {
      position: absolute;
      top: 2px;
      left: 2px;
      height: $h2;
      width: $h2;
      background: white;
      border-radius: $h2 / 2;
      transition: all 250ms;
    }
    &.checked {
      background: #1890ff;
      >span {
        left: calc(100% - #{$h2} - 2px);
      }
    }
    &:active {
      >span {
        width: $h2 + 4px;
        margin-left: -4px;
      }
    }
    &.checked:active {
      >span {
        width: $h2 + 4px;
      }
    }
    &:focus {
      outline: none;
    }
 }
</style>