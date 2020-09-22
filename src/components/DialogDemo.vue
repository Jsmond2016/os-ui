<template>
  <h2>Dialog 示例1</h2>
  <Demo :component="Dialog1Demo" />
  <h2>Dialog 示例2</h2>
  <Demo :component="Dialog2Demo" />
</template>
<script>
import Demo from './Demo.vue'
import Dialog1Demo from '../demos/Dialog1Demo.vue'
import Dialog2Demo from '../demos/Dialog2Demo.vue'

export default {
  components: {
    Demo
  },
  setup() {
    return {
      Dialog1Demo,
      Dialog2Demo
    };
  },
};
</script>
