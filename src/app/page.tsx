import { Header } from './components/Layout/Header';
import Link from 'next/link';

const Home = async () => {
  return (
    <>
      <Header pageTitle="トップ" />
      <main>
        <Link href="/todo">Todo</Link>
      </main>
    </>
  );
}

export default Home;