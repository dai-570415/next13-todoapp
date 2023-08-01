'use client';

import { TodoListProps } from '../../../types';
import { Todo } from './Todo';
import Styles from './css/Todo.module.css';

export const TodoList = ({ todos }: TodoListProps) => {
    return (
        <section className={Styles.todo}>
            <h3>
                <img src={`/img/common/check.svg`} alt="タスクリスト" />
                タスクリスト
            </h3>
            <ul>
                {todos.map((todo) => (
                    <Todo key={todo.id} todo={todo} />
                ))}
            </ul>
        </section>
    );
}