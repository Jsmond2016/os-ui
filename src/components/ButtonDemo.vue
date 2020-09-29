<template>
  <div>
    <h2>示例1</h2>
    <Demo :component="Button1Demo"/>
  </div>
  <div>
    <h2>示例2</h2>
    <Demo :component="Button2Demo"/>
  </div>
  <div>
    <h2>示例3</h2>
    <Demo :component="Button3Demo" />
  </div>
  <div>
    <h2>示例4</h2>
    <Demo :component="Button4Demo" />
  </div>
  <div>
    <h2>示例5</h2>
    <Demo :component="Button5Demo" />
  </div>
  <footer-nav
    :lastPage="{route: '/doc/switch', content: 'Switch组件'}"
    :nextPage="{route: '/doc/dialog', content: 'Dialog组件'}"
  >
  </footer-nav>
</template>

<script>
import Button from '../lib/Button.vue'
import Demo from './Demo.vue'
import Button1Demo from '../demos/Button1Demo.vue'
import Button2Demo from '../demos/Button2Demo.vue'
import Button3Demo from '../demos/Button3Demo.vue'
import Button4Demo from '../demos/Button4Demo.vue'
import Button5Demo from '../demos/Button5Demo.vue'
import FooterNav from './FooterNav.vue'

export default {
  components: {
    Button,
    Demo,
    FooterNav
  },
  setup() {
    return {
      Button1Demo,
      Button2Demo,
      Button3Demo,
      Button4Demo,
      Button5Demo,
    }
  }
}
</script>