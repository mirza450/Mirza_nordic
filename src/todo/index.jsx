
import React, { Component } from 'react';
import './todo.css';

export default class Index extends Component {
    state = { todoText: '', todoList: [] };
  
    changeTodoText = event => {
      // console.log(event.target.value);
      this.setState({ todoText: event.target.value });
    };
af
    addTodo = event => {
      event.preventDefault();
      this.setState(({ todoList, todoText }) => ({
        todoList: [...todoList, todoText],
        todoText: '',
      }));
  
      console.log('hello');
    };
  
    render() {
      const { todoText } = this.state;
      return (
        <div className="wrapper">
          <h1 className="heading">Todo App</h1>
          <form onSubmit={this.addTodo}>
            <input
              type="text"
              className="rounded-full"
              value={todoText}
              onChange={this.changeTodoText}
            />
            <button type="submit" className="btn rounded-full">
              Add Todo
            </button>
          </form>
          <div className="w-full flex-1">
            <div className="flex items-center m-4">
              <input type="checkbox" name="" id="" />
              <p className="flex-1 px-8">Lorem ipsum dolor sit amet.</p>
              <button type="button" className="btn">
                Delete
              </button>
            </div>
            <div className="flex items-center m-4">
              <input type="checkbox" name="" id="" />
              <p className="flex-1 px-8">Lorem ipsum dolor sit amet.</p>
              <button type="button" className="btn rounded-full">
                Delete
              </button>
            </div>
          </div>
          <div className="w-full flex">
            <button type="button" className="btn flex-1 rounded-full">
              All
            </button>
            <button type="button" className="btn flex-1 rounded-full">
              Pending
            </button>
            <button type="button" className="btn flex-1 rounded-full">
              Completed
            </button>
          </div>
        </div>
      );
      }
    }