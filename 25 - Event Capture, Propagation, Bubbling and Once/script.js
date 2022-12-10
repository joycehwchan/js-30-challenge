const divs = document.querySelectorAll('div');
const button = document.querySelector('button');

const logText = (e) => {
  console.log(e.currentTarget.classList.value);
  e.stopPropagation(); // stop bubbling!
  // console.log(this);
}

divs.forEach(div => div.addEventListener('click', logText, {
  capture: false,
  // capture: true,
  // once: true
}));

button.addEventListener('click', () => {
  console.log('Click!!!');
}, {
  once: true
});

// 👇 once: true
// button.addEventListener('clicl', () => {
//   console.log('Click!!!');
// }, {
//   once: true
// });
