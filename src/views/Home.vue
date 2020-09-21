<template>
<div>
  <div class="topnavAndBanner">
    <Topnav/>
    <div class="banner">
      <h1>Osmond-UI</h1>
      <h2>一个好用的 UI 框架</h2>
      <p class="actions">
        <a href="">Github</a> &nbsp;
        <router-link to="/doc">开始</router-link>
      </p>
    </div>
  </div>
  <div class="features">
    <svg class="icon">
      <use xlink:href="#icon-vue"></use>
    </svg>
    <svg class="icon">
      <use xlink:href="#icon-ts"></use>
    </svg>
    <svg class="icon">
      <use xlink:href="#icon-light"></use>
    </svg>
  </div>
</div>
</template>
<script lang="ts">
import Topnav from '../components/Topnav.vue'
export default {
  components: {Topnav} 
}
</script>
<style lang="scss" scoped>
$green: #02bcb0;
$border-radius: 4px;
$color: rgb(22 144 138);

.topnavAndBanner {
  background: rgb(184,241,237);
  background: linear-gradient(90deg, rgba(184,241,237,1) 0%, rgba(125,216,235,1) 100%, rgba(183,233,230,1) 100%);
  clip-path: ellipse(80% 60% at 50% 40%);
}
.banner {
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color:$color;
  // background: lightgreen;
  > .actions{
    padding: 8px 0;
    a {
      margin:0 8px;
      background: $green;
      color: white;
      display: inline-block;
      padding: 8px 24px;
      border-radius: $border-radius;
      &:hover{
        text-decoration: none;
      }
    }
  }
}
.features {
  > svg {
    width: 64px;
    height: 64px;
  }
}
</style>