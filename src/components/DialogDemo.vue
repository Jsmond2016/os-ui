<template>
  <h2>Dialog 示例1</h2>
  <Demo :component="Dialog1Demo" />
  <h2>Dialog 示例2</h2>
  <Demo :component="Dialog2Demo" />
  <footer-nav
    :lastPage="{route: '/doc/button', content: 'Button组件'}"
    :nextPage="{route: '/doc/tabs', content: 'Tabs组件'}"
  >
  </footer-nav>
</template>
<script>
import Demo from './Demo.vue'
import Dialog1Demo from '../demos/Dialog1Demo.vue'
import Dialog2Demo from '../demos/Dialog2Demo.vue'
import FooterNav from './FooterNav.vue'


export default {
  components: {
    Demo,
    FooterNav
  },
  setup() {
    return {
      Dialog1Demo,
      Dialog2Demo
    };
  },
};
</script>
