import React, { Component } from 'react';

class TasksList extends Component {
  constructor (props) {
    super(props)
    this.state= {
      items: this.props.tasks,
    }
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleEdit () {
    console.log('edit')
  }
  handleCompleted () {
    console.log('complete')
  }
  handleDelete (eventDelete) {
    let newItemsD = this.state.items.filter((item) => {
      return item = eventDelete;
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
            <button onClick={this.handleDelete}>Delete</button>
            <button onClick={this.handleEdit}>Edit</button>
            <button onClick={this.handleCompleted}>completed</button>
        </div>
        )}
      </div>
    )
  }
}
export default TasksList;