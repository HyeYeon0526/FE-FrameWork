import React from 'react'
import TodoItem from '././TodoItem'
import type { Todo, DispatchFunc } from './todoReducer'
type Props = {
    todoList: Todo[],
    dispatch: DispatchFunc
}
function TodoList({ todoList, dispatch }: Props) {
    const trlist = todoList.map(todo =>
        <TodoItem key={todo.id} todo={todo} dispatch={dispatch} />);
    return (
        <table>
            <thead>
                <tr><td>id</td><td>학번</td><td>이름</td></tr>
            </thead>
            <tbody>
                {trlist}
            </tbody>
        </table>
    )
}
export default TodoList