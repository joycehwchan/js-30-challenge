const triggers = document.querySelectorAll(".cool > li");
const background = document.querySelector(".dropdownBackground");
const nav = document.querySelector(".top");

const handleEnter = (e) => {
  /* apply 2 separate classes for animation */
  e.target.classList.add("trigger-enter");

  // setTimeout(() => e.target.classList.add("trigger-enter-active"), 150);

  // add '.trigger-enter-active' only after '.trigger-enter'

  // setTimeout(() => {
  //   if (e.target.classList.contains("trigger-enter"))
  //     e.target.classList.add("trigger-enter-active");
  // }, 150);

  // shorthand
  setTimeout(
    () =>
      e.target.classList.contains("trigger-enter") &&
      e.target.classList.add("trigger-enter-active"),
    150
  );

  background.classList.add("open");

  const dropdown = e.target.querySelector(".dropdown");
  // console.log(dropdown);

  const dropdownCoords = dropdown.getBoundingClientRect();
  const navCoords = nav.getBoundingClientRect();
  const coords = {
    height: dropdownCoords.height,
    width: dropdownCoords.width,
    top: dropdownCoords.top - navCoords.top, // offset with top nav
    left: dropdownCoords.left,
  };

  background.style.setProperty("width", `${coords.width}px`);
  background.style.setProperty("height", `${coords.height}px`);
  background.style.setProperty(
    "transform",
    `translate(${coords.left}px, ${coords.top}px)`
  );
};

const handleLeave = (e) => {
  e.target.classList.remove("trigger-enter", "trigger-enter-active");
  background.classList.remove("open");
};

triggers.forEach((trigger) =>
  trigger.addEventListener("mouseenter", (e) => handleEnter(e))
);

triggers.forEach((trigger) =>
  trigger.addEventListener("mouseleave", (e) => handleLeave(e))
);
