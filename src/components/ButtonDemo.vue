<template>
  <div>
   <Button @click="handleClick" size="50" notShow="false">你好</Button>
  </div>
</template>

<script>
import Button from '../lib/Button.vue'

export default {
  components: {
    Button,
  },
  setup() {
    const handleClick = () => {
      console.log('hello')
    }
    return { handleClick }
  }
}
</script>