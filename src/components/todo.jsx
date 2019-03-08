import React, { Fragment } from 'react';
import _ from 'lodash';
import AddTodo from './add-todo';
import TodoList from './todo-list';

const todos = [
  { task: 'Watch God Friended Me', isCompleted: false },
  { task: 'Lunch with Robin', isCompleted: true },
  { task: 'Buy cat food', isCompleted: false },
];

export default class Todo extends React.Component {
  constructor(props) {
    super(props);

    this.state = { todos };

    this.createTodo = this.createTodo.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.validateTask = this.validateTask.bind(this);
  }

  findTodo(task) {
    return this.state.todos.find(item => item.task === task);
  }

  createTodo(task) {
    this.state.todos.push({task, isCompleted: false});
    this.setState({ todos: this.state.todos });
  }

  toggleTodo(task) {
    const todo = this.findTodo(task);
    todo.isCompleted = !todo.isCompleted;
    this.setState({ todos: this.state.todos });
  }

  deleteTodo(task) {
    const todo = this.findTodo(task);
    _.remove(this.state.todos, todo);
    this.setState({ todos: this.state.todos });
  }

  validateTask(task) {
    return !this.findTodo(task);
  }

  render() {
    return (
      <Fragment>
        <AddTodo
          createTodo={this.createTodo}
          validateTask={this.validateTask}
        />
        <TodoList
          todos={this.state.todos}
          toggleTodo={this.toggleTodo}
          deleteTodo={this.deleteTodo}
          completed={false}
          header="To do"
        />
        <TodoList
          todos={this.state.todos}
          toggleTodo={this.toggleTodo}
          deleteTodo={this.deleteTodo}
          completed={true}
          header="Completed"
        />
      </Fragment>
    );
  }
}
