import { editTodo, deleteTodo } from '@/firestore';
import { TodoProps } from '@/types';
import { useState, useEffect,  useRef, ChangeEvent } from 'react';
import Styles from './css/Todo.module.css';

export const Todo = ({ todo }: TodoProps) => {
    const ref = useRef<HTMLInputElement>(null);

    const [isEditing, setIsEditing] = useState(false);
    const [editedTaskTitle, setEditedTaskTitle] = useState(todo.text);

    useEffect(() => {
        if (isEditing) {
            ref.current?.focus();
        }
    }, [isEditing])
 
    const handleEdit = async () => {
        setIsEditing(true)
    }
    const handleSave = async () => {
        await editTodo(todo.id, editedTaskTitle);
        setIsEditing(false);
        window.location.reload();
    }
    const handleDelete = async () => {
        await deleteTodo(todo.id);
        window.location.reload();
    }

    return (
        <li key={todo.id}>
            {isEditing ? (
                <div className={Styles.text}>
                    <input
                        className={Styles.input}
                        ref={ref}
                        type="text" 
                        value={editedTaskTitle}
                        onChange={(e: ChangeEvent<HTMLInputElement>)=> {setEditedTaskTitle(e.target.value)}}
                    />
                </div>
            ): (
                <div className={Styles.text}>{todo.text}</div>
            )}
            
            <div className={Styles.btnSet}>
                {isEditing ? (
                    <button className={Styles.btn + ' ' + Styles.done} onClick={handleSave}>保存</button>
                ): (
                    <button className={Styles.btn + ' ' + Styles.edit} onClick={handleEdit}>編集</button>
                )}
            
                <button className={Styles.btn + ' ' + Styles.delete} onClick={handleDelete}>削除</button>
            </div>
        </li>
    );
}