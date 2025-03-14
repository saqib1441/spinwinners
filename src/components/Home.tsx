import { FC } from "react";
import Search from "./Search";
import Navbar from "./Navbar";
import SportsSwiper from "./SportsSwiper";

const Home: FC = () => {
  return (
    <div>
      <Navbar />
      <Search />
      <SportsSwiper />
    </div>
  );
};

export default Home;
