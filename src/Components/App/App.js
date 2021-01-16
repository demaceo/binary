import './App.css';
import { useState, useEffect } from 'react';
import NavBar from '../NavBar/NavBar';
import AddToDo from '../AddToDo/AddToDo';
import LogIn from '../LogIn/LogIn';
import Header from '../Header/Header';
import ToDos from '../ToDos/ToDos';
import { BrowserRouter as Router, Route} from "react-router-dom";
import { useLocalStorage } from "../../utilities/useLocalStorage";

import News from '../News/News';
// import Landing from '../Landing/Landing';
import { getBreakingNews } from "../../utilities/apiCalls";


function App() {
  const [todos, setTodos] = useState([]);
  const [priorityLevel, setPriorityLevel] = useState('');
  const [breakingNews, setBreakingNews] = useState([]);
  const [localStorage, setLocalStorage] = useLocalStorage("toDos");


  useEffect(() => { //BREAK THIS UP INTO EACH COMPONENT (NEWS, TODOS) FOR EFFICIENCY
    getBreakingNews().then((data) => setBreakingNews(data));
    let storedToDos = localStorage;
    storedToDos = storedToDos ? storedToDos : [];
    setTodos(storedToDos);
  }, []);

  const addToDo = (newToDo) => {
    if (todos.length === 0) {
      setTodos([newToDo]);
      setLocalStorage(todos);
    } 
    else if (!todos.includes(newToDo)) {
      setTodos([newToDo, ...todos]);
      setLocalStorage([newToDo, ...todos])
    }
  }
  
  const delToDo = (id) => {
    const filteredToDos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredToDos); 
  }

  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/" render={() => (
          <News breakingNews={getBreakingNews()} />
        )}
        />
        <Route
          exact
          path="/toDos"
          render={() => (
              <ToDos />
          )}
        />
        <Route
          exact
          path="/add"
          render={() => (
            <>
              <AddToDo setPriorityLevel={setPriorityLevel} addToDo={addToDo} />
            </>
          )}
        />
        <NavBar />
      </div>
    </Router>
  );
}

export default App;