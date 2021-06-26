import './sass/main.scss';

const colors = ['#FFFFFF', '#2196F3', '#4CAF50', '#FF9800', '#009688', '#795548'];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const startButton = document.querySelector('button[data-action="start"]');
const stopButton = document.querySelector('button[data-action="stop"]');

let intervalId;

startButton.addEventListener('click', () => {
  intervalId = setInterval(() => {
    const randomColorIndex = randomIntegerFromInterval(0, colors.length - 1);
    document.body.style.backgroundColor = colors[randomColorIndex];
  }, 1000);
  startButton.disabled = true;
});

stopButton.addEventListener('click', () => {
  clearInterval(intervalId);
  startButton.disabled = false;
});
