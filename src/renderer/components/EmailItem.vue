<template>
  <router-link :to="{name: 'Message', params: {id: message.id}}" class="email">
    <div class="email--flag"><el-checkbox /></div>
    <div class="email--from">{{message.from}}</div>
    <div class="email--subject">{{message.subject}}</div>
    <div class="email--date">{{message.date}}</div>
  </router-link>
</template>

<script>
  export default {
    name: 'EmailItem',
    components: { },
    props: ['message'],
  };
</script>

<style>
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
    width: 5%;
    flex-basis: 2em;
    flex-grow: 0;
  }
  .email--from {
    width: 30%;
    max-width: 12em;
    padding-right: 3em;
  }
  .email--subject, .email--from {
    width: 50%;
    flex-grow: 1;
  }
  .email--date {
    width: 15%;
    flex-basis: 4em;
    flex-grow: 0;
  }
</style>
