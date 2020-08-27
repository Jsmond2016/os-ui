<template>
  <div :size="size">
    <button v-bind="rest">
      <slot />
    </button>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    size: Number,
  },
  setup(props, context) {
    const { size, ...rest } = context.attrs;
    console.log({...props}) //{size: "50"}
    console.log({...context.attrs}) //{notShow: "", onClick: f}
    return { size, rest };
  }
}
</script>