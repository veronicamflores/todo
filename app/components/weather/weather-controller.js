import WeatherService from "./weather-service.js";

var weatherService = new WeatherService()

function drawWeather(weather){
	let temperature = Math.floor(9/5*(weather.temp - 273)+32)
	document.getElementById('weather').innerHTML = `
	<div>
	<h1>${temperature}&#176;F</h1>
	</div>
	`
}

export default class WeatherController {

	constructor() {
		//this will fire off get weather right away
		weatherService.getWeather(drawWeather)
	}
	getWeather() {
		weatherService.getWeather(drawWeather)
	}
}