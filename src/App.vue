<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" width="25%" />
    <HelloWorld msg="Hello Vue in CodeSandbox!" />
    <!-- ダイアログはここに表示される -->
    <div id="dialog"></div>
  </div>
</template>

<script>
import Vue from "vue";
import HelloWorld from "./components/HelloWorld";

import dialog from "./components/dialog/dialog";
Vue.use(dialog);

export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
