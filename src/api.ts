import { TodoTypes } from './types';
import { collection, addDoc, updateDoc, deleteDoc, getDocs, doc } from 'firebase/firestore';
import { db } from './app/Firebese';

// Firestrage 表示  
export const getAllTodos = async (): Promise<TodoTypes[]> => {
    const querySnapshot = await getDocs(collection(db, 'todos'));
    const todos: TodoTypes[] = [];
    querySnapshot.forEach((doc) => {
        const todo: TodoTypes = {
            id: doc.id,
            text: doc.data().text,
        };
        todos.push(todo);
    });
    return todos;
};
// Firestrage 追加
export const addTodo = async (todo: TodoTypes): Promise<TodoTypes> => {
    await addDoc(collection(db, 'todos'), todo);
    return todo;
};
// Firestrage 編集
export const editTodo = async (id: string, newText: string): Promise<TodoTypes> => {
    const todoRef = doc(db, 'todos', id);
    await updateDoc(todoRef, { text: newText });
    const updatedTodo = { id, text: newText };
    return updatedTodo;
};
// Firestrage 削除
export const deleteTodo = async (id: string): Promise<void> => {
    const todoRef = doc(db, 'todos', id);
    await deleteDoc(todoRef);
};

// json-server CRUD処理
// const Url = 'http://localhost:3001/todos';

// json-server 表示
// export const getAllTodos = async (): Promise<TodoTypes[]> => {
//     const res = await fetch(Url, {
//         cache: 'no-store', // SSR(更新頻度の高いコンテンツ): no-store, SSG(更新頻度の少ないブログなど): force-cache
//     });
//     const todos = res.json();

//     return todos;
// }
// json-server 追加
// export const addTodo = async (todo: TodoTypes): Promise<TodoTypes> => {
//     const res = await fetch(Url, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(todo),
//     });
//     const newTodo = res.json();

//     return newTodo;
// }
// json-server 編集
// export const editTodo = async (id: string, newText: string): Promise<TodoTypes> => {
//     const res = await fetch(`${Url}/${id}`, {
//         method: 'PUT',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ text: newText }),
//     });
//     const updatedTodo = res.json();

//     return updatedTodo;
// }
// json-server 削除
// export const deleteTodo = async (id: string ): Promise<TodoTypes> => {
//     const res = await fetch(`${Url}/${id}`, {
//         method: 'DELETE',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//     });
//     const deleteTodo = res.json();

//     return deleteTodo;
// }