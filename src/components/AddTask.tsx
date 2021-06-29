import React, {FC, useState} from 'react';
import {IAddTask, IMessage} from "../types/types";

interface AddTaskProps {
    onAddTask: IAddTask;
}

const AddTask: FC<AddTaskProps> = ({onAddTask}) => {
    const [text, setText] = useState('');

    const messageError: IMessage = error => alert(error);

    const addTask = () => {
        if (text) {
            if (text.length > 35) throw messageError('Максимальное количество символов 35');
            onAddTask(text)
        }
        setText('');
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    }

    const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') addTask();
    }

    return (
        <section className="todo__add-task">
            <input type='text' value={text} onChange={handleChange} onKeyUp={handleKeyUp} placeholder="Введите задачу..." />
            <button onClick={addTask}>
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 512">
                    <path d="M492,236H276V20c0-11.046-8.954-20-20-20c-11.046,0-20,8.954-20,20v216H20c-11.046,0-20,8.954-20,20s8.954,20,20,20h216
			v216c0,11.046,8.954,20,20,20s20-8.954,20-20V276h216c11.046,0,20-8.954,20-20C512,244.954,503.046,236,492,236z"/>
                </svg>
            </button>
        </section>
    );
};

export default AddTask;