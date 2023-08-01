import { Header } from './components/Layout/Header';
import { AppList } from './components/AppList/AppList';

const Home = async () => {
  return (
    <>
      <Header pageTitle="Next13 アプリ一覧" />
      <main>
        <AppList />
      </main>
    </>
  );
}

export default Home;