<template>
  <el-container id="email-app">
    <sidebar />
    <el-main>
      <router-view />
    </el-main>
  </el-container>
</template>

<script>
  import Sidebar from '@/components/Sidebar';
  import { mapGetters } from 'vuex';

  export default {
    name: 'Inbox',
    components: {
      sidebar: Sidebar,
    },
    computed: {
      ...mapGetters(['unread']),
    },
  };
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Bowlby+One+SC');

  #email-app {
    height: 100vh;
  }
  .el-aside {
    background-color: orange;
    position: relative;
  }
  .logo {
    color: white;
    text-align: center;
    font-size: 4em;
    font-family: 'Bowlby One SC', cursive;
  }
  .labels, .label {
    display: block;
  }
  .label {
    font-family: Verdana, sans-serif;
    font-size: 1.2em;
    line-height: 1.4em;
    text-decoration: none;
    text-align: center;
    background-color: rgba(0,0,0,0.1);
    color: white;
    border-radius: 1em;
    margin: 0.66em 2em;
  }
  .label:hover {
    background-color: rgba(0,0,0,0.3);
  }
</style>
