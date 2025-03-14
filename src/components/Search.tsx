"use client";

import { FC, useState } from "react";
import { IoMdSearch } from "react-icons/io";

const Search: FC = () => {
  const [active, setActive] = useState<boolean>(false);

  return (
    <main className="wrapper">
      <form className="bg-white dark:bg-secondary rounded-full flex items-center px-5 gap-2 group">
        <div>
          <IoMdSearch
            size={22}
            className={`text-muted-foreground group-hover:text-primary transition-all duration-300 ${
              active && "text-primary"
            }`}
          />
        </div>
        <input
          type="text"
          onFocus={() => setActive(true)}
          onBlur={() => setActive(false)}
          placeholder="Search"
          className="grow focus:outline-none py-2 placeholder:text-black dark:placeholder:text-white"
        />
      </form>
    </main>
  );
};

export default Search;
