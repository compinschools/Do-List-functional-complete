import React, {useState} from 'react';
//import {userState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import './App.css';
import View from './view'
import Add from './Add'

function App(){
  const [todos,changeTodos] = useState([{ id: 1, description: "make static data", completed: false },
  { id: 2, description: "make dynamic data", completed: false }]);

  const updateListItems = (task) => {
    changeTodos((prevState) => [...prevState,task]);
  }
    return (
        <Container>
          <View todos={todos} />
          <Add submitHandler={(task) => updateListItems(task)} />
        </Container>
    );

}
export default App;
