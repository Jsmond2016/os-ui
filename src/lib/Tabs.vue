<template>
  <div>
    <div v-for="(t, index) in titles" :key="index">{{t}}</div>
    <component v-for="(c,ckey) in defaults" :key="ckey" :is="c" />
  </div>
</template>

<script>
import Tab from './Tab.vue'
export default {
  components: {
    Tab,
  },
  setup(props, context) {
    const defaults = context.slots.default()
    console.log(defaults[0].type === Tab);
    defaults.forEach(tag => {
      if (tag.type !== Tab) {
        throw new Error('Tabs 的子组件必须为 Tab')
      }
    })
    const titles = defaults.forEach(tag => tag.props.title)
    return {
      defaults,
      titles
    }
  }
}
</script>