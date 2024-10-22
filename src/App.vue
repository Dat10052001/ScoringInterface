<template>
  <LoginScreen v-if="!isLoggedIn" @login="handleLogin"/>
  <QuestionAnswer v-else/>
</template>

<script>
import LoginScreen from './components/LoginScreen.vue'

export default {
  name: 'App',
  components: {
    LoginScreen
  },
  data() {
    return {
      isLoggedIn: false,
    };
  },
  mounted() {
    this.isLoggedIn = this.$cookies.isKey('username');
  },
  methods: {
    handleLogin() {
      this.isLoggedIn = true;
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
