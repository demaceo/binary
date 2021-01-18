// import React from 'react'
// import './Category.css'
// import {useState, useEffect} from 'react';
// import { useLocalStorage } from "../../utilities/useLocalStorage";
// import ToDo from '../ToDo/ToDo';

// function Category() {
//     const [category, setCategory] = useState();
//     const [localStorage, setLocalStorage] = useLocalStorage("toDos");
//     if(localStorage) {
//         const todos = localStorage.map((todo) => {
//           return (
//             <ToDo
//               key={todo.id}
//               id={todo.id}
//               priority={todo.priority}
//               title={todo.title}
//               completed={todo.completed}
//             />
//           );
//         });
//         console.log(todos[0].priority);
//     return (
//     <>
//         <h2 className="category-title">{todos[0].priority}</h2>
//         <section className="category-container">
//             { todos }
//         </section>
//     </>
//     )
//     } else {
//         return (
//             <>
//         <h2 className="category-title">YOU HAVE NOTHING TO DO!</h2>
//         <section className="no-todos">
//             Click the '+' icon to add to-dos.
//          </section>
//         </>
//         )
//     }
// }


// export default Category;
