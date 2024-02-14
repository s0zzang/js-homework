function setBgColor([colorA, colorB = "#000"]) {
  gsap.to(document.body, {
    backgroundImage: `linear-gradient(to bottom, ${colorA}, ${colorB})`,
    duration: 1,
  });
  // document.body.style.background = `linear-gradient(to bottom, ${colorA}, ${colorB})`;
}

export default setBgColor;
