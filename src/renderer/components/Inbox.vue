<template>
  <el-container id="email-app">
    <el-aside>
      <h1 class="logo">Yuppi!</h1>
      <nav class="labels">
        <router-link to="/inbox" class="label">Inbox</router-link>
        <router-link to="/inbox/trusted" class="label">Amigos</router-link>
        <router-link to="/inbox/promo" class="label">Promoções</router-link>
        <router-link to="/inbox/misc" class="label">Outros</router-link>
      </nav>
    </el-aside>
    <el-main class="inbox">
      <div class="search"></div>
      <div class="emails">
        <router-link to="/inbox/message/1" class="email">
          <div class="email--flag"><el-checkbox /></div>
          <div class="email--from">Papai</div>
          <div class="email--subject">Aumente seu tênis</div>
          <div class="email--date">Out 10</div>
        </router-link>
        <router-link class="email" to="inbox/message/2">
          <div class="email--flag"><el-checkbox /></div>
          <div class="email--from">Papai</div>
          <div class="email--subject">Aumente seu tênis</div>
          <div class="email--date">Out 10</div>
        </router-link>
      </div>
    </el-main>
  </el-container>
</template>

<script>
  export default {
    name: 'inbox',
    components: { },
    methods: { },
  };
</script>

<style>
  #email-app {
    height: 100vw;
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
  .email {
    display: flex;
    border-radius: 0.33em;
    border: 1px solid #eee;
    padding: 0.33em 1em;
    text-decoration: none;
    color: inherit;
    margin: 0.33em 0;
  }
  .email:hover {
    background-color: #eee;
  }
  .email--flag {
    flex-basis: 2em;
    flex-grow: 0;
  }
  .email--subject, .email--from {
    flex-grow: 1;
  }
  .email--date {
    flex-basis: 4em;
    flex-grow: 0;
  }
</style>
