import React from 'react'
import TodoItems from "../MyComponents/TodoItems";

const Todos = (props) => {
  return (
    <div className='container'>
      <h3 className='text-center my-3'>
        Todos List
      </h3>
      {props.todos.length==0? <h3>No todos to display</h3>:
      props.todos.map((todo)=>{
        return <TodoItems todo = {todo} onDelete={props.onDelete}/>
      })}
    </div>
  )
}

export default Todos
