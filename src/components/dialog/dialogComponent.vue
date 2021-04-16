<template>
  <div class="dialog">
    <slot />
    <button @click="cancel">cancel</button>
    <button @click="ok">ok</button>
  </div>
</template>
<script>
export default {
  date: () => {
    return {
      active: false,
    };
  },
  created() {},
  props: {
    //関数をpropsで受け取る
    success: Function,
    failure: Function,
  },
  methods: {
    cancel() {
      this.$nextTick(() => {
        this.failure();
      });
    },
    ok() {
      this.$nextTick(() => {
        this.success();
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.dialog {
  position: fixed;
  top: 8px;
  left: 8px;
  padding: 8px;
  background: red;

  &.hide {
    display: none;
  }
}
</style>