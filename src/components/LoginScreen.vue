<template>
  <div class="login-screen">
      <div class="login-container">
          <label> TÊN ĐĂNG NHẬP</label>
          <input type="text" placeholder="Nhập tên đăng nhập" v-model="username" />
          <label> MẬT KHẨU </label>
          <input type="password" placeholder="Nhập mật khẩu" v-model="password"/>
          <button @click="login">
              Đăng nhập
          </button>
          <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
      </div>
  </div>
</template>

<!-- JAVASCRIPT -->
<script>
import { login } from '@/utils/examiner';

export default {
  data() {
      return {
          username: '',
          password: '',
          errorMessage: '',
      };
  },
  methods: {
      async loginUser() {
          const isLoggedIn = await login(this.username, this.password);
          if (isLoggedIn) {
              this.$cookies.set('username', this.username);
              this.$emit('login'); 
              this.errorMessage = ''; 
          } else {
              this.errorMessage = 'Tên đăng nhập hoặc mật khẩu không đúng.';
          }
      },
      login() {
          if (!this.username || !this.password) {
              this.errorMessage = 'Tên đăng nhập và mật khẩu là bắt buộc.';
              return;
          }
          this.loginUser();
      },
  },
};
</script>

<style>
.login-screen {
  background-image: url('@/assets/background.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  margin: 0;
  display: flex;
  justify-content: center; 
  align-items: center;
}

.login-container {
  background-color: white;
  padding: 6% 5%;
  border-radius: 5%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 40%;
}

.login-container>label {
  display: block;
  margin-bottom: 2%;
  font-weight: bold;
  font-size: 35px;
  text-align: start;
}

.login-container>input {
  width: 100%; 
  padding: 3%;
  margin-bottom: 10%;
  border: 1px solid #ccc;
  border-radius: 15px;
  box-sizing: border-box;
  font-size: 40px;
}

.login-container>button {
  margin-top: 20px;
  width: 100%;
  padding: 3% 0;
  border: none;
  border-radius: 15px;
  background-color: #007bff;
  color: white;
  font-size: 40px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.login-container>button:hover {
  background-color: #0056b3;
}

.login-container>.error-message {
  color: red;
  margin-top: 10px; 
}
</style>