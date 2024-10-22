import { readData, writeData } from "@/firebase";

export async function login(username, password) {
  try {
    const user = await readData(`examiners/${username}`);
    if (user && user.password == password) {
      return true;
    }
    return false;
  } catch (error) {
    console.log("lỗi khi đăng nhập");
    return false;
  }
}

export async function sendAnswer(username, indexQuestion, question, score) {
  try {
    await writeData(`score/${username}/${indexQuestion}`, {
      question,
      score,
    });

    // Viết hàm cộng điểm ở đây
  } catch (error) {
    console.log("lỗi khi gửi câu trả lời");
  }
}

