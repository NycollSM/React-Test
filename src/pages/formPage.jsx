import React, { Component } from 'react';
import Form from '../components/form';

class FormPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: [],
      description: '',
      editTask: {},
      id: 0,
      task: '',
      tasks: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
  }

  handleChange (e) {
    this.setState({task: e.target.value})
    this.setState({description: e.target.value}) 
    console.log(this.state.task);
  }
  render () {
    return (
      <div>
        <Form />
      </div>
    )
  }
}

export default FormPage;