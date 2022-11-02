const PlaySound = (e) => {
  const audio = document.querySelector(`audio[data-key=${e.key}]`);
  const key = document.querySelector(`.key[data-key=${e.key}]`);
  // console.log(e.key);
  // console.log(e.keyCode);
  // console.log(audio);
  // console.log(key);
  if (!audio) return; // stop function
  audio.currentTime = 0; // rewind auto to the start
  audio.play();
  key.classList.add("playing");
};

const removeTransition = (e) => {
  if (e.propertyName !== "transform") return; // skip if not a transform
  console.log(e.propertyName);
  e.currentTarget.classList.remove("playing"); // `this` => `key` that this function is being called on
};

const keys = document.querySelectorAll(".key");
// console.log(keys);
// 🚫 keys.addEventListener('transitionend', ...) 🚫
// 👉 Cannot listen on Node List!
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", PlaySound);
