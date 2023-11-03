<template>
  <div style="height: 100%" id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  created() {
    // 页面加载时读取Storage里的状态信息
    if (localStorage.getItem("store")) {
      let state = JSON.parse(localStorage.getItem("store"));
      this.$store.replaceState(Object.assign({}, this.$store.state, state));
    }
    let { appSetting } = this.$store.state;
    this.$store.dispatch("appSetting/setTheme", appSetting.theme || "theme--hzred");
  }
};
</script>

<style lang="less" scoped>
html,
body {
  height: 100%;
  padding: 0;
  margin: 0;
}
</style>
