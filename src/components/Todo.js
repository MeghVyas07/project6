import React, { Component } from 'react';
// import logo from './logo.svg'
// import './App.css'

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
      ],
      newTodo: '',
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.newTodo.trim() !== '') {
      this.setState({
        todos: [...this.state.todos, { id: this.state.todos.length + 1, text: this.state.newTodo, completed: false }],
        newTodo: '',
      });
    }
  };

  handleToggleCompleted = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      }),
    });
  };

  handleDelete = (id) => {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== id),
    });
  };

  render() {
    return (
      
      <div className="container w-50 my-5 shadow rounded-5 p-3 bg-light">
        {/* <img src={logo} className="App-logo"/> */}
        <h1 className="display-4">Todo List</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group d-flex my-3">
            <input
              type="text"
              className="form-control rounded-end-0"
              value={this.state.newTodo}
              onChange={(e) => this.setState({ newTodo: e.target.value })}
              placeholder="Add new todo"
            /><button type="submit" className="rounded-start-0 px-5 btn btn-primary">Add</button>
          </div>
        </form>
        <ul className="list-group">
          {this.state.todos.map((todo) => (
            <li key={todo.id} className="py-3 list-group-item">
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  checked={todo.completed}
                  onChange={() => this.handleToggleCompleted(todo.id)}
                />
                <label className="form-check-label">{todo.text}</label>
                <button
                  type="button"
                  className="btn btn-outline-danger btn-sm float-end"
                  onClick={() => this.handleDelete(todo.id)}
                >
                  X
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Todo;