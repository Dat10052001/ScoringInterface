<template>
  <LoginScreen v-if="!isLoggedIn" @login="handleLogin"/>
  <ScoringMenu v-else/>
</template>

<script>
import LoginScreen from './components/LoginScreen.vue'
import ScoringMenu from './components/ScoringMenu.vue'

export default {
  name: 'App',
  components: {
    LoginScreen,
    ScoringMenu,
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
@import url('https://fonts.cdnfonts.com/css/utm-avo');

#app {
  font-family: 'UTM Avo', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: -8px;
}
</style>
