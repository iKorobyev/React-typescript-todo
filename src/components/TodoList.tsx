import React, {FC} from 'react';
import {IRemoveTask, ITodo, IToggleCompleted} from "../types/types";
import TodoItem from "./TodoItem";

interface TodoListProps {
    todos: ITodo[];
    onToggleCompleted: IToggleCompleted;
    onRemoveTask: IRemoveTask;
}

const TodoList: FC<TodoListProps> = ({todos, onToggleCompleted, onRemoveTask}) => {
    return (
        <>
            {todos.map((todo, index) => <TodoItem
                key={`${index}__${todo.text[1]}`}
                index={index}
                todo={todo}
                onToggleCompleted={onToggleCompleted}
                onRemoveTask={onRemoveTask}/>)}
        </>
    );
};

export default TodoList;