
import './App.css';
import Header from './MyComponents/Header';
import Footer from './MyComponents/Footer';
import Todos from './MyComponents/Todos';
import React, { useState } from 'react';

function App() {
  const onDelete = (todo) => {
    console.log ('I am on delete', todo);
    setTodos(todos.filter((e)=>{
      return e!=todo;
    }))
  }
  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Go to the market",
      desc: "You need to go the market to get this job done"
    },
    {
      sno: 2,
      title: "Go to the movie",
      desc: "You need to go the Movie theatre to see the movie"
    },
    {
      sno: 3,
      title: "Study ",
      desc: "You need to study after you have completed the task"
    }
  ]);
  return (
    <>
    <Header title="To do List" subtitle="SEE WHAT YOU DO TODAY!!"/>
    <Todos todos={todos} onDelete={onDelete}/>
    <Footer/>
    </>
  );
}

export default App;
