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

  //   Gửi mail
  emailjs
    .send("service_96kzaxe", "template_96zl9sf", data)
    .then((result) => {
      console.log("Đã gửi thông tin thành công !", result.text);
      // alert("Chúng tôi sẽ sớm trả lời câu hỏi của bạn");
    })

    .catch((error) => {
      console.error("Lỗi khi gửi tin nhắn: ", error);
      alert("Có lỗi xảy ra khi gửi. Vui lòng thử lại !");
    });

  // Ẩn popup và reset dữ liệu
  // DOM popup__message

  const messSucsses = document.querySelector(".popup__message");
  messSucsses.innerHTML =
    "<h4> Chúng tôi sẽ sớm trả lời câu hỏi của bạn !</h4>";
  setTimeout(() => {
   location.reload();
    popUpMessDaddy.style.display = "none";
  }, 1500);
  selectedQuestion = "";
  mainInputReq.value = ""; // Xóa nội dung input sau khi gửi
  popUpMessEmail.value = ""; // Xóa email sau khi gửi
});

// đoạn code fix lỗi hiển thị layout
let lastScrollTop = 0;
const elements = document.querySelectorAll(
  ".main__req__3, .main__req__4, .main__req__5"
);

window.addEventListener("scroll", function () {
  let scrollTop = window.scrollY || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Nếu cuộn xuống → Ẩn đi
    elements.forEach((el) => (el.style.opacity = "1"));
  } else {
    // Nếu cuộn lên → Hiện lại
    elements.forEach((el) => (el.style.opacity = "0"));
  }

  lastScrollTop = scrollTop;
});
