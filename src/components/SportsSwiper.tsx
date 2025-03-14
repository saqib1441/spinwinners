"use client";

import { FC, useRef, useState, useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const sports = [
  { name: "Formula E", icon: "🏁" },
  { name: "Golf", icon: "⛳" },
  { name: "Greyhound Racing", icon: "🐕" },
  { name: "Handball", icon: "🤾‍♂️" },
  { name: "Harness", icon: "🏇" },
  { name: "Ice Hockey", icon: "🏒" },
  { name: "Indy Racing", icon: "🏎️" },
  { name: "Kyotei", icon: "🚤" },
  { name: "Mahjong", icon: "🀄" },
  { name: "MMA", icon: "🥋" },
  { name: "Motorcycle Racing", icon: "🏍️" },
  { name: "Netball", icon: "🏐" },
  { name: "Rally", icon: "🚗" },
  { name: "Rugby League", icon: "🏉" },
  { name: "Rugby Union", icon: "🏉" },
  { name: "Snooker", icon: "🎱" },
  { name: "Specials", icon: "⭐" },
  { name: "Sports Specials", icon: "🔄" },
  { name: "Squash", icon: "🏸" },
];

const SportsSwiper: FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      setShowLeft(scrollRef.current.scrollLeft > 0);
      setShowRight(
        scrollRef.current.scrollLeft + scrollRef.current.clientWidth <
          scrollRef.current.scrollWidth
      );
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 200;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.addEventListener("scroll", checkScroll);
      checkScroll();
    }

    return () => {
      if (scrollRef.current) {
        scrollRef.current.removeEventListener("scroll", checkScroll);
      }
    };
  }, []);

  return (
    <div className="relative my-8 w-[85%] mx-auto">
      {showLeft && (
        <button
          className="px-[0.0625rem] py-[0.625rem] align-middle border border-transparent bg-[#2C323A] rounded-tr-sm rounded-br-sm shadow-md shadow-black/20 text-muted-foreground text-sm leading-none no-underline cursor-pointer absolute left-0 top-[0.75rem] origin-top z-5"
          onClick={() => scroll("left")}
        >
          <IoIosArrowBack size={24} />
        </button>
      )}

      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto scrollbar-hide scroll-smooth whitespace-nowrap"
      >
        {sports.map((sport, index) => {
          const words = sport.name.split(" ");
          return (
            <div
              key={index}
              className="flex flex-col items-center text-white rounded-lg text-center"
            >
              <span className="text-3xl bg-secondary w-14 h-14 flex items-center justify-center rounded-xl mb-3">
                {sport.icon}
              </span>
              <span className="text-[10px] leading-tight text-muted-foreground">
                {words.length > 1 ? (
                  <>
                    {words[0]} <br /> {words.slice(1).join(" ")}
                  </>
                ) : (
                  words[0]
                )}
              </span>
            </div>
          );
        })}
      </div>

      {showRight && (
        <button
          className="px-[0.0625rem] py-[0.625rem] align-middle border border-transparent bg-[#2C323A] rounded-tr-sm rounded-br-sm shadow-md shadow-black/20 text-[#8D9DA8] text-sm leading-none no-underline cursor-pointer absolute right-0 top-[0.75rem] origin-top z-5"
          onClick={() => scroll("right")}
        >
          <IoIosArrowForward size={20} />
        </button>
      )}
    </div>
  );
};

export default SportsSwiper;
