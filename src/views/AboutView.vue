<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>app1: {{ $store.state.appName }}</h2>
    <input v-model="inputValue" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputValue: null,
    };
  },
  mounted() {
    setTimeout(() => {
      this.$store.state.appName = "app1-" + new Date().getTime();
    }, 5000);
  },
  created() {
    console.log("@@@@@ App1-created: about");
  },
};
</script>

<style>
</style>