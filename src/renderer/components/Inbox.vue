<template>
  <el-container id="email-app">
    <el-aside>
      <h2 class="logo">Yuppi!</h2>
      <nav class="labels">
        <router-link to="/" class="label">Inbox</router-link>
        <router-link to="/label/trusted" class="label">
          <el-badge :value="unread('trusted')">
            Amigos
          </el-badge>
        </router-link>
        <router-link to="/label/promo" class="label">
          <el-badge :value="unread('promo')">
            Promoções
          </el-badge>
        </router-link>
        <router-link to="/label/misc" class="label">
          <el-badge :value="unread('misc')">
            Outros
          </el-badge>
        </router-link>
      </nav>
      <div class="timer">00:00</div>
    </el-aside>
    <el-main>
      <router-view />
    </el-main>
  </el-container>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    name: 'Inbox',
    data() {
      return { };
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
  .timer {
    position: absolute;
    text-align: center;
    bottom: 0;
    margin: 0 auto;
    margin-bottom: 10%;
    width: inherit;
    font: 3.5em "Bowlby One SC";
    color: white;
    visibility: visible;
  }
</style>
