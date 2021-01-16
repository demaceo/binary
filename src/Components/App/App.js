import './App.css';
import { useState, useEffect } from 'react';
import NavBar from '../NavBar/NavBar';
import AddToDo from '../AddToDo/AddToDo';
import LogIn from '../LogIn/LogIn';
import Header from '../Header/Header';
import ToDos from '../ToDos/ToDos';

function App() {
  const [todos, setTodos] = useState([]);
  console.log(todos);
  
  const addToDo = (newToDo) => {
    if (todos.length === 0) {
      setTodos([newToDo]);
      // setLocalStorage(toDos);
    } 
    // else if (!todos.includes(newToDo)) {
    //   setTodos([newToDo, ...todos]);
    //   // setLocalStorage([newToDo, ...todos])
    // }
      console.log(todos);
  }
  
  const delToDo = (id) => {
    const filteredToDos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredToDos); 
  }

  return (
    <div className="App">
      <Header />
      <ToDos />
      <AddToDo addToDo={addToDo} />
      <NavBar />
    </div>
  );
}

export default App;
