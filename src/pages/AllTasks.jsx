import React, { Component } from 'react';
import TaskList from '../components/AllTasks';

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
    const dataLS = JSON.parse(localStorage.getItem('data')) || [] ;
    dataLS.map(item => {
      newData.push(item)
    })
    
    this.setState({
      data: newData,
    })
    console.log(this.state.data)
    
  }
  FilteringData () {
    const filtroIG = this.state.data.filter(i => i.completed == true )
    console.log(filtroIG);
    filtroIG.map(item => {
      this.state.completedTask.push(item)
    })
    console.log('wenas',this.state.completedTask);
  }



  
  render() {
   return (
    <div>Completed Tasks
      <TaskList 
      tasks={this.setState.data}
      FilteringData={this.FilteringData}
      />
    </div>
    )
  }
}

export default AllTasks