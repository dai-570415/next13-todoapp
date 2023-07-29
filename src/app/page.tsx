import { Fv } from './components/Fv/Fv';
import { NextLink } from './components/Link/Link';

const Home = async () => {
  return (
    <main>
      <Fv imgPath="next.jpg" imgName="next.js 13" />
      <NextLink labelName="Todo Page" dir="/todo" />
    </main>
  );
}

export default Home;