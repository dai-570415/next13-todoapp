import { TodoTypes } from './types';

const Url = 'http://localhost:3001/todos';

export const getAllTodos = async (): Promise<TodoTypes[]> => {
    const res = await fetch(Url, {
        cache: 'no-store', // SSR(更新頻度の高いコンテンツ): no-store, SSG(更新頻度の少ないブログなど): force-cache
    });
    const todos = res.json();

    return todos;
}

export const addTodo = async (todo: TodoTypes): Promise<TodoTypes> => {
    const res = await fetch(Url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(todo),
    });
    const newTodo = res.json();

    return newTodo;
}

export const editTodo = async (id: string, newText: string): Promise<TodoTypes> => {
    const res = await fetch(`${Url}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: newText }),
    });
    const updatedTodo = res.json();

    return updatedTodo;
}

export const deleteTodo = async (id: string ): Promise<TodoTypes> => {
    const res = await fetch(`${Url}/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const deleteTodo = res.json();

    return deleteTodo;
}