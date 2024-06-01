const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const myBtn = document.getElementById("myBtn");
const weatherApiKey = "b1b5193998a68e8d82f4763b3cb8236c";
const timezoneApiKey = "1P2TVWPTA8EK";

let city, weatherData;
weatherForm.addEventListener("submit", async event => {
    event.preventDefault();
    city = cityInput.value;

    if(city){
        try {
            weatherData = await getWeatherData(city);
            displayWeatherInfo(weatherData);
        } catch (error) {
            console.error(error);
            displayError(error);
        }
    }else{
        displayError("Please enter a city");
    }
});
let apiURL, response;
async function getWeatherData(city) {
    apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherApiKey}`;
    response = await fetch(apiURL);
    if (!response.ok) {
        throw new Error("Could not fetch weather data");
    } 
    return (response.json());
}
async function displayWeatherInfo(data) {
    const {coord: {lat, lon},
        name: city, 
        main: {temp, humidity}, 
        weather: [{description, id}]} = data;
    
    card.textContent = "";
    card.style.display = "flex";

    const cityDisplay = document.createElement("h1");
    cityDisplay.textContent = city;
    cityDisplay.classList.add("cityDisplay");
    card.appendChild(cityDisplay);


    const temperatureDisplay = document.createElement("p");
    temperatureDisplay.textContent = `${(Math.round((temp - 273.15)*10)/10).toFixed(1)} °C`;
    temperatureDisplay.classList.add("temperatureDisplay");
    card.appendChild(temperatureDisplay);

    const humidityDisplay = document.createElement("p");
    humidityDisplay.classList.add("humidityDisplay");
    humidityDisplay.textContent = `Humidity: ${humidity}%`;
    card.appendChild(humidityDisplay);

    const descriptionDisplay = document.createElement("p");
    descriptionDisplay.textContent = description.charAt(0).toUpperCase() + description.slice(1, description.length);
    descriptionDisplay.classList.add("descriptionDisplay");
    card.appendChild(descriptionDisplay);

    const weatherEmoji = document.createElement("p");
    weatherEmoji.textContent = await getWeatherEmoji(id, lat, lon);
    weatherEmoji.classList.add("weatherEmoji");
    card.appendChild(weatherEmoji);
    
        
    card.style.animation = "appear 0.5s";
}
async function getWeatherEmoji(weatherId, latitude, longitude) {
    if(weatherId <= 232) return "⛈";
    else if(weatherId <= 321) return "🌧";
    else if(weatherId <= 531) {
        if(weatherId == 511) return "❄";
        else return "🌦";
    }else if(weatherId <= 622) return "❄";
    else if(weatherId <= 781) return "🌫";
    else if(weatherId == 800){
        if(await isDayTime(latitude, longitude)) return "☀";
        else return "🌑";
    } 
    else if(weatherId <= 804) return "☁";
    else throw Error("Not existing weather ID")
}
function displayError(message) {
    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay");
    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(errorDisplay);
    card.style.animation = "appear 0.5s";

}
let timezone, data, date;
async function isDayTime(latitude, longitude) {
    timezone = await fetch(`http://api.timezonedb.com/v2.1/get-time-zone?key=${timezoneApiKey}&format=json&by=position&lat=${latitude}&lng=${longitude}`);
    if(!timezone.ok){
        throw Error("Couldn't fetch current time at that location");
    }
    data = await timezone.json();
    date = new Date(data.timestamp*1000);
    console.log(date.getHours()-2);
    if(date.getHours() - 2 > 6 && date.getHours() - 2 < 20) return true;
    return false
}