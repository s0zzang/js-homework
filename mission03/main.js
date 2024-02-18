const $wrap = document.querySelector(".wrap");
const $swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  loop: true,
  speed: 100,
  autoplay: {
    delay: 0,
  },
  effect: "flip",
});

function handleSwiperStop(e) {
  const btn = e.target.closest("button");
  if (!btn) return;
  const target = btn.closest(".swiper-container");

  if (btn.dataset.state === "play") {
    btn.dataset.state = "stop";
    btn.textContent = "또 돌릴까? 💞";
    target.swiper.autoplay.stop();
  } else {
    btn.dataset.state = "play";
    btn.textContent = "STOP ✋ !";
    target.swiper.autoplay.start();
  }

  showFruition();
}

function showFruition() {
  const btn01State = $wrap.querySelector(".first").dataset.state;
  const btn02State = $wrap.querySelector(".second").dataset.state;
  const $heart = $wrap.querySelector(".heart");

  if (btn01State === "stop" && btn02State === "stop") {
    $heart.classList.add("is-active");
  } else {
    $heart.classList.remove("is-active");
  }

  showFruition();
}

$wrap.addEventListener("click", handleSwiperStop);
