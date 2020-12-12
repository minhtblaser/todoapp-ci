









import React, { useState, useEffect } from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import './App.css';
import Todo from './Todo';
import db from './firebase';
import firebase from 'firebase';
import './Todo.css'

function App() {
  const [todos, setTodos] = useState([])
  const [input, setInput] =  useState('');
  
//when the app load, we need to listen to the database and fetch new todos as they get/remove
  useEffect(() => {
    //this code here... fire when the app.js load
    db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot => {
      // console.log(snapshot.docs.map(doc => doc.data()));
      setTodos(snapshot.docs.map(doc => ({id: doc.id, todo:doc.data().todo})))
    })
  }, []);


  const addTodo = (event) =>{
    //this will fire off when we click the button 
    event.preventDefault(); // will stop the REFRESH
    
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    setInput(''); //clear up the input after clicking add todo button
    console.log(todos);
  }

  return (
    <div className="App">
     <h1>💀 WELCOME TO APP TODO 💀</h1>
      <h1>Enjoy your lifehh</h1>
     <form>
        <FormControl>
        <InputLabel>😘Write a tododsad</InputLabel>
        <Input value={input} placeholder="add something" onChange={event => setInput(event.target.value)}/>
        </FormControl>

        <Button disabled= {!input} type ="submit" onClick={addTodo} variant="contained" color="primary">
          ADD TODO
        </Button>
        {/* <button type ="submit" onClick={addTodo}> Add Todo </button> */}
     </form>
     <ul>
       {todos.map(todo => (
         <Todo todo={todo} />
       ))}
     </ul>
    </div>
  );
}

export default App;
