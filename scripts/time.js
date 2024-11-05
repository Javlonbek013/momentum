function time(){
const timeElement = document.querySelector('.time');
const dateElement = document.querySelector('.date');

const currentDate = new Date();
const options = {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
};
const date = currentDate.toLocaleDateString('en-UZ', options);
const time = currentDate.toLocaleTimeString('uz-UZ');

timeElement.textContent = time;
dateElement.textContent = date;
};

export { time };