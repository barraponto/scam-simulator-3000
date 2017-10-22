<template>
  <el-aside>
    <h1 class="logo">Yuppi!</h1>
    <nav class="labels">
      <router-link to="/" class="label">Inbox</router-link>
      <router-link to="/label/trusted" class="label">
        <el-badge :value="unread('trusted')">
          Família
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
    <countdown :time="5 * 60 * 1000 + 1000" v-if="mission">
      <div class="timer" slot-scope="props">
        {{props.minutes}}:{{props.seconds}}
      </div>
    </countdown>
  </el-aside>
</template>

<script>
  import { mapGetters } from 'vuex';
  import VueCountdown from '@xkeshi/vue-countdown';

  export default {
    name: 'Sidebar',
    components: { countdown: VueCountdown },
    computed: {
      ...mapGetters(['unread', 'mission']),
    },
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
  }
</style>
