function setNameText({ name = "짜장" }, $nickName) {
  gsap.fromTo($nickName, { opacity: 0, x: -30 }, { opacity: 1, x: 0 });
  $nickName.textContent = name;
}

export default setNameText;
