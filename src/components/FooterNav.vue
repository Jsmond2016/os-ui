<template>
  <div class="footer-nav">
    <router-link v-if="lastPage" :to="lastPage.route">上一页: {{lastPage.content}}</router-link>
    <router-link v-if="nextPage" :to="nextPage.route">下一页: {{nextPage.content}}</router-link>
  </div>
</template>

<script>
export default {
  props: {
    lastPage: {
      type: Object,
      default: null
    },
    nextPage: {
      type: Object,
      default: null
    },
  }
}
</script>

<style lang="scss">
  .footer-nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 4px 10px;
    color: #1890ff;
  }
</style>