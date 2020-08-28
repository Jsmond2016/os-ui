<template>
  <h1>Dialog 示例</h1>
  <div style="position: relative; z-index: 1;">
    <Button @click="toggleDialog">切换Dialog</Button>
    <!-- <Dialog :visible="x" @update:visible="x = $event" /> -->
    <Dialog v-model:visible="x" :closeOnClickOverlay="true" :confirm="onOk" :cancel="onCancel">
      <template v-slot:content>
        <p>你好测试，你好测试</p>
        <p>你好测试，你好测试</p>
      </template>
      <template v-slot:title>
        <strong>我是标题</strong>
      </template>
    </Dialog>
  </div>
  <div style="position: relative; width: 500px; height: 500px; background: red; z-index: 2;">测试层叠关系</div>
</template>
<script>
import Dialog from "../lib/Dialog.vue";
import Button from "../lib/Button.vue";
import { ref } from "vue";
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
