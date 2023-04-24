export type Todo = {
    id: number,
    studentNumber: number,
    studentName: string,
    done: boolean
}

export type State = {
    todoList: Todo[]
}

export const initialState = {
    todoList: [
        { id: 1, studentNumber: '201514091', studentName:"홍길동", done: false },
        { id: 2, studentNumber: '201514092', studentName:"임꺽정", done: false },
        { id: 3, studentNumber: '201514093', studentName:"전우치", done: false },

    ]
}
let lastId = 3;
export type Action =
    { type: "addTodo", payload: { studentName: string } } |
    { type: "toggleTodo", payload: { id: number } } |
    { type: "deleteTodo", payload: { id: number } }
export type DispatchFunc = (action: Action) => void;
export type ReducerFunc = (state: State, action: Action) => State;
export const reducer: ReducerFunc = (state: State, action: Action) => {
    switch (action.type) {
        case "addTodo":
            return {
                todoList: [...state.todoList,
                { id: lastId + 1, done: false }]
            };
        case "deleteTodo":
            return {
                todoList: state.todoList.filter(
                    todo => todo.id !== action.payload.id)
            };
        case "toggleTodo":
            return {
                todoList: state.todoList.map(
                    todo => todo.id !== action.payload.id ?
                        todo :
                        { ...todo, done: !todo.done })
            };
        default:
            throw new Error("unknown action type");
    }
}