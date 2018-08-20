import Todo from "../../models/Todo.js";

const todoApi = axios.create({
	baseURL: 'https://bcw-sandbox.herokuapp.com/api/VERONICA/todos/',
	timeout: 3000
});

function logError(e) {
	console.log(e)
}


let todoList = []

export default class TodoService {

	getTodos(callback) {
		console.log("Getting the Todo List")
		todoApi.get('')
			.then((res) => { // <-- WHY IS THIS IMPORTANT????
				let todos = res.data.data.map(rawT => new Todo(rawT))
				callback(todos)
			})
			.catch(logError)
	}

	addTodo(todo, callback) {
		console.log(todo)
		// WHAT IS THIS FOR???
		todoApi.post('', todo)
			.then(res=> { // <-- WHAT DO YOU DO AFTER CREATING A NEW TODO?
				this.getTodos(callback)
			})
			.catch(logError)
	} 

	toggleTodoStatus(todoId, callback) {

		let todo = {
		}

		//STEP 2: Change the completed flag to the opposite of what is is **HINT** todo.completed = !todo.completed
		todoApi.put(todoId, todo)
  			.then(function (res) {
				//DO YOU WANT TO DO ANYTHING WITH THIS?
				this.getTodos(callback)
			})
			.catch(logError)
	}

	removeTodo(todoId, callback) {
		// Umm this one is on you to write.... The method is a DELETE
		todoApi.delete(todoId)
		.then(res =>{
			this.getTodos(callback)
		})                                                                                       
	}

}