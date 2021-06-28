import React, {useState} from 'react';
import {IAddTask, IRemoveTask, ITodo, IToggleCompleted} from "./types/types";
import TodoList from "./components/TodoList";
import Header from "./components/Header";
import AddTask from "./components/AddTask";

const App = () => {
    const initialTodos: ITodo[] = [
        {
            text: 'Написать Todo на React',
            completed: true
        },
        {
            text: 'Доделать Todo на React',
            completed: false
        }
    ]

    const [todos, setTodos] = useState(initialTodos);

    const onToggleCompleted: IToggleCompleted = (selectedTodo: ITodo) => {
        setTodos(prevState => {
            return prevState.map((todo) => {
                if (todo === selectedTodo) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                return todo;
            })
        })
    }

    const onRemoveTask: IRemoveTask = (index) => {
        if (window.confirm('Вы уверены, что хотите удалить запись?')) {
            setTodos(prevState => {
                return prevState.filter((_, currentIndex) => index !== currentIndex)
            })
        }
    }

    const onAddTask: IAddTask = (text: string) => {
        return setTodos(prevState => [...prevState, {
            text: text,
            completed: false
        }])
    }

    return (
        <div className='todo'>
            <Header />
            <main className="todo__content">
                <TodoList todos={todos} onToggleCompleted={onToggleCompleted} onRemoveTask={onRemoveTask}/>
            </main>
            <AddTask onAddTask={onAddTask} />
        </div>
    );
};

export default App;