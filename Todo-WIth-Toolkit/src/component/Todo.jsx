import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo } from '../feature/todo/todoSlice'

const Todo = () => {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos)
    return (
        <>
            <ul>
                {
                    todos.map((todo) => (
                        <li key={todo.id}>
                            <div>{todo.text}</div>
                            <button onClick={(e) => dispatch(removeTodo(todo.id))}>X</button>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}

export default Todo