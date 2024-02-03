const user = {
  id: "asd@naver.com",
  pw: "spdlqj123!@",
  name: "심선범",
};
const userEmail = document.querySelector("#userEmail");
const userPassword = document.querySelector("#userPassword");
const btnLogin = document.querySelector(".btn-login");

/*

1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리
4. 로그인 버튼을 클릭시 조건처리

- 아이디/비번 인풋에 입력하면 정규식 확인
  -> 정규식에 합당하지 않으면, 에러메시지 노출 (input.is--invalid)
  -> 정규식에 합당하면, 에러메시지 노출 안함 (input)

- 로그인 버튼 눌렀을 때 
  -> 아이디/비번 user와 일치하면, 로그인 성공(얼럿? 모달?)
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
  let isEmail = true;
  _this.type === "email" ? (isEmail = true) : (isEmail = false);

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
  let chkUser = false;

  userEmail.value === user.id ? (chkUser = true) : (chkUser = false);
  userPassword.value === user.pw ? (chkUser = true) : (chkUser = false);

  return chkUser;
};

const showResult = (e) => {
  e.preventDefault();
  let message = isUser()
    ? `${user.name}님, 환영합니다.`
    : `아이디 또는 비밀번호를 다시 확인해주세요.`;
  alert(message);
};

userEmail.addEventListener("input", chkReg);
userPassword.addEventListener("input", chkReg);
btnLogin.addEventListener("click", showResult);
