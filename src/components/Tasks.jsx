import React, {useState} from 'react';

const Tasks = () => {
  const info = (props) => props.this.state.Data;
  return (
    <div>Completed Tasks
    {info.map(task => 
      <div>
        <p>{task.Name}</p>  
        <p>{task.Description}</p>
        <label htmlFor="">Completed
          <input type="checkbox" checked="checked"></input>
        </label>
      </div>  
    )}
    </div>
  )
}

export default Tasks;