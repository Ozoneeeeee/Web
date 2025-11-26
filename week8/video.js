const video = document.getElementById('myVideo');
const playBtn = document.getElementById('playBtn');

// Play video when button is clicked
playBtn.addEventListener('mouseenter', () => {
  video.play();
});
video.addEventListener('mouseenter', () => {
  video.play();
});
video.addEventListener('mouseleave', () => {
  video.pause();
});