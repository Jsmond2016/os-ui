<template>
  <div class="layout" name="top">
    <Topnav class="nav" toggleMenuButtonVisible />
    <div class="content">
      <aside v-if="menuVisible">
        <h2>文档</h2>
        <ol>
          <li>
            <router-link to="/doc/intro">介绍</router-link>
          </li>
          <li>
            <router-link to="/doc/install">安装</router-link>
          </li>
          <li>
            <router-link to="/doc/get-started">开始</router-link>
          </li>
        </ol>
        <h2>组件列表</h2>
        <ol>
          <li>
            <router-link to="/doc/switch">Switch 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs 组件</router-link>
          </li>
          <!-- <li>
            <router-link to="/doc/icon">Icon 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/input">input 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/layout">layout 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/toast">toast 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/popover">popover 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/collapse">collapse 组件</router-link>
          </li> -->
        </ol>
      </aside>
      <main @click="closeMenu">
        <router-view />
      </main>
      <footer>
        <a href="javascript:scrollTo(0,0);" target="_self">
          <svg class="icon back-to-top">
              <use xlink:href="#icon-to-top"></use>
          </svg>
        </a>
      </footer>
    </div>
  </div>
</template>
<script lang="ts">
  import Topnav from '../components/Topnav.vue'
  import {
    inject,
    Ref
  } from 'vue';

  export default {
    components: {
      Topnav
    },
    setup() {
      const menuVisible = inject < Ref < boolean >> ('menuVisible') // 获取到 menuVisible
      const width = document.documentElement.clientWidth;
      const closeMenu = () => {
        if (width < 500) {
          menuVisible.value = false;
        }
        console.log('close-menu')
      }
      return {
        menuVisible,
        closeMenu
      }
    }
  }
</script>
<style lang="scss">

$aside-index: 10;

  .layout {
    display: flex;
    flex-direction: column;
    height: 100vh;

    >.nav {
      flex-shrink: 0;
    }

    >.content {
      flex-grow: 1;
      padding-top: 60px;
      padding-left: 156px;

      @media (max-width: 500px) {
        padding-left: 0;
      }
    }
  }

  .content {
    display: flex;

    >aside {
      flex-shrink: 0;
    }

    >main {
      flex-grow: 1;
      padding: 16px;
      background: white;
    }
    >footer {
      >a {
        position: fixed;
        bottom: 60px;
        right: 40px;
        svg.back-to-top {
          width: 36px;
          height: 36px;
          fill: #02bcb0;
        }
        @media (max-width: 500px) {
            bottom: 30px;
            right: 26px;
            svg.back-to-top {
              width: 30px;
              height: 30px;
            }
        }
      }
    }
  }

  aside {
    background: lightblue;
    width: 150px;
    padding: 16px 0;
    position: fixed;
    top: 0;
    left: 0;
    padding-top: 70px;
    height: 100%;
    z-index: $aside-index;
    >h2 {
      margin-bottom: 4px;
      padding: 0 16px;
    }

    >ol {
      >li {
        a {
          display: block;
          text-decoration: none;
          padding: 4px 16px;
          &:hover{
          text-decoration: none;
        }
        }
        .router-link-active {
          background: white;
        }
      }
    }
  }
  main {
    overflow: auto;
  }
</style>