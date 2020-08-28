<template>
  <div>
    <h1>Dialog 示例</h1>
    <Button @click="toggleDialog">切换Dialog</Button>
    <Dialog :visible="x" />
  </div>
</template>
<script>
import Dialog from '../lib/Dialog.vue';
import Button from '../lib/Button.vue';
import { ref } from 'vue';
export default {
  components: {
    Dialog,
    Button,
  },
  setup() {
    const x = ref(false);
    const toggleDialog = () => {
      x.value = !x.value;
    }
    return { x, toggleDialog };
  }
}
</script>