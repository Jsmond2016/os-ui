<template>
  <div>
    导航栏 | 
    <router-link to="/">Home页</router-link> &nbsp;
    <router-link to="/doc">文档页</router-link>
  </div>
  <hr>
  <router-view />
</template>

<script>

export default {
  name: 'App'
}
</script>
