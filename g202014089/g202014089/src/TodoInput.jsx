import React, { ChangeEvent, useState } from 'react'
import type { DispatchFunc } from './todoReducer'
type Props = {
    dispatch: DispatchFunc
}
function TodoInput({ dispatch }: Props) {
    const [studentNumber, setTitle] = useState<string>('');
    const onChange = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value);
    const onClick = () => {
        dispatch({ type: "addTodo", payload: { studentNumber } });
        dispatch({ type: "addTodo", payload: { studentName } });
        setTitle('');
    }
    return (
        <div>
            <input type='text' value={studentNumber} onChange={onChange} />
            <input type='text' value={studentName} onChange={onChange} />
            <button onClick={onClick}>추가</button>
        </div>
    )
}
export default TodoInput;