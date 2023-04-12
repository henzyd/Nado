import Advert from "./Advert";
import Intro from "./Intro";
import Slider from "./Slider";
import TopItems from "./TopItems";

const Home = () => {
  return (
    <div id="Home" className="mb-20">
      <Intro />
      <Slider />
      <TopItems />
      <Advert />
    </div>
  );
};

export default Home;
