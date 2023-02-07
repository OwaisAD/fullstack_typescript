// const { Navigator } = require("node-navigator");
import { Navigator } from 'node-navigator';
import axios from 'axios'
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const navigator = new Navigator()

function getLocation() {
    try {
        return new Promise(async function (resolve, reject) { navigator.geolocation.getCurrentPosition(function (pos) { resolve(pos) }) });
    } catch (e) {
        console.log("error", e)
    }
}

async function getWeather(coords: any) {
    const apiKey = "1c8a45380c7f3a19af9ce55c317eb917";
    try {
        const url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + coords.latitude + '&lon=' + coords.longitude + '&apiKey=' + apiKey

        const response = await axios.get(url)
        const data: any = response
        if (data.status == 200) {
            return data.data;
        } else {
            return new Error(data.statusText);
        }
    } catch (e) {
        console.log(e)
    }
}

async function some() {
    const position = await getLocation()
    console.log(position);
    const data = await getWeather(position)
    console.log(data)
}

some()




export { }