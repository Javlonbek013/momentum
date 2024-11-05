export function input() { 
    const input = document.querySelector('.greeting-container input');
    input.addEventListener('input', (e) =>{
        localStorage.setItem('test',e.target.value);
    });
    input.value = localStorage.getItem('test');
 }