<template>
  <div class="hello">
    <button @click="openDialog">dialog</button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  methods: {
    async openDialog() {
      //Vue自体に追加された$dialog()という関数を呼び出す
      await this.$dialog().open("ダイアログです");
      console.log("close");
    },
  },
};
</script>