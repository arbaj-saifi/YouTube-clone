const menuBtn = document.getElementById("menu-toggle");
const sidebar = document.getElementById("sidebar");
let isexpanded = false;

menuBtn.addEventListener("click", () => {
  isexpanded = !isexpanded;

  if (isexpanded) {
    sidebar.classList.add("open");
    sidebar.classList.remove("coll");
  } else {
    sidebar.classList.remove("open");
    sidebar.classList.add("coll");
  }
});

const buttons = document.querySelectorAll(".buttons button");
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    buttons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
  });
});

document.querySelectorAll(".video-box").forEach((box) => {
  const video = box.querySelector("video");
  const progressBar = box.querySelector(".progress-bar");
  const durationLabel = box.querySelector(".duration-label");
  const muteBtn = box.querySelector(".mute-toggle");

  box.addEventListener("mouseenter", () => video.play());
  box.addEventListener("mouseleave", () => {
    video.pause();
    video.currentTime = 0;
    video.load();
  });
  video.addEventListener("loadedmetadata", () => {
    const mins = Math.floor(video.duration / 60);
    const secs = Math.floor(video.duration % 60);
    durationLabel.textContent = `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  });
  video.addEventListener("timeupdate", () => {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.width = percent + "%";
  });

  // Mute toggle
  muteBtn.addEventListener("click", () => {
    video.muted = !video.muted;
    muteBtn.textContent = video.muted ? "🔇" : "🔊";
  });
});

const videos = document.querySelectorAll("video");

videos.forEach((video) => {
  video.addEventListener("mouseenter", () => {
    video.play();
  });

  video.addEventListener("mouseleave", () => {
    video.pause();
    video.currentTime = 0;
    video.load();
  });
});
