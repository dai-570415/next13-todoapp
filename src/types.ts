export type TodoTypes = {
    id: string;
    text: string;
}

export type TodoListProps = {
    todos: TodoTypes[];
}

export type TodoProps = {
    todo: TodoTypes;
}