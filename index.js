const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const refs = {
    bodyColor: document.querySelector('body'),
    startBtn: document.querySelector('[data-action="start"]'),
    stopBtn: document.querySelector('[data-action="stop"]'), 
};

// -------//---------------
refs.startBtn.addEventListener('click', start);
refs.stopBtn.addEventListener('click', stop);


function changeBackground(color) {
  refs.bodyColor.style.backgroundColor = color;
}
let intervalColorChange = undefined;
function start() {
  intervalColorChange = setInterval(randomNumber => {
    randomNumber = randomIntegerFromInterval(0, 5);
    changeBackground(colors[randomNumber]);
  }, 1000);

}
function stop() {
  clearInterval(intervalColorChange);
}