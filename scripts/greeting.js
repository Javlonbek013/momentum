import { timeOfDay } from "./utils/timeOfday.js";
export function greeting(){
    const greetingElement = document.querySelector('.greeting');
    greetingElement.textContent = 'Good' + timeOfDay();

};