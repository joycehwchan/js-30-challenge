const inputs = document.querySelectorAll(".controls input");

const handleUpdate = (e) => {
  // console.log(this.value);
  // console.log(this.dataset);
  const suffix = e.currentTarget.dataset.sizing || ""; // => 'px' or ''
  // console.log(this.name) => `this` => `input`
  document.documentElement.style.setProperty(
    `--${e.currentTarget.name}`,
    e.currentTarget.value + suffix
  );
};

inputs.forEach((input) => input.addEventListener("change", handleUpdate));
inputs.forEach((input) => input.addEventListener("mousemove", handleUpdate));
