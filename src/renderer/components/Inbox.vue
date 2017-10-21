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
        <div class="email">
          <div class="email--flag"><input type="checkbox"></div>
          <div class="email--from">Papai</div>
          <div class="email--subject">Aumente seu tênis</div>
          <div class="email--date">Out 10</div>
        </div>
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
  }
</style>
