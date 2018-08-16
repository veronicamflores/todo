import WeatherController from "./components/weather/weather-controller.js";
import QuoteController from "./components/quote/quote-controller.js";

// HEY WHERE ARE ALL OF YOUR CONTROLLERS??
class app {
  constructor() {
    this.controllers = {
      weatherController: new WeatherController,
      quoteController: new QuoteController
    }
  }
}

window.app = new app()  