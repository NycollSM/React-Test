import React, { Component } from 'react';
import TaskList from '../components/ItemsList';

class AllTasks  extends Component {
  constructor (props){
    super(props);
    this.state = {
      data: null,
      completedTask : []
    } 
    this.FilteringData = this.FilteringData.bind(this); 
  }

  componentDidMount(){
    const newData = []
    const dataLS = JSON.parse(localStorage.getItem('data2')) || [] ;
    dataLS.map(item => {
      newData.push(item)
    })
    this.setState({
      data: newData,
    })
  }

  FilteringData () {
    const filtroIG = this.state.data.filter(i => i.completed == true )
    filtroIG.map(item => {
      this.state.completedTask.push(item)
    })
    console.log(this.state.completedTask);
  }

  render() {
   return (
    <div>Completed Tasks
      <TaskList 
      tasks={this.state.completedTask}
      FilteringData={this.FilteringData}
      />
    </div>
    )
  }
}

export default AllTasks