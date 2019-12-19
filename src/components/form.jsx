import React, { Component } from 'react';
import Modal from './modal';
import TasksList from './ItemsList';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: false,
      description: '',
      editTask: {},
      id: 0,
      tasks: [],
      task:'',
      showModal:false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const eachTask = this.state.tasks;
    const newItem = {
      id: this.state.id ++,
      name: '',
      description: '',
      completed: false,
    }
    newItem.name = this.state.task;
    newItem.description = this.state.description;
    eachTask.push(newItem);
    this.setState({
      tasks: eachTask,
      showModal: true,
    });
    console.log('tasks', this.state.tasks);
  }
  handleDelete (id) {
    console.log('id',id);
    let newItemsD = this.state.tasks;
    let item = newItemsD.findIndex(item => item.id === id);
    newItemsD.splice(item, 1)
    this.setState({tasks: newItemsD});
  }

  setShowModal () {
    this.setState({showModal: '1'})
  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text"  name="task" onChange={this.handleChange} placeholder="Add a new Task"/>
          <input type="text"  name="description" onChange={this.handleChange} placeholder="Add the description"/>
          <button type="submit" value="submit">Add Task</button> 
        </form>
      {this.state.showModal && 
        <Modal
        show={this.state.showModal}
        hideModal={() => this.setState({showModal: false}) }
        />
      }
        <TasksList 
          tasks={this.state.tasks} handleDelete={this.handleDelete}/>
      </div>
    )
  }
}

export default Form;