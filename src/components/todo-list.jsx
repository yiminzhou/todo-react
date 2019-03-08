import React from 'react';
import TodoListItem from './todo-list-item';

export default class TodoList extends React.Component {
  filterTodos() {
    const allTodos = this.props.todos;
    return allTodos.filter(todo => todo.isCompleted === this.props.completed);
  }

  renderItems() {
    return this.filterTodos().map((item, index) => {
      return (
        <TodoListItem
          key={index}
          item={item}
          toggleTodo={this.props.toggleTodo}
          deleteTodo={this.props.deleteTodo}
        />
      )
    });
  }

  renderMessage() {
    let message;
    if (this.props.header === "To do") {
      message = "Add an item by entering a task"
    } else {
      message = "Your completed tasks will show up here"
    }

    return (
      <div className="todo-list__empty-msg">{message}</div>
    )
  }

  render() {
    let inner;
    if (this.filterTodos().length > 0) {
      inner = <ul className="todo-list__content">{this.renderItems()}</ul>;
    } else {
      inner = this.renderMessage();
    }
    return (
      <section className="todo-list">
        <label className="todo-list__header">{this.props.header}</label>
        {inner}
      </section>
    )
  }
}
