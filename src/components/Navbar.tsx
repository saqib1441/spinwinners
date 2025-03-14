import { FC } from "react";
import { Sheet, SheetTrigger } from "./ui/sheet";
import { FaBars } from "react-icons/fa6";
import Logo from "./Logo";
import Link from "next/link";
import { Button } from "./ui/button";

const Navbar: FC = () => {
  return (
    <nav className="py-4 wrapper flex items-center justify-between">
      <div className="flex items-center gap-2">
        {/* Side Navbar */}
        <Sheet>
          <SheetTrigger>
            <div className="h-9 w-9 rounded-full flex items-center justify-center">
              <FaBars className="text-muted-foreground text-lg dark:hover:text-primary transition-all duration-300 cursor-pointer" />
            </div>
          </SheetTrigger>
        </Sheet>

        {/* Logo */}
        <Logo />
      </div>
      <div className="flex items-center gap-3">
        <Link href="/sign-in">
          <Button
            variant="ghost"
            className="rounded-full px-6 py-2 dark:text-muted-foreground dark:hover:text-white"
          >
            Sign In
          </Button>
        </Link>
        <Link href="/sign-up">
          <Button className="rounded-full px-6 py-2 dark:text-white btn">
            Sign Up
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
