export function weather() {
    const input = document.querySelector('.weather .city');
    const icon = document.querySelector('.weather-icon');
    const error = document.querySelector('.weather-error');
    const temperature = document.querySelector('.temperature');
    const wind = document.querySelector('.wind');
    const humidity = document.querySelector('.humidity');

    function initail() {
        const city = getFromLocalStorage('city') || 'Almalyk';

        if (city) {
            setToLocalStorage('city', city);
        }

        input.value = city;
        setToLocalStorageFromInput(input);
        fetchWeather(city);  
    }

    initail();
}

function setToLocalStorage(key, value) {
    localStorage.setItem(key, value);
}

function getFromLocalStorage(key) {
    return localStorage.getItem(key);
}

function setToLocalStorageFromInput(inp) {
    inp.addEventListener('input', async (e) => {
        const city = e.target.value;
        setToLocalStorage('city', city);
        fetchWeather(city); 
    });
}

async function fetchWeather(city) {
    const url = getWeatherURL(city);
    const data = await getData(url);
    renderWeather(data);
}

function renderWeather(data) {
    const icon = document.querySelector('.weather-icon');
    const error = document.querySelector('.weather-error');
    const temperature = document.querySelector('.temperature');
    const wind = document.querySelector('.wind');
    const humidity = document.querySelector('.humidity');

    if (data.cod === '404') {
        error.textContent = data.message;
        temperature.textContent = '';
        wind.textContent = '';
        humidity.textContent = '';
        icon.className = 'weather-icon';  
        return;
    } else {
        error.textContent = ''; 
    }

    const iconClass = 'owf owf-' + data.weather[0].id;
    icon.className = 'weather-icon ' + iconClass; 
    temperature.textContent = Math.round(data.main.temp - 273.15) + '° C';
    wind.textContent = data.wind.speed + ' m/s';
    humidity.textContent = 'Humidity: ' + data.main.humidity + '%';
}

async function getData(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}


function getWeatherURL(city) {
    return `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=75a45f3319fa32f4db2033d434631e94`;
}
