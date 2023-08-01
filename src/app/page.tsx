import { NextLink } from './components/Link/Link';

const Home = async () => {
  return (
    <main>
      <NextLink labelName="Todo Page" dir="/todo" />
    </main>
  );
}

export default Home;