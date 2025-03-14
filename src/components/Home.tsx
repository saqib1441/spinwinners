import { FC } from "react";
import Search from "./Search";
import Navbar from "./Navbar";
import SportsSwiper from "./SportsSwiper";
import FeaturesEvents from "./FeaturesEvents";

const Home: FC = () => {
  return (
    <div>
      <Navbar />
      <Search />
      <SportsSwiper />
      <FeaturesEvents />
    </div>
  );
};

export default Home;
