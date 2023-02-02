const { Navigator } = require("node-navigator");
const navigator = new Navigator();
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

let weatherData = {
    coord: { lon: 12.5828, lat: 56.0322 },
    weather: [
        {
            id: 802,
            main: 'Clouds',
            description: 'scattered clouds',
            icon: '03d'
        }
    ],
    base: 'stations',
    main: {
        temp: 274.45,
        feels_like: 270.42,
        temp_min: 273.01,
        temp_max: 275.9,
        pressure: 1017,
        humidity: 78
    },
    visibility: 10000,
    wind: { speed: 4.06, deg: 328, gust: 6.35 },
    clouds: { all: 38 },
    dt: 1675350561,
    sys: {
        type: 2,
        id: 2008736,
        country: 'DK',
        sunrise: 1675321420,
        sunset: 1675352573
    },
    timezone: 3600,
    id: 2620473,
    name: 'Elsinore',
    cod: 200
}


function getLocation(callback: CallableFunction) {
    navigator.geolocation.getCurrentPosition(function (position) {
        callback(position);
    });
}

function getWeather(coords, callback: CallableFunction) {
    const apiKey = "1c8a45380c7f3a19af9ce55c317eb917";
    const url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + coords.latitude + '&lon=' + coords.longitude + '&apiKey=' + apiKey
    const req = new XMLHttpRequest();
    req.open('GET', url);
    req.onload = function () {
        if (req.status == 200) {
            callback(JSON.parse(req.responseText));
        } else {
            callback(new Error(req.statusText));
        }
    };
    req.send();
}


getLocation(function (coords) {
    getWeather(coords, function (weather) {
        console.log(weather);
    });
});

export { }