<template>
  <div>
    <h1>Dialog 示例</h1>
    <Button @click="toggleDialog">切换Dialog</Button>
    <!-- <Dialog :visible="x" @update:visible="x = $event" /> -->
    <Dialog
      v-model:visible="x"
      :closeOnClickOverlay="true"
      :confirm="onOk"
      :cancel="onCancel"
    />
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
      console.log('hi')
      x.value = !x.value;
    }
    const onOk = () => {
      console.log('ok')
      return false;
    }
    const onCancel = () => {
      console.log('cancel');
    }
    return { x, toggleDialog, onOk, onCancel };
  }
}
</script>