import { AddTodo } from '../components/AddTodo/AddTodo';
import { Header } from '../components/Layout/Header';
import { PrevLink } from '../components/Link/Link';
import { TodoList } from '../components/TodoList/TodoList';
import { getAllTodos } from '@/firestore';

const Todo = async () => {
  const todos = await getAllTodos();

  return (
    <>
      <Header pageTitle="TODO" />
      <main>
        <section>
          <div>
            <AddTodo />
            <TodoList todos={todos} />
          </div>
        </section>
        <PrevLink labelName="Top Page" dir="/" />
      </main>
    </>
  );
}

export default Todo;