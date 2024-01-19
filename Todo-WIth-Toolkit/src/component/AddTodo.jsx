import React, { useState } from 'react'
import { addTodo } from '../feature/todo/todoSlice'
import {useDispatch} from 'react-redux'
const AddTodo = () => {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const onTodoHandler = (e) => {
        e.preventDefault();
        dispatch(addTodo(input))
        setInput("")
    }
  return (
      <div>
          <form onSubmit={onTodoHandler}>
              <input
                  type="text"
                  placeholder='todo'
                  onChange={(e) => setInput(e.target.value)}
                  value={input}
              />
              <button type='submit'>Add</button>
          </form>
    </div>
  )
}

export default AddTodo