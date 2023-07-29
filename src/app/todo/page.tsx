import { AddTodo } from '../components/AddTodo/AddTodo';
import { Fv } from '../components/Fv/Fv';
import { PrevLink } from '../components/Link/Link';
import { TodoList } from '../components/TodoList/TodoList';
import { getAllTodos } from '@/api';

const Todo = async () => {
  const todos = await getAllTodos();

  return (
    <main>
      <Fv imgPath="todo.jpg" imgName="todo" />
      <section>
        <div>
          <AddTodo />
          <TodoList todos={todos} />
        </div>
      </section>
      <PrevLink labelName="Top Page" dir="/" />
    </main>
  );
}

export default Todo;