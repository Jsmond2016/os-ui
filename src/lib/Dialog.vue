<template>
  <template v-if="visible">
    <div>
      <div class="my-dialog-overlay" @click="onClickOverlay"></div>
      <div class="my-dialog-wrapper">
        <div class="my-dialog">
          <header>标题 <span @click="close" class="my-dialog-close"></span></header>
          <main>
            <p>第一行</p>
            <p>第二行</p>
          </main>
          <footer>
            <Button @click="confirm">OK</Button>
            <Button @click="cancel">Cancel</Button>
          </footer>
        </div>
      </div>
    </div>
  </template>
</template>

<script>
import Button from "./Button.vue";

export default {
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true,
    },
    confirm: {
      type: Function,
    },
    cancel: {
      type: Function,
    }
  },
  components: {
    Button,
  },
  setup(props, context) {
    const close = ()=> {
      context.emit("update:visible", false);
    }
    // 通过外面判断是否点击 背景色关闭 dialog
    const onClickOverlay = () => {
      if (props.closeOnClickOverlay) {
        close()
      }
    }

    const confirm = () => {
      // 这里不应该用事件 的方式，否则关闭不好处理，因为事件没有返回值。场景：dialog 内有表单，没有填完不允许关闭
      // const result = context.emit("confirm")
      // if (result) close()
      if (props.confirm?.() !== false) {
        close()
      }
    }

    const cancel = () => {
      if (props.cancel?.() !== false) {
        close()
      }
    }

    return { close, onClickOverlay, confirm, cancel }
  }
};
</script>

<style lang="scss">

$radius: 4px;
$border-color: #d9d9d9;
.my-dialog {
  background: white;
  border-radius: $radius;
  box-shadow: 0 0 3px fade_out(black, 0.5);
  min-width: 15em;
  max-width: 90%;
  &-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: fade_out(black, 0.5);
    z-index: 10;
  }
  &-wrapper {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 11;
  }
  > header {
    padding: 12px 16px;
    border-bottom: 1px solid $border-color;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
  }
  > main {
    padding: 12px 16px;
  }
  > footer {
    border-top: 1px solid $border-color;
    padding: 12px 16px;
    text-align: right;
  }
  &-close {
    position: relative;
    display: inline-block;
    width: 16px;
    height: 16px;
    cursor: pointer;
    &::before,
    &::after {
      content: "";
      position: absolute;
      height: 1px;
      background: black;
      width: 100%;
      top: 50%;
      left: 50%;
    }
    &::before {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
    &::after {
      transform: translate(-50%, -50%) rotate(45deg);
    }
  }
}
</style>