/* Select elements */
const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipBtns = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");

// Functions
const togglePlay = () => {
  // video[video.paused ? "play" : "pause"]();
  video.paused ? video.play() : video.pause();
};

const updateButton = () => {
  const icon = video.paused ? "►" : "❚ ❚";
  toggle.textContent = icon;
};

const skip = (btn) => {
  video.currentTime += parseFloat(btn.dataset.skip);
};

const handleRangeUpdate = (range) => {
  // volume or playbackRate = value
  video[range.name] = range.value;
};

const handleProgress = () => {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
};

const scrub = (e) => {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
};

// Event Listeners
video.addEventListener("click", togglePlay);
toggle.addEventListener("click", togglePlay);

video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);

skipBtns.forEach((btn) => btn.addEventListener("click", () => skip(btn)));

ranges.forEach((range) =>
  range.addEventListener("change", () => handleRangeUpdate(range))
);
ranges.forEach((range) =>
  range.addEventListener("mousemove", () => handleRangeUpdate(range))
);

video.addEventListener("timeupdate", handleProgress);

let mousedown = false;
progress.addEventListener("click", scrub);
progress.addEventListener("mousedown", () => (mousedown = true));
progress.addEventListener("mouseup", () => (mousedown = false));
progress.addEventListener("mousemove", (e) => mousedown && scrub(e));
