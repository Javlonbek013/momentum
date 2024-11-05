export function greeting () { 
    const greetingElement = document.querySelector(".greeting");

    const currentDate = new Date();
    const hour = currentDate.getHours();

    greetingElement.textContent = showGreeting(hour);

 }
 
 function showGreeting(hour) {
    if (hour >= 6 && hour < 12) {
        return "Good morning!";
    } else if (hour >= 12 && hour < 18) {
        return "Good afternoon!";
    } else if(hour >= 18 && hour < 24) {
        return "Good evening!";
    } else {
        return "Good night!";
    }

 }
 