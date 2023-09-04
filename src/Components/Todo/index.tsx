import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewTodo, deleteTodo } from "../../Redux/index";
import "./todo.css"

export const TodoComponent = () => {

    const [todoTitle, setTodoTitle] = useState('')
    const todos: any = useSelector((state) => state);
    const dispatch = useDispatch();
    const addTodo = (e: React.FormEvent) => {
        e.preventDefault()
        if (todoTitle) {
            dispatch(addNewTodo({ todoTitle }));
            setTodoTitle('')
        }
    }

    const deleteHandle = (index: number) => {
        dispatch(deleteTodo(index))
    }
    return (
        <div className="todo-container" onSubmit={addTodo}>
            <form>
                <input type="text" value={todoTitle} onChange={(e) => setTodoTitle(e.target.value)} />
                <input type="submit" value="Submit" />
            </form>

            {todos.map((t: any, i: number) => {
                return (
                    <div key={i} className="todo-list">
                        <div>{t.todoTitle}</div>
                        <button className="delete" onClick={() => deleteHandle(i)}>Delete</button>
                    </div>
                )
            })}
        </div>
    )
}