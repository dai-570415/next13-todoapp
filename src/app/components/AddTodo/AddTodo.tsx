'use client';

import { addTodo } from '@/firestore';
import { useState, FormEvent, ChangeEvent } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Styles from './css/AddTodo.module.css';

export const AddTodo = () => {
    const [todoTitle, setTodoTitle] = useState('')

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        await addTodo({ id: uuidv4(), text: todoTitle });
        setTodoTitle('');
        window.location.reload();
    }

    return (
        <form onSubmit={handleSubmit} className={Styles.addTodo}>
            <div className={Styles.formSet}>
                <input
                    className={Styles.input}
                    type="text" 
                    onChange={(e: ChangeEvent<HTMLInputElement>)=> {setTodoTitle(e.target.value)}}
                    value={todoTitle}
                    placeholder="タスクを追加する"
                />
                <button className={Styles.submit}>+</button>
            </div>
        </form>
    );
}