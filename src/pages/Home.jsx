import React, { useEffect, useState } from 'react'
import Form from '../components/Form'
import FormLists from '../components/FormLists'

const getAllTodos = () => {
  let localTodos = []
  if(localStorage.getItem("todoList")) {
    localTodos = JSON.parse(localStorage.getItem("todoList"))
  }
  return localTodos
}

function Home() {
  const [todoList, setTodoList] = useState(getAllTodos())

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList))
  }, [todoList])

  return (
    <div className='todo-container'>
      <Form todoList={todoList} setTodoList={setTodoList}/>
      {todoList && <FormLists todoList={todoList} setTodoList={setTodoList}/>}
    </div>
  )
}

export default Home