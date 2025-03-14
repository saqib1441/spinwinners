import Link from "next/link";
import React from "react";
import { FaChevronUp } from "react-icons/fa6";

const Sports: React.FC = () => {
  return (
    <div className="bg-background rounded-tl-2xl rounded-tr-2xl shadow-md">
      <div className="flex items-center justify-between border-black border-b p-4">
        <div className="text-xl flex items-center gap-2">
          <span>🏀</span>
          <span>Basketball</span>
        </div>
        <Link href="#" className="text-primary text-[13px]">
          See All
        </Link>
      </div>
      <div className="flex items-center">
        <div className="grow flex justify-between items-center border-b border-black px-4 py-3 text-[13px]">
          <h1>
            <span className="text-primary">International</span> /{" "}
            <span className="text-primary">Euroleague</span>
          </h1>
          <span>2</span>
        </div>
        <div className="text-[13px] text-primary border-l border-black p-3 h-full">
          <FaChevronUp />
        </div>
      </div>
      <div className="grid grid-cols-6 py-2 text-[12px] text-muted-foreground">
        <div className="col-span-3"></div>
        <div>Winner</div>
        <div>HCP</div>
        <div>TOT</div>
      </div>
    </div>
  );
};

export default Sports;
