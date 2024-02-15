function setNameText(name = "짜장", target) {
  gsap.fromTo(target, { opacity: 0, x: -30 }, { opacity: 1, x: 0 });
  target.textContent = name;
}

export default setNameText;
