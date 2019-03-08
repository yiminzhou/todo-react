import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class TodoListItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  handleChange(event) {
    this.props.toggleTodo(this.props.item.task);
  }

  deleteItem() {
    this.props.deleteTodo(this.props.item.task);
  }

  renderClassName() {
    let className = 'todo-list-item';
    if (this.props.item.isCompleted) {
      className += ' todo-list-item--completed';
    }
    return className;
  }

  render() {
    return (
      <li className={this.renderClassName()}>
        <label className="todo-list-item__label">
          <span className="todo-list-item__checkbox">
            <FontAwesomeIcon icon="check" />
          </span>
          {this.props.item.task}
          <input
            type="checkbox"
            className="todo-list-item__checkbox-input"
            checked={this.props.item.isCompleted}
            onChange={this.handleChange}
          />
        </label>
        <button
          onClick={this.deleteItem}
          className="todo-list-item__button"
        >
          <FontAwesomeIcon icon="trash-alt" />
          <span className="todo-list-item__button-label">Delete</span>
        </button>
      </li>
    )
  }
}
