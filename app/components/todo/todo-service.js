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

	getTodos(draw) {
		console.log("Getting the Todo List")
		todoApi.get('')
			.then((res) => { // <-- WHY IS THIS IMPORTANT????
				let todos = res.data.data.map(rawT => new Todo(rawT))
				draw(todos)
			})
			.catch(logError)
	}

	addTodo(todo, draw) {
		// WHAT IS THIS FOR???
		todoApi.post('', todo)
			.then(function (res) { // <-- WHAT DO YOU DO AFTER CREATING A NEW TODO?
				this.getTodos(draw)
				console.log(res)
			})
			.catch(logError)
	}

	toggleTodoStatus(todoId) {
		// MAKE SURE WE THINK THIS ONE THROUGH
		//STEP 1: Find the todo by its index **HINT** todoList

		var todo = {} ///MODIFY THIS LINE

		//STEP 2: Change the completed flag to the opposite of what is is **HINT** todo.completed = !todo.completed
		todoApi.put(todoId, todo)
			.then(function (res) {
				//DO YOU WANT TO DO ANYTHING WITH THIS?
			})
			.catch(logError)
	}

	removeTodo(todoId, draw) {
		// Umm this one is on you to write.... The method is a DELETE
		todoApi.delete(id)
		.then(res =>{
			this.getTodos(draw)
		})
	}

}