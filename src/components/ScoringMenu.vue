<template>
  <div class="menu-screen">
      <div class="menu-container">
          <label> {{ title }} </label>
          <input 
            type="number" 
            placeholder="Điểm (1 - 70)" 
            v-model.number="score" 
            min="1" max="70" 
            :class="{ 'disable': indexQuestion === -1 }" 
            :disabled="indexQuestion === -1"
            @input="updateScore"
          />
          <button 
            @click="sendScore"
            :class="{ 'disable': indexQuestion === -1 }" 
            :disabled="indexQuestion === -1"
          >
              Gửi
          </button>
      </div>
  </div>
</template>

<!-- JAVASCRIPT -->
<script>
// import { sendScore } from '@/utils/examiner';

export default {
  data() {
    return {
      indexQuestion: null,
      score: null,
      title: 'Chưa đến thời gian nhập điểm',
    };
  },

  mounted() {
    this.changeTitle(this.score);
  },

  methods: {
    changeTitle(score) {
      if (this.indexQuestion >= 1 && this.indexQuestion <= 6) {
        this.title = 'Vui lòng nhập điểm cho thí sinh';
        if (score === null) return; 

        if (score < 1 || score > 70) {
          this.title = 'Giá Trị Không Hợp Lệ !';
          console.log(this.score);
        }
      }
    },
    sendScore() {
      if (this.score < 1 || this.score > 70) {
        alert('Vui lòng nhập điểm từ khoảng 1 - 70');
        return;
      }
      // await sendScore() api
      alert('Nhập điếm thành công !')
    },

    // api indexQuestion
    // getIndexQuestion() {
    //   this.indexQuestion = await ...
    // }
  },

  watch: {
    score(newIndex) {
      this.changeTitle(newIndex);
    }
  }

}
</script>

<style>
.disable {
  pointer-events: none;
}

.menu-screen {
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

.menu-container {
  background-color: white;
  padding: 7% 5%;
  border-radius: 5%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 50%;
}

.menu-container>label {
  display: block;
  margin-bottom: 10%;
  font-weight: bold;
  font-size: 40px;
}

.menu-container>input {
  width: 90%; 
  padding: 3%;
  margin-bottom: 10%;
  border: 1px solid #ccc;
  border-radius: 15px;
  box-sizing: border-box;
  font-size: 40px;
}

.menu-container>button {
  margin-top: 20px;
  width: 50%;
  padding: 3% 0;
  border: none;
  border-radius: 15px;
  background-color: #007bff;
  color: white;
  font-size: 40px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.menu-container>button:hover {
  background-color: #0056b3;
}

.menu-container>.error-message {
  color: red;
  margin-top: 10px; 
}

</style>