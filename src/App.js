import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import AllTasks from './pages/AllTasks';
import FormPage from './pages/formPage';

class App extends Component {
  render () {
    return (
      <div className="App">
        <Router>
          <Link exact='true' to='/CompletedTasks'>Tareas completadas</Link>
          <Link exact='true' to='/Form'>Form</Link>
          <Switch>
            <Route path="/" component={FormPage}/>
            <Route path="/CompletedTasks" component={AllTasks}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
