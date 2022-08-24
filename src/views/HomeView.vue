<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h-button>H-BUTTON</h-button>
    <HelloWorld msg="Welcome to App1" />
    <input v-model="inputValue" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
  data() {
    return {
      inputValue: null,
    };
  },
  created() {
    console.log("@@@@@ App1-created: home");
  },
};
</script>
