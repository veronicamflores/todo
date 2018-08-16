import WeatherService from "./weather-service.js";

var weatherService = new WeatherService()

function drawWeather(weather){
	document.getElementById('weather').innerHTML = `
	<div>
	<h1>${weather.temp}</h1>
	<span>${weather.icon}</span>
	</div>
	`
}

export default class WeatherController {

	constructor() {
		//this will fire off get weather right away
		this.getWeather()
	}
	getWeather() {
		weatherService.getWeather(weather => {
			console.log(weather);
			//What can you do with this weather object?
		})
	}
}