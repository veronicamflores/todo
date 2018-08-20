import TodoService from "./todo-service.js";



var todoService = new TodoService

// Use this getTodos function as your callback for all other edits
let todo = document.getElementById('todo-hidden')
let weather = document.getElementById('weather-hidden')
let quote = document.getElementById('quote-hidden')
let check = document.getElementsByTagName('input')
function draw(todos) {
	//WHAT IS MY PURPOSE?
	//BUILD YOUR TODO TEMPLATE HERE
	let template = ''
	for (let i = 0; i < todos.length; i++) {
		const todo = todos[i];
		template += `
		<div id="todo" class="form-check col-xs-12 col-md-12">
		<input class="form-check-input" type="checkbox" >
		<label class="form-check-label">${todo.description} <i class="fas fa-times" onclick="app.controllers.todoController.removeTodo('${todo._id}')"></i></label>
		</div>
		`
	}
	document.getElementById('todo').innerHTML = template
	//DONT FORGET TO LOOP
}

function drawtodo(todos){
	template = `
	TODO: ${todos.length}
	`

}


export default class TodoController {
	constructor() {

		this.getTodos()
		// IF YOU WANT YOUR TODO LIST TO DRAW WHEN THE PAGE FIRST LOADS WHAT SHOULD YOU CALL HERE???
	}

getTodos() {
	//FYI DONT EDIT ME :)
	todoService.getTodos(draw)
}
// You will need four methods
// getTodos should request your api/todos and give an array of todos to your callback fn
// addTodo takes in a todo and posts it to the server
// toggleTodoStatus takes in a todo marks its status as completed and puts it to the server
// removeTodo takes in a todoId and sends a delete request to the server
// **** HINT: Everytime you make a change to any todo don't forget to get the todo list again

addTodoFromForm(e) {
	e.preventDefault() // <-- hey this time its a freebie don't forget this
	// TAKE THE INFORMATION FORM THE FORM
	let form = e.target
	let todo = {
		description: form.description.value,
		// DONT FORGET TO BUILD YOUR TODO OBJECT
	}

	//PASSES THE NEW TODO TO YOUR SERVICE
	//DON'T FORGET TO REDRAW THE SCREEN WITH THE NEW TODO
	//YOU SHOULDN'T NEED TO CHANGE THIS
	todoService.addTodo(todo, draw)
	//^^^^^^^ EXAMPLE OF HOW TO GET YOUR TOODOS AFTER AN EDIT
	form.reset()
}

toggleTodoStatus(todoId) {
	
	// asks the service to edit the todo status
	todoService.toggleTodoStatus(todoId, draw)
	// YEP THATS IT FOR ME
}

removeTodo(todoId) {
	// ask the service to run the remove todo with this id
	todoService.removeTodo(todoId, draw)
	// ^^^^ THIS LINE OF CODE PROBABLY LOOKS VERY SIMILAR TO THE toggleTodoStatus
}



}