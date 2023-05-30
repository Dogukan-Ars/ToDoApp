import React, { useState } from 'react'

function Form({todoList, setTodoList}) {
    const [input, setInput] = useState("")

    const changeHandler = (e) => {
        setInput(e.target.value)
    }
    
    const submitHandler = (e) => {
        e.preventDefault()
        setTodoList([{task: input, isChecked: false}, ...todoList])
        setInput('')
    }

    return (
    <form onSubmit={submitHandler} className='form-div'>
        <input name='input' type="text" placeholder='Write here' value={input} onChange={changeHandler}/>
        <button name='button'>Add ToDo</button>
    </form>
    )
}

export default Form