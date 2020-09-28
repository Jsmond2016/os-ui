<demo>
 支持 disabled
</demo>

<template>
  <Switch v-model:value="bool" :disabled="disabled"/>
  <Button @click="toggleDisabled" v-if="disabled">enabled</Button>
  <Button @click="toggleDisabled" v-else>disabled</Button>
  <span> disabled: {{disabled}}</span>
</template>

<script lang='ts'>
import { ref } from 'vue'
import Switch from '../lib/Switch.vue'
import Button from '../lib/Button.vue'
export default {
  components: {
    Switch,
    Button
  },
  setup() {
    const bool = ref(false)
    const disabled = ref(false)
    const toggleDisabled = () => {
      disabled.value = !disabled.value
    }
    return {bool, disabled, toggleDisabled}
  }
}
</script>