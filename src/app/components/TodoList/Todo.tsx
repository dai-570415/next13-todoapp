import { editTodo, deleteTodo } from '@/api';
import { TodoProps } from '@/types';
import { useState, useEffect,  useRef, ChangeEvent } from 'react';

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
                <div>
                    <input 
                        ref={ref}
                        type="text" 
                        value={editedTaskTitle}
                        onChange={(e: ChangeEvent<HTMLInputElement>)=> {setEditedTaskTitle(e.target.value)}}
                    />
                </div>
            ): (
                <div>{todo.text}</div>
            )}
            
            <div>
                {isEditing ? (
                    <button onClick={handleSave}>保存</button>
                ): (
                    <button onClick={handleEdit}>編集</button>
                )}
            
                <button onClick={handleDelete}>削除</button>
            </div>
        </li>
    );
}