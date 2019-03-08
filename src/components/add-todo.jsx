import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class AddTodo extends React.Component {
  constructor(props) {
    super(props);

    this.state = { error: ''};

    this.taskInput = React.createRef();
    this.addTask = this.addTask.bind(this);
  }

  addTask(event) {
    event.preventDefault();
    this.setState({ error: ''});

    const task = this.taskInput.current.value;
    if (!this.validateTask(task)) { return; }

    this.props.createTodo(task);
    this.taskInput.current.value = '';
  }

  validateTask(task) {
    if (!task) {
      this.setState({ error: 'Please enter a task'});
      return false;
    } else if (!this.props.validateTask(task)) {
      this.setState({ error: 'You have already added this task'});
      return false;
    } else {
      return true;
    }
  }

  renderError() {
    if (!this.state.error) { return null; }
    return (
      <div className="add-todo__error">{this.state.error}</div>
    )
  }

  render() {
    return (
      <section className="add-todo">
        <form onSubmit={this.addTask}>
          <section className="add-todo__input-container">
            <input
              type="text"
              placeholder="Remind me to..."
              ref={this.taskInput}
              className="add-todo__input"
            />
            <button type="submit" className="add-todo__button">
              <FontAwesomeIcon icon="plus" />
            </button>
          </section>
          {this.renderError()}
        </form>
      </section>
    );
  }
}
