function setBgColor([colorA, colorB = "#000"], target) {
  gsap.to(target, {
    backgroundImage: `linear-gradient(to bottom, ${colorA}, ${colorB})`,
    duration: 1,
  });
}

export default setBgColor;
