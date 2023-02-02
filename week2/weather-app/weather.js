"use strict";
exports.__esModule = true;
var Navigator = require("node-navigator").Navigator;
var navigator = new Navigator();
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
function getLocation() {
    return new Promise(function (resolve, reject) {
        try {
            navigator.geolocation.getCurrentPosition(function (position) {
                resolve(position);
            });
        }
        catch (e) {
            reject(e);
        }
    });
    // navigator.geolocation.getCurrentPosition(function (position) {
    //     callback(position);
    // });
}
function getWeather(coords) {
    var apiKey = "1c8a45380c7f3a19af9ce55c317eb917";
    return new Promise(function (resolve, reject) {
        try {
            var url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + coords.latitude + '&lon=' + coords.longitude + '&apiKey=' + apiKey;
            var req_1 = new XMLHttpRequest();
            req_1.open('GET', url);
            req_1.onload = function () {
                if (req_1.status == 200) {
                    resolve(JSON.parse(req_1.responseText));
                }
                else {
                    reject(new Error(req_1.statusText));
                }
            };
            req_1.send();
        }
        catch (e) {
            reject(e);
        }
    });
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
    .then(function (position) { return getWeather(position); })
    .then(function (res) { return console.log(res); })["catch"](function (e) { return console.log(e); });
