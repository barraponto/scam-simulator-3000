<template>
  <div class="mail-container">
    <div class="mail-header">
      <div class="mail-subject">{{message.subject}}</div>
      <div class="mail-sender">De: {{message.name}} ({{message.from}})</div>
      <div class="mail-date">{{message.date}}</div>
    </div>
    <markdown class="mail-content" :source="message.text" />
    <div class="actions">
      <el-button @click="respond({message: message.id, option: index})"
        v-for="(option, index) in message.options" key="option">
        {{option}}
      </el-button>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
  import VueMarkdown from 'vue-markdown';

  export default {
    name: 'EmailView',
    components: { markdown: VueMarkdown },
    props: { id: String },
    computed: {
      ...mapGetters(['byId']),
      message() { return this.byId(this.id); },
    },
    methods: {
      ...mapActions(['viewed', 'respond']),
    },
    mounted() {
      this.viewed(this.id);
    },
    updated() {
      this.viewed(this.id);
    },
  };
</script>

<style>
  .mail-container {
    margin-top: 5px;
    border: 1px solid #eee;
    border-radius: 0.33em;
  }
  .mail-header {
    padding: 3%;
    border-bottom: 1px solid #ccc;
  }
  .mail-subject {
    font: 2.5em small-caps bolder, sans-serif;
    margin-bottom: 0.5em;
  }
  .mail-sender {
    color: #444;
    display: inline-block;
    width: 70%;
  }
  .mail-date {
    color: #444;
    float: right;
    text-align: right;
    display: inline-block;
    width: 30%;
  }
  .mail-content {
    margin: 3%;
  }
  .actions {
    padding: 1em;
    text-align: center;
  }
</style>
