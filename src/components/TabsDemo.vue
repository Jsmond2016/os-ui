<template>
  <div>Tabs 示例</div>
  <Demo :component="Tabs1Demo" />
  <footer-nav
    :lastPage="{route: '/doc/dialog', content: 'Dialog组件'}"
  >
  </footer-nav>
</template>

<script>
import Demo from './Demo.vue'
import Tabs1Demo from '../demos/Tabs1Demo.vue'
import FooterNav from './FooterNav.vue'

export default {
  components: {
    Demo,
    FooterNav
  },
  setup() {
    return {
      Tabs1Demo
    }
  }
}
</script>