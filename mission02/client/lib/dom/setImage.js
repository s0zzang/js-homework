function setImage({ alt = "엘리멘탈 포스터" }, $clicked, $targetImg) {
  const beforeImgSrc = $targetImg.src.split("/");
  const afterImgSrc = $clicked.querySelector("img").src.split("/");
  const afterImgName = afterImgSrc[afterImgSrc.length - 1];

  beforeImgSrc.pop();
  beforeImgSrc.push(afterImgName);

  const changeSrc = beforeImgSrc.join("/");
  $targetImg.src = changeSrc;
  $targetImg.alt = alt;
}

export default setImage;
