<demo>
 切换 Dialog
</demo>

<template>
  <Button @click="toggleDialog">切换Dialog</Button>
  <Dialog v-model:visible="x" :closeOnClickOverlay="true" :confirm="onOk" :cancel="onCancel">
    <template v-slot:content>
      <p>你好测试，你好测试</p>
      <p>你好测试，你好测试</p>
    </template>
    <template v-slot:title>
      <strong>我是标题</strong>
    </template>
  </Dialog>
</template>
<script>
import { ref } from "vue";
import Dialog from "../lib/Dialog.vue";
import Button from "../lib/Button.vue";

export default {
  components: {
    Dialog,
    Button,
  },
  setup() {
    const x = ref(false);
    const toggleDialog = () => {
      console.log("hi");
      x.value = !x.value;
    };
    const onOk = () => {
      console.log("ok");
      return false;
    };
    const onCancel = () => {
      console.log("cancel");
    };
    return { x, toggleDialog, onOk, onCancel };
  },
};
</script>
