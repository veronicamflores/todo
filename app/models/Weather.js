export default class Weather{
    constructor(data){
        this.id = data.id
        this.icon = data.icon
        this.temp = data.temp
    }
}