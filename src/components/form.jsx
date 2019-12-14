import React, {Component} from 'react';
import Tasks from './Tasks';

class Form  extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: '', 
      Description: '',
      Data: {}
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    localStorage.setItem('myValueInLocalStorage', this.handleChange);
    console.log('Data:', this.state.Data);
    console.log('Name:', this.state.Name);
    console.log('Description:', this.state.Description);
    alert('Tarea creada');
  }

  handleChange(event) {
    this.setState({Name: event.target.value});
    this.setState({Description: event.target.value});
    this.setState({Data: [this.state.Description, this.state.Name]})
  }

  render () {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name of the task
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <label htmlFor="">
            Description
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <button type="submit" value='submit'>button</button>
        </form>
        {/*
        {
          this.state.Data.map(items => 
          <p>{items.Name}</p>
          )
        }*/}
      </div>
    )
  }
}

export default Form;
