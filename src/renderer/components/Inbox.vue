<template>
  <el-container id="email-app">
    <el-aside>
      <h1 class="logo">Yuppi!</h1>
      <nav class="labels">
        <router-link to="/" class="label">Inbox</router-link>
        <router-link to="/label/trusted" class="label">Amigos</router-link>
        <router-link to="/label/promo" class="label">Promoções</router-link>
        <router-link to="/label/misc" class="label">Outros</router-link>
      </nav>
    </el-aside>
    <el-main class="inbox">
      <div class="search"></div>
      <div class="emails">
        <email-item v-for="message in filteredMessages" :message="message"></email-item>
      </div>
    </el-main>
  </el-container>
</template>

<script>
  import EmailItem from '@/components/EmailItem';
  import { mapState } from 'vuex';

  export default {
    name: 'Inbox',
    data() {
      return { };
    },
    components: {
      'email-item': EmailItem,
    },
    computed: {
      ...mapState({ messages: state => state.Inbox.messages }),
      label() { return this.$route.params.label; },
      filteredMessages() {
        return this.label ?
          this.messages.filter(m => m.tag === this.label) :
          this.messages;
      },
    },
  };
</script>

<style>
  #email-app {
    height: 100vh;
  }
  .el-aside {
    background-color: orange;
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
</style>
