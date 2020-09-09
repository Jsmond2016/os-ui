<template>
  <div class="my-tabs">
    <div class="my-tabs-nav">
      <div class="my-tabs-nav-item" :class="{selected: t === selected}" v-for="(t,index) in titles" :key="index">{{t}}</div>
    </div>
    <div class="my-tabs-content">
      <component class="my-tabs-content-item" v-for="(c,index) in defaults" :is="c" :key="index" />
    </div>
  </div>
</template>

<script>
import Tab from './Tab.vue'
export default {
  components: {
    Tab,
  },
  props: {
    selected: {
      type: String,
    }
  },
  setup(props, context) {
    const defaults = context.slots.default()
    console.log(defaults[0].type === Tab);
    defaults.forEach(tag => {
      if (tag.type !== Tab) {
        throw new Error('Tabs 的子组件必须为 Tab')
      }
    })
    const titles = defaults.map(tag => tag.props.title)
    return {
      defaults,
      titles
    }
  }
}
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.my-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
      &:first-child {
        margin-left: 0;
      }
      &.selected {
        color: $blue;
      }
    }
  }
  &-content {
    padding: 8px 0;
  }
}
</style>