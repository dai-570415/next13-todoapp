import { Header } from './components/Layout/Header';
import { NextLink } from './components/Link/Link';

const Home = async () => {
  return (
    <>
      <Header pageTitle="TOP" />
      <main>
        <NextLink labelName="Todo Page" dir="/todo" />
      </main>
    </>
  );
}

export default Home;