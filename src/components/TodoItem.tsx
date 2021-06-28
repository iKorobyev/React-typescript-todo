import React, {FC} from 'react';
import {IRemoveTask, ITodo, IToggleCompleted} from "../types/types";

interface TodoItemProps {
    todo: ITodo;
    index: number;
    onToggleCompleted: IToggleCompleted;
    onRemoveTask: IRemoveTask;
}

const TodoItem: FC<TodoItemProps> = ({todo, index, onToggleCompleted, onRemoveTask}) => {
    const toggleCompleted = () => {
        onToggleCompleted(todo);
    }

    const removeTask = () => {
        onRemoveTask(index);
    }

    return (
        <div className={`todo-item ${todo.completed ? 'todo-item-completed' : ''}`}>
            <div onClick={toggleCompleted}>
                <i className="todo-item__icon">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                         viewBox="0 0 426.667 426.667">
                        <path d="M421.876,56.307c-6.548-6.78-17.352-6.968-24.132-0.42c-0.142,0.137-0.282,0.277-0.42,0.42L119.257,334.375
        l-90.334-90.334c-6.78-6.548-17.584-6.36-24.132,0.42c-6.388,6.614-6.388,17.099,0,23.713l102.4,102.4
        c6.665,6.663,17.468,6.663,24.132,0L421.456,80.44C428.236,73.891,428.424,63.087,421.876,56.307z"/>
                    </svg>
                </i>
                <input type='text' value={todo.text} readOnly/>
            </div>
            <svg onClick={removeTask} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.001 512.001">
                <path d="M284.286,256.002L506.143,34.144c7.811-7.811,7.811-20.475,0-28.285c-7.811-7.81-20.475-7.811-28.285,0L256,227.717
        L34.143,5.859c-7.811-7.811-20.475-7.811-28.285,0c-7.81,7.811-7.811,20.475,0,28.285l221.857,221.857L5.858,477.859
        c-7.811,7.811-7.811,20.475,0,28.285c3.905,3.905,9.024,5.857,14.143,5.857c5.119,0,10.237-1.952,14.143-5.857L256,284.287
        l221.857,221.857c3.905,3.905,9.024,5.857,14.143,5.857s10.237-1.952,14.143-5.857c7.811-7.811,7.811-20.475,0-28.285
        L284.286,256.002z"/>
            </svg>
        </div>
    );
};

export default TodoItem;