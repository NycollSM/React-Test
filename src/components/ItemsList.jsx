import React, { Component } from 'react';
import '../App.css';


class TasksList extends Component {
  constructor (props) {
    super(props)
    this.state= {
      items: this.props.tasks,
    }
    this.completedTask = this.completedTask.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleEdit (element) {
    //const[title, description] = element;
    console.log('sdfghjkkjhgfdghjkhg');
  }

  completedTask (item) {
    if (item.completed === false) {
      item.completed = true
    } else {
      item.completed = false
    }
    localStorage.setItem('data2', JSON.stringify(this.state.items));
    console.log(item)
  }

  render() {

    return (
      <div>
        {this.state.items.map(item => 
        <div key={item.id} className='Task'>
            <p>Title: 
              {item.name}
              {/* Editar task
                <input type="text" 
                id={item.key} 
                value={item.name}
                onChange = {
                  (e) => {
                    this.props.handleEdit(e.target.value, item.key)
                  }
                }/>*/}
              </p>
            <p>Description: {item.description}</p>
            <button onClick={() => this.props.handleDelete(item.id)}>Delete</button>
            <button onClick={() => this.handleEdit(item)}>Edit</button>
            <button onClick={() => this.completedTask(item)}>completed</button>
        </div>
        )}
      </div>
    )
  }
}
export default TasksList;