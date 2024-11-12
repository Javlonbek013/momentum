import { timeOfDay } from "./utils/timeOfday.js";

export function slideBg() {
    const slidePrev = document.querySelector('.slide-prev');
    const slideNext = document.querySelector('.slide-next');
    const body = document.querySelector('body');
    let num = 1;

    slideNext.addEventListener('click', () => {
        if (num >= 20) num = 0;

        num += 1;
        console.log(num);

        const number = addZero(num);
        const url = makeUrl(number)
        console.log(url);
        
        changeBG(url)
    })
    slidePrev.addEventListener('click', () => {
        num -= 1;

        if (num <= 0) num = 20;
        console.log(num);

        const number = addZero(num);
        const url = makeUrl(number)
        console.log(url);
        
        changeBG(url)
    })
    function changeBG(url) {
        body.style.background = `url(${url})`;
    }
    function addZero(number) {
        if (number <= 9 && number >= 0) {
            return '0' + number;
        }
        return number;
    }

    function makeUrl(number) {
        const day = timeOfDay()
        return `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${day}/${number}.jpg`

    };
}
