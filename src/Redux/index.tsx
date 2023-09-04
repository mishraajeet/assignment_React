import { legacy_createStore as createStore } from "redux";

export const addNewTodo = (todo: { todoTitle: string }) => {
    return {
        type: 'ADD_TODO',
        payload: {
            todoTitle: todo?.todoTitle,
        },
    };
};

export const deleteTodo = (id: number) => {
    return {
        type: 'DELETE_TODO',
        payload: { id },
    };
};

const initialState = [
    {
        todoTitle: 'Complete 1'
    }
]

const todoReducer = (state = initialState, action: { type: string, payload: { id: number; todoTitle: string; } }) => {
    
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, { id: action.payload.id, todoTitle: action.payload.todoTitle }];
        case 'DELETE_TODO':
            const filteredTodos = state.filter((item, i) => i !== action.payload.id)
            return filteredTodos;
        default:
            return state
    }
}

const store = createStore(todoReducer)
export default store