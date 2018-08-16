import Image from "../../models/Image.js";

const url = '//bcw-getter.herokuapp.com/?url=';
const url2 = 'http://www.splashbase.co/api/v1/images/random'
const apiUrl = url + encodeURIComponent(url2);


const imgApi = axios.create({
	baseURL: apiUrl,
	timeout: 3000
});

export default class ImageService {
	getImage(draw) {
		// ^^^^^^^ How do you call this function?
		imgApi.get()
		.then(res => {
				let image = new Image(res.data)
			draw(image)
		})
	}
}