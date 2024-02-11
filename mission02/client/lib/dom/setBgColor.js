function setBgColor([colorA, colorB = "#000"]) {
  document.body.style.background = `linear-gradient(to bottom, ${colorA}, ${colorB})`;
}

export default setBgColor;
