<template>
  <div>
    <h1>Switch 组件示例</h1>
    <Demo :component="Switch1Demo"/>
    <Demo :component="Switch2Demo"/>
  </div>
  <footer-nav
    :lastPage="{route: '/doc/get-started', content: '开始'}"
    :nextPage="{route: '/doc/button', content: 'Button组件'}"
  >
  </footer-nav>
</template>

<script lang='ts'>
import Button from '../lib/Button.vue'
import Switch1Demo from '../demos/Switch1Demo.vue'
import Switch2Demo from '../demos/Switch2Demo.vue'
import FooterNav from './FooterNav.vue'
import Demo from './Demo.vue'

export default {
  components: {
    Button,
    Demo,
    FooterNav
  },
  setup() {
    return {
      Switch1Demo,
      Switch2Demo
    }
  }
}
</script>