function setAudio(arr, idx) {
  if (!Array.isArray(arr)) return;
  const target = arr[idx];
  arr.forEach((i) => i.stop());
  if (idx === 1 || idx === 3) {
    target.volume = 0.3;
  }
  target.play();
}

export default setAudio;
