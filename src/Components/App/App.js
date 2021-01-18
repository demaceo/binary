import './App.css';
import { useState, useEffect, useRef } from 'react';
import NavBar from '../NavBar/NavBar';
import AddToDo from '../AddToDo/AddToDo';
import LogIn from '../LogIn/LogIn';
import Header from '../Header/Header';
import ToDos from '../ToDos/ToDos';
import { BrowserRouter as Router, Route} from "react-router-dom";
import { useLocalStorage } from "../../utilities/useLocalStorage";
import News from '../News/News';
import { getBreakingNews } from "../../utilities/apiCalls";

// import Landing from '../Landing/Landing';
// import Category from  '../Category/Category';

function App() {
  const [todos, setTodos] = useState([]);
  // const [priorityLevel, setPriorityLevel] = useState('asdf');
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

  const delToDo = (id) => {
    const filteredToDos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredToDos); 
    setLocalStorage(todos);
  }

  const toggleComplete = (id) => {
      todos.map((todo) => {
          if (todo.id === id) {
            todo.completed = !todo.completed;
          }
          return todo;
        })
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/" render={() => <News breakingNews={breakingNews}/>} />
        <Route exact path="/toDos" render={() => <ToDos todos={todos} toggleComplete={toggleComplete}/>} />
        <Route exact path="/add" render={() => <AddToDo addToDo={addToDo}/>} />
        {/* <Route
          exact
          path="/category"
          render={(props) => <Category priorityLevel={priorityLevel} />}
        /> */}
        {/* <Route
          path="/category/:id"
          render={({ match }) => {
            const category = todos.filter(
              // (todo) => todo.priority === parseInt(match.params.id)
              (todo) => {
                if(todo.priority === parseInt(match.params.id)){
                  console.log(todo.priority)
                  console.log(parseInt(match.params.id));
                }}
            );
            if (!category) {
              return <div>Sorry.. no todos found for this category!</div>;
            }
            console.log(category)
            return <Category {...category} />;
          }
        }
        /> */}
        <NavBar />
      </div>
    </Router>
  );
}

export default App;