<demo>
Button loading 和 事件
</demo>

<template>
  <div>
    <Button loading>加载中</Button>
    <Button @click="test">加载完毕</Button>
  </div>
</template>

<script lang='ts'>
import Button from '../lib/Button.vue'
export default {
  components: {
    Button
  },
  setup() {
    const test = () => {
      alert('加载完毕')
    }

    return {
      test
    }
  }
}
</script>