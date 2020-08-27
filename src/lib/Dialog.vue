<template>
  <div>
    <div class="my-dialog-overlay"></div>
    <div class="my-dialog-wrapper">
      <div class="my-dialog">
        <header>标题</header>
        <main>
          <p>第一行</p>
          <p>第二行</p>
        </main>
        <footer>
          <Button>OK</Button>
          <Button>Cancel</Button>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "./Button.vue";

export default {
  components: {
    Button,
  },
};
</script>