import ImageService from "./image-service.js";

//Your ImageService is a global class what can you do here to instantiate it?

let imageService = new ImageService

function drawImage(images){
    document.getElementById('body').style.backgroundImage = `url('${images.url}')`
}

export default class ImageController {
    constructor(){
        imageService.getImage(drawImage)
    }
    getImage(){
        imageService.getImage(drawImage)
    }
}