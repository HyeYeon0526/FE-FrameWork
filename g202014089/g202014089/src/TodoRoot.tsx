import React, { useReducer } from 'react'
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import { reducer, initialState } from './todoReducer'
function TodoRoot() {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div className="todoRoot">
            <h1>학생 목록</h1>
            <TodoInput dispatch={dispatch} />
            <TodoList todoList={state.todoList} dispatch={dispatch} />
        </div>
    )
}
export default TodoRoot;