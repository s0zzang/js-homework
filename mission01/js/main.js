const user = {
  id: "asd@naver.com",
  pw: "spdlqj123!@",
};

/* 요소 노드를 의미하는 $ 표시 추가 */
const $userEmail = document.querySelector("#userEmail");
const $userPassword = document.querySelector("#userPassword");
const $btnLogin = document.querySelector(".btn-login");

/*

1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리
4. 로그인 버튼을 클릭시 조건처리

- 아이디/비번 인풋에 입력하면 정규식 확인
  -> 정규식에 합당하지 않으면, 에러메시지 노출 (input.is--invalid)
  -> 정규식에 합당하면, 에러메시지 노출 안함 (input)

- 로그인 버튼 눌렀을 때 
  -> 아이디/비번 user와 일치하면, 로그인 성공(페이지 변경)
  -> 아이디/비번 user와 일치하지 않으면, 반응 없음

*/

function emailReg(text) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(text).toLowerCase());
}

function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}

const chkReg = (input) => {
  const _this = input.target;
  let isEmail = _this.type === "email" ? true : false;

  if (isEmail) {
    emailReg(_this.value)
      ? _this.classList.remove("is--invalid")
      : _this.classList.add("is--invalid");
  } else {
    pwReg(_this.value)
      ? _this.classList.remove("is--invalid")
      : _this.classList.add("is--invalid");
  }
};

const isUser = () => {
  let chkId = $userEmail.value === user.id ? true : false;
  let chkPw = $userPassword.value === user.pw ? true : false;
  return chkId && chkPw;
};

const showResult = (e) => {
  e.preventDefault();

  if (isUser()) {
    location.replace("welcome.html");
  } else {
    alert("아이디 또는 비밀번호를 다시 확인해주세요.");
  }
};

$userEmail.addEventListener("input", chkReg);
$userPassword.addEventListener("input", chkReg);
$btnLogin.addEventListener("click", showResult);
