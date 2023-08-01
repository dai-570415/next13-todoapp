import { AddTodo } from '../components/AddTodo/AddTodo';
import { Header } from '../components/Layout/Header';
import { TodoList } from '../components/TodoList/TodoList';
import { getAllTodos } from '@/firestore';

const Todo = async () => {
  const todos = await getAllTodos();

  return (
    <>
      <Header pageTitle="タスク管理" />
      <main>
        <section>
          <AddTodo />
          <TodoList todos={todos} />
        </section>
      </main>
    </>
  );
}

export default Todo;