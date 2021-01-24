const header = document.querySelector("header"),
    weatherContainer = header.querySelector(".js-weather");

const API_KEY = "d24a46f71a64d072d08f9951f8ad41cd";
const COORDS = "coords";

function getWeather(lat, lon) {
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    ).then(function(response) {
        return response.json();
    }).then(function(json) {
       const temperature = json.main.temp;
       const place = json.name;
       weatherContainer.innerText = `${place} ${temperature}℃`;
    })
}

function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position) {
    const latitude = position.coords.latitude,
        longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
}

function handleGeoFail() {
    console.log("Can't access to your location");
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoFail);
}

function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS);
    if (loadedCoords === null) {
        askForCoords();
    } else {
        const parsedCoords = JSON.parse(loadedCoords),
            latitude = parsedCoords.latitude,
            longitude = parsedCoords.longitude;
        getWeather(latitude, longitude);
    }
}

function init() {
    loadCoords();
}

init();