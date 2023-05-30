import React from 'react'
import {FiTrash2, FiEdit, FiCheck} from "react-icons/fi"

function FormLists({todoList, setTodoList}) {

const checkHandler = (i) => {
    setTodoList(todoList.map((todo, index) => {
      return (i === index ? {task: todo.task, isChecked: !todo.isChecked} : todo)
    }))
  }
  
  const editHandler = (i) => {
    const newTodo = prompt("Rename your ToDo!")
    setTodoList(todoList.map((todo, index) => {
      return (index === i ? {task: newTodo, isChecked: todo.isChecked} : todo)
    }))
  }

const deleteHandler = (i) => {
  const newList = todoList.filter((id, index) => {
    return (i !== index)
  })
  setTodoList(newList)
}

  return (
    <div className='list-div'>
        {todoList && todoList.map((todo, index) => {
            return (
                <div key={index} className='todo-item'>
                    <div className='checkInput'>
                    <FiCheck className='check-icon' onClick={() => checkHandler(index)}/>
                    <p className={todo.isChecked ? "done" : ""}>{todo.task}</p>
                    </div>
                    <div>
                      <FiEdit className='edit-icon' onClick={() => editHandler(index)}/>
                      <FiTrash2 className='delete-icon' onClick={() => deleteHandler(index)}/>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default FormLists