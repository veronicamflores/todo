import QuoteService from "./quote-service.js";

let quoteService = new QuoteService

function drawQuote(quotes){
	document.getElementById('quote').innerHTML = `
	<div>
	<h3>${quotes.quote}</h3>
	<p>${quotes.author}</p>
	</div>
	`
}

export default class QuoteController {
	constructor() {
		this.getQuote(drawQuote)
	}

	getQuote() {
		quoteService.getQuote(drawQuote)
	}
}