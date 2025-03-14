import { FC } from "react";
import Sports from "./Sports";

const FeaturesEvents: FC = () => {
  return (
    <main className="wrapper">
      <div className="bg-secondary p-5 rounded-2xl">
        <h1 className="text-3xl mb-5">Featured Events</h1>
        <Sports />
      </div>
    </main>
  );
};

export default FeaturesEvents;
