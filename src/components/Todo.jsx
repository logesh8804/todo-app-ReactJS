import React, { useEffect, useRef, useState } from 'react'
import Todoitem from './todoitem.jsx'

export const Todo = () => {
  
  const [todolist, SetTodoList] = useState(localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : [])
  
  const inputRef = useRef();

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todolist))
  },[todolist]);
  
  const addTask = () => {
    const inputText = inputRef.current.value.trim();
    if(inputText.length === 0)
    {
      return null;
    }
    const newTodo = {
      id: Date.now(),
      text: inputText,
      isCompleted: false,
    };
    SetTodoList((prev) => [...prev, newTodo]);
    inputRef.current.value = "";
  };

  const toggleTask = (id) => {
    SetTodoList((prev) => {
      return prev.map((todo) => {
        if(id === todo.id){
          return {...todo, isCompleted: !todo.isCompleted}
        }
        return todo;
      })
    })
  };

  const dltTodo = (id) => {
    SetTodoList((prev) => {
      return prev.filter((todo) => todo.id !== id);
    });
  };

  return (
    <>
      <div className='w-[30-rem] '>
          <h1 className='text-lg my-2 text-amber-600 '>Todo App List</h1>
          <div className='flex gap-2'>
              <div className='flex-1'>
                  <input ref={inputRef} type="text" placeholder='Add New Task' className='bg-white px-3 py-4 w-full text-sm border focus:outline-none focus:border-amber-500 ' />
              </div>
              <button className='px-3 py-4 bg-blue-400 text-white hover:bg-blue-700 text-sm rounded-sm border-none' onClick={addTask} >Add Task</button>
          </div>
          <p className='my-3 text-sm text-zinc-400 px-1 '>Fill task details !</p>
      </div>
      <div className='w-[30-rem] bg-white shadow px-4 py-6 '>
        <fieldset className='space-y-3'>
          <legend className='font-medium text-blue-500 '>List of tasks</legend>
          
          {todolist.length === 0?(
            <p className='text-gray-500 text-sm'>No task found!</p>
          ):(
            todolist.map((todo) => {
              return <Todoitem text={todo.text} key={todo.id} isCompleted={todo.isCompleted} id={todo.id} toggleTask={toggleTask} dltTodo={dltTodo} />
            })
          )}
        
        </fieldset>
      </div>
    </>
  )
}