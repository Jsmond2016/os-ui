<template>
  <h1>Dialog 示例1</h1>
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
  <h1>Dialog 示例2</h1>
  <Button @click="showDialog">一行代码打开 Dialog</Button>
</template>
<script>
import Dialog from "../lib/Dialog.vue";
import Button from "../lib/Button.vue";
import { ref } from "vue";
import { openDialog } from '../lib/openDialog';

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
    const showDialog = () => {
      openDialog({
        title: "示例2-测试",
        content: "你好",
        closeOnClickOverlay: false,
        ok: () => { console.log('okkkk-')},
        cancel: () =>{ console.log('cancel-----')},
      })
    }
    return { x, toggleDialog, onOk, onCancel, showDialog };
  },
};
</script>
