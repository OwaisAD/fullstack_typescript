"use strict";
exports.__esModule = true;
var Navigator = require("node-navigator").Navigator;
var navigator = new Navigator();
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
function getLocation(callback) {
    navigator.geolocation.getCurrentPosition(function (position) {
        callback(position);
    });
}
function getWeather(coords, callback) {
    var apiKey = "1c8a45380c7f3a19af9ce55c317eb917";
    var url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + coords.latitude + '&lon=' + coords.longitude + '&apiKey=' + apiKey;
    var req = new XMLHttpRequest();
    req.open('GET', url);
    req.onload = function () {
        if (req.status == 200) {
            callback(JSON.parse(req.responseText));
        }
        else {
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
