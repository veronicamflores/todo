import Quote from "../../models/Quote.js";

let url = '//bcw-getter.herokuapp.com/?url=';
let url2 = 'http://quotesondesign.com/api/3.0/api-3.0.json';
let apiUrl = url + encodeURIComponent(url2);
//Do Not Edit above we have to go through the bcw-getter to access this api


const quoteApi = axios.create({
	baseURL: apiUrl,
	timeout: 3000
});


export default class QuoteService {
	getQuote(draw) {
		console.log('looking for some good quotes')
		quoteApi.get()
		.then((res) => {
			let quote = new Quote(res.data)
			draw(quote)
		})
	}
}