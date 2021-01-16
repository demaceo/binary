import './App.css';
import { useState, useEffect } from 'react';
import NavBar from '../NavBar/NavBar';
import AddToDo from '../AddToDo/AddToDo';
import LogIn from '../LogIn/LogIn';
import Header from '../Header/Header';
import ToDos from '../ToDos/ToDos';
import { BrowserRouter as Router, Route} from "react-router-dom";
import News from '../News/News';

function App() {
  const [todos, setTodos] = useState([]);
  const [priority, setPriority] = useState('');
  
  const addToDo = (newToDo) => {
    if (todos.length === 0) {
      setTodos([newToDo]);
      // setLocalStorage(toDos);
    } 
    // else if (!todos.includes(newToDo)) {
    //   setTodos([newToDo, ...todos]);
    //   // setLocalStorage([newToDo, ...todos])
    // }
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
          <>
          <News />
          </>
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
              <AddToDo addToDo={addToDo} />
          )}
        />
        <NavBar />
      </div>
    </Router>
  );
}

export default App;

    // <Router>
    //   <div className="App">
    //     <div className="container">
    //       <Header />
    //       <Route
    //         exact
    //         path="/"
    //         render={(props) => (
    //           <>
    //             <AddToDo addToDo={this.addToDo} />
    //             <ToDos
    //               todos={this.state.todos}
    //               toggleComplete={this.toggleComplete}
    //               delToDo={this.delToDo}
    //             />
    //           </>
    //         )}
    //       />
    //       <Route path="/About" component={About} />
    //     </div>
    //   </div>
    // </Router>;