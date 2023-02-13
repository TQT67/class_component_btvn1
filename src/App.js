import React, { Component } from "react";

class Task extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      tasks: [],
    };

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEditTask = this.handleEditTask.bind(this);
    this.handleDeleteTask = this.handleDeleteTask.bind(this);
  }

  handleChangeName(e) {
    this.setState({ name: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const task = {
      name: this.state.name,
    };
    this.setState({
      tasks: [...this.state.tasks, task],
      name: "",
    });
  }

  handleEditTask(e, index) {
    const tasks = this.state.tasks.slice();
    tasks[index].name = e.target.value;
    this.setState({ tasks });
  }

  handleDeleteTask(index) {
    const tasks = this.state.tasks.slice();
    tasks.splice(index, 1);
    this.setState({ tasks });
  }

  render() {
    return (
      <div>
        <h3>Viết nội dung </h3>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.name} onChange={this.handleChangeName} />
          <button type="submit">Thêm Task</button>
        </form>
        <ul>
          {this.state.tasks.map((task, index) => (
            <li key={index}>
              <input
                type="text"
                value={task.name}
                onChange={(e) => this.handleEditTask(e, index)}
              />
              <button onClick={() => this.handleDeleteTask(index)}>Xóa Task</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Task;
