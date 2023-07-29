import { AddTodo } from './components/AddTodo/AddTodo';
import { TodoList } from './components/TodoList/TodoList';
import { getAllTodos } from '../api';

const Home = async () => {
  const todos = await getAllTodos();

  return (
    <main>
      <section>
        <div>
          <AddTodo />
          <TodoList todos={todos} />
        </div>
      </section>
    </main>
  );
}

export default Home;