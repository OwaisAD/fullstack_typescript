const { Navigator } = require("node-navigator");
const navigator = new Navigator();
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function getLocation() {
    return new Promise(function (resolve, reject) {
        try {
            navigator.geolocation.getCurrentPosition(function (position) {
                resolve(position);
            });
        } catch (e) {
            reject(e);
        }
    });

    // navigator.geolocation.getCurrentPosition(function (position) {
    //     callback(position);
    // });
}

function getWeather(coords) {
    const apiKey = "1c8a45380c7f3a19af9ce55c317eb917";
    return new Promise((resolve, reject) => {
        try {
            const url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + coords.latitude + '&lon=' + coords.longitude + '&apiKey=' + apiKey
            const req = new XMLHttpRequest();
            req.open('GET', url);
            req.onload = function () {
                if (req.status == 200) {
                    resolve(JSON.parse(req.responseText));
                } else {
                    reject(new Error(req.statusText));
                }
            };
            req.send();
        } catch (e) {
            reject(e)
        }
    })

    // const apiKey = "1c8a45380c7f3a19af9ce55c317eb917";
    // const url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + coords.latitude + '&lon=' + coords.longitude + '&apiKey=' + apiKey
    // const req = new XMLHttpRequest();
    // req.open('GET', url);
    // req.onload = function () {
    //     if (req.status == 200) {
    //         callback(JSON.parse(req.responseText));
    //     } else {
    //         callback(new Error(req.statusText));
    //     }
    // };
    // req.send();
}


// getLocation(function (coords) {
//     getWeather(coords, function (weather) {
//         console.log(weather);
//     });
// });
getLocation()
    .then((position) => getWeather(position))
    .then(res => console.log(res))
    .catch(e => console.log(e))

export { }