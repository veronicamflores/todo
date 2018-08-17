export default class Todo{
    constructor(data){
        this.completed = data.completed
        this._id = data._id
        this.description = data.description
        this.user = data.user
    }
}