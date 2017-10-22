<template>
  <el-aside>
    <h1 class="logo">Yuppi!</h1>
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
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    name: 'Sidebar',
    computed: { ...mapGetters(['unread']) },
  };
</script>

<style>
  .el-aside {
    background-color: orange;
    position: relative;
  }
  .logo {
    color: white;
    text-align: center;
    font-size: 4em;
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
    font: 3.5em "Open Sans";
    color: white;
    visibility: hidden;
  }
</style>
