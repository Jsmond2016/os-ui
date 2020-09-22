<template>
  <div>
    <h1>Switch 组件示例</h1>
    <Demo :component="Switch1Demo"/>
    <Demo :component="Switch2Demo"/>
  </div>
</template>

<script lang='ts'>
import Button from '../lib/Button.vue'
import Switch1Demo from '../demos/Switch1Demo.vue'
import Switch2Demo from '../demos/Switch2Demo.vue'
import Demo from './Demo.vue'

export default {
  components: {
    Button,
    Demo,
  },
  setup() {
    return {
      Switch1Demo,
      Switch2Demo
    }
  }
}
</script>