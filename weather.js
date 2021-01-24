const COORDS = "coords";

function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position) {
    const latitude = position.coords.latitude,
        longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude: longitude
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
        // getWeather();
    }
}

function init() {
    loadCoords();
}

init();