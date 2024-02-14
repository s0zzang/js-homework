/* 

1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리

*/

const nav = document.querySelector("nav");
const navList = [...nav.querySelectorAll("li")];
const visual = document.querySelector(".visual img");
const nickName = document.querySelector(".nickName");

// 재사용성

function setChangeName(target, index) {
  if (typeof target === "string") target = document.querySelector(target);
  gsap.fromTo(target, { opacity: 0, x: -30 }, { opacity: 1, x: 0 });
  target.textContent = data[index - 1].name;
}

function setChangeImage(target, index) {
  if (!target.src) return;
  gsap.fromTo(target, { opacity: 0, x: 30 }, { opacity: 1, x: 0 });
  target.src = `./assets/${data[index - 1].name.toLowerCase()}.jpeg`;
  target.alt = data[index - 1].alt;
}

function setChangeBgColor({ target, colorA, colorB }) {
  if (typeof target === "string") target = document.querySelector(target);
  if (!colorB) {
    target.style.background = colorA;
    return;
  }

  gsap.to(target, {
    backgroundImage: `linear-gradient(to bottom,${colorA},${colorB})`,
    duration: 1,
  });
  // target.style.background = `linear-gradient(to bottom,${colorA},${colorB})`
}

const audioList = [
  new AudioPlayer(`./assets/audio/ember.m4a`),
  new AudioPlayer(`./assets/audio/wade.m4a`),
  new AudioPlayer(`./assets/audio/clod.m4a`),
  new AudioPlayer(`./assets/audio/gale.m4a`),
];

function audio(arr, index) {
  if (!Array.isArray(arr)) return;
  const target = arr[index - 1];
  arr.forEach((s) => s.stop());
  if (index === "2" || index === "4") {
    target.volume = 0.3;
  }
  target.play();
}

function handleNav(e) {
  const target = e.target.closest("li");
  if (!target) return;
  const index = target.dataset.index;
  setChangeName(".nickName", index);
  setChangeImage(visual, index);
  // 매개변수 많아짐. 가독성 ⬇
  // 매개변수 => 객체
  setChangeBgColor({
    target: "body",
    colorA: data[index - 1].color[0],
    colorB: data[index - 1].color[1],
  });
  audio(audioList, index);
  navList.forEach((li) => li.classList.remove("is-active"));
  target.classList.add("is-active");
}

nav.addEventListener("click", handleNav);
