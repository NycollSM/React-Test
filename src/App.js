import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import AllTasks from './components/router';
import FormC from './components/form';

function App() {
  return (
    <div className="App">
      <FormC />
      <Router>
        <Link exact to='/Tasks'>Tareas completadas</Link>
        <Switch>
          <Route path="/Tasks" component={AllTasks}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
