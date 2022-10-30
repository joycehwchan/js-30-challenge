const secondHand = document.querySelector(".second-hand");
const minsHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  console.log(`second: ${seconds}`);
  const secondsDegree = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegree}deg)`;

  const mins = now.getMinutes();
  console.log(`min: ${mins}`);
  const minutesDegrees = (mins / 60) * 360 + 90;
  minsHand.style.transform = `rotate(${minutesDegrees}deg)`;

  const hours = now.getHours();
  console.log(`hour: ${hours}`);
  const hoursDegrees = (hours / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);
