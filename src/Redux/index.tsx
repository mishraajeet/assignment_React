import { legacy_createStore as createStore } from "redux";

export const addNewTodo = (todo: { id: string, todoTitle: string }) => {
    return {
        type: 'ADD_TODO',
        payload: {
            id: todo.id,
            todoTitle: todo?.todoTitle,
        },
    };
};

export const deleteTodo = (id: string) => {
    return {
        type: 'DELETE_TODO',
        id,
    };
};

const initialState = [
    {
        id: 1,
        todoTitle: 'Complete 1'
    }
]

const todoReducer = (state = initialState, action: { type: string, payload: { id: number; todoTitle: string; } }) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, { id: action.payload.id, todoTitle: action.payload.todoTitle }];
        case 'DELETE_TODO':
            const filteredTodos = state.filter(item => item.id !== action.payload.id)
            return filteredTodos;
        default:
            return state
    }
}

const store = createStore(
    todoReducer)
export default store