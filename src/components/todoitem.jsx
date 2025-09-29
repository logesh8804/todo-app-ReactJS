import React from 'react'

const todoitem = ({ text, isCompleted, id, toggleTask, dltTodo }) => {
  return (
    <div className='flex justify-between item-center '>
        <label className={`hover:bg-slate-100 flex-1 p-2 rounded-md gap-2 cursor-pointer select-none ${isCompleted?'line-through text-gray-500 ':''} `} onClick={ () => toggleTask(id) } >{text}</label>
        <div>
            <div className='size-[24px] py-2 hover:bg-red-50 rounded-md' onClick={ () => dltTodo(id) }>
                <svg className='hover:fill-red-700' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#111111"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
            </div>
        </div>
    </div>
  )
}

export default todoitem