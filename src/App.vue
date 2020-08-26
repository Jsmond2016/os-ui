<template>
  <router-view />
</template>

<script>
import { ref, provide } from 'vue'
import { router } from "./router";

export default {
  name: 'App',
  setup() {
    const width = document.documentElement.clientWidth;
    const menuVisible = ref(width <= 500 ? false : true);
    provide("menuVisible", menuVisible); // 使用 provide 让所有子组件都可以获取到 menuVisible
    router.afterEach(() => {
      if (width <= 500) {
        menuVisible.value = false;
      }
    });
  },
}
</script>
