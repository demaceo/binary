import './App.css';
import { useState, useEffect, useRef } from 'react';
import NavBar from '../NavBar/NavBar';
import AddToDo from '../AddToDo/AddToDo';
import Header from '../Header/Header';
import ToDos from '../ToDos/ToDos';
import { BrowserRouter as Router, Route} from "react-router-dom";
import { useLocalStorage } from "../../utilities/useLocalStorage";
import News from '../News/News';
import { getBreakingNews } from "../../utilities/apiCalls";

function App() {
  const [todos, setTodos] = useState([]);
  const [localStorage, setLocalStorage] = useLocalStorage("toDos");
  const [breakingNews, setBreakingNews] = useState([]);

  useEffect(() => { 
    let storedToDos = localStorage;
    storedToDos = storedToDos ? storedToDos : [];
    setTodos(storedToDos);
    getBreakingNews().then((data) => setBreakingNews(data))
  }, []);

  const addToDo = (newToDo) => {
    if (!todos) {
      setTodos([newToDo]);
      setLocalStorage(todos);
    } 
    else {
      setTodos([newToDo, ...todos]);
      setLocalStorage([newToDo, ...todos])
    }
  }

  // const delToDo = (id) => {
  //   const filteredToDos = todos.filter((todo) => todo.id !== id);
  //   setTodos(filteredToDos); 
  //   setLocalStorage(todos);
  // }

  // const toggleComplete = (id) => {
  //   const updatedTodos = todos.find((todo) => {
  //       if (todo.id === id) {
  //         todo.completed = !todo.completed;
  //       }
  //       return todos
  //     })
  //   setTodos(todos);
  //   setLocalStorage(todos);
  // };

  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/" render={() => <News breakingNews={breakingNews}/>} />
        <Route exact path="/toDos" render={() => <ToDos todos={todos} />} />
        <Route exact path="/add" render={() => <AddToDo addToDo={addToDo}/>} />
        <NavBar />
      </div>
    </Router>
  );
}

export default App;