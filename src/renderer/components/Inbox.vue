<template>
  <el-container id="email-app">
    <el-aside>
      <h1>Yuppi Email</h1>
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
</style>
