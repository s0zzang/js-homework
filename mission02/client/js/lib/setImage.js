function setImage(node, { alt = "엘리멘탈 포스터" }, $visualImg) {
  const beforeImgSrc = $visualImg.src.split("/");
  const afterImgSrc = node.querySelector("img").src.split("/");
  const afterImgName = afterImgSrc[afterImgSrc.length - 1];

  beforeImgSrc.pop();
  beforeImgSrc.push(afterImgName);

  const changeSrc = beforeImgSrc.join("/");
  $visualImg.src = changeSrc;
  $visualImg.alt = alt;
}

export default setImage;
