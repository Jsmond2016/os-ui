<demo>
 一行代码打开 Dialo
</demo>

<template>
  <Button @click="showDialog">一行代码打开 Dialog</Button>
</template>
<script>
import { ref } from "vue";
import Button from "../lib/Button.vue";
import { openDialog } from '../lib/openDialog';

export default {
  components: {
    Button,
  },
  setup() {
    const showDialog = () => {
      openDialog({
        title: "示例2-测试",
        content: "你好",
        closeOnClickOverlay: false,
        ok: () => { console.log('okkkk-')},
        cancel: () =>{ console.log('cancel-----')},
      })
    }
    return { showDialog };
  },
};
</script>
