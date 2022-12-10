const speed = document.querySelector('.speed');
const bar = speed.querySelector('.speed-bar');
const video = document.querySelector('.flex');

const handleMove = (e) => {
    const y = e.pageY - e.currentTarget.offsetTop;
    // console.log(y);
    const percent = y / e.currentTarget.offsetHeight;
    const min = 0.4;
    const max = 4;
    const height = Math.round(percent *  100) + '%'
    // console.log(height);
    const playbackRate = percent * (max - min) + min;
    console.log(playbackRate);
    bar.style.height = height
    bar.textContent = playbackRate.toFixed(2) + 'x';
    video.playbackRate = playbackRate;
}

speed.addEventListener('mousemove', handleMove);