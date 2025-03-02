// DOM
const popUpMessDaddy = document.querySelector(".popup__message__daddy");
const popUpMessEmail = document.querySelector(".popup__message__email");
const popUpMessBtn = document.querySelector(".popup__message__btn");

const mainInputReq = document.querySelector(".main__input__req");
const mainInputReqBtn = document.querySelector(".main__input__req__btn");

// Danh sách các câu hỏi
const questions = document.querySelectorAll(
  ".main__req__1, .main__req__2, .main__req__3, .main__req__4, .main__req__5"
);

// Biến để lưu câu hỏi hoặc nội dung nhập vào
let selectedQuestion = "";

// Khi người dùng nhấn vào câu hỏi có sẵn
questions.forEach((question) => {
  question.addEventListener("click", () => {
    selectedQuestion = question.innerText.trim();
    popUpMessDaddy.style.display = "flex";
  });
});

// Khi người dùng nhập câu hỏi vào input và nhấn nút
mainInputReqBtn.addEventListener("click", () => {
  selectedQuestion = mainInputReq.value.trim(); // Lưu giá trị nhập vào
  popUpMessDaddy.style.display = "flex";
});

// Khi người dùng nhấn nút gửi
popUpMessBtn.addEventListener("click", () => {
  if (!selectedQuestion) {
    alert("Vui lòng chọn hoặc nhập câu hỏi trước khi gửi!");
    return;
  }

  let data = {
    req: selectedQuestion,
    infor: popUpMessEmail.value.trim(),
  };

  console.log(data);

  alert("Chúng tôi sẽ sớm trả lời câu hỏi của bạn!");

  // Ẩn popup và reset dữ liệu
  popUpMessDaddy.style.display = "none";
  selectedQuestion = "";
  mainInputReq.value = ""; // Xóa nội dung input sau khi gửi
  popUpMessEmail.value = ""; // Xóa email sau khi gửi
});
