import { data, setBgColor, setImage, setNameText } from "../lib/index.js";

/* 

1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리

- 클릭 이벤트 발생하면 이벤트 위임으로 타깃(li) 설정
- 설정한 타깃에 클래스 추가 (is-active)
- 설정한 타깃에 BgColor 설정
- 설정한 타깃에 BgImage 설정
- 설정한 타깃에 BgName 설정

*/

const $nav = document.querySelector(".nav");
const $visualImg = document.querySelector(".visual img");
const $nickName = document.querySelector(".nickName");

function handleNavClick(e) {
  let target = e.target.closest("li");
  if (!target) return;

  const siblings = target.parentElement.children;
  for (const sibling of siblings) sibling.classList.remove("is-active");
  target.classList.add("is-active");

  const targetData = data[target.dataset.index - 1];
  setBgColor(targetData.color, document.body);
  setImage(targetData, target, $visualImg);
  setNameText(targetData.name, $nickName);
}

$nav.addEventListener("click", handleNavClick);
