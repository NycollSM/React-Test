import React, { Component } from 'react';

class TasksList extends Component {
  constructor (props) {
    super(props)
    this.state= {
      items: this.props.tasks,
    }
   
  }
  handleEdit () {
    console.log('edit')
  }
  handleCompleted () {
    console.log('complete')
  }
  handleDelete (itemDeleted) {
    const newItemsD = this.state.items.filter(item => 
    item !== itemDeleted); 
    this.setState({
      tasks: newItemsD
    });
  }
  render() {
    return (
      <div>
        {
          console.log('this state',this.state.items)
        }
        {this.state.items.map(item => 
        <div key={item.id}>
            <p>{item.name}</p>
            <p>{item.description}</p>
            <button onClick={() => this.props.handleDelete(item.id)}>Delete</button>
            <button onClick={this.handleEdit}>Edit</button>
            <button onClick={this.handleCompleted}>completed</button>
        </div>
        )}
      </div>
    )
  }
}
export default TasksList;