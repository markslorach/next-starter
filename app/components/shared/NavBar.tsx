import { Github } from "lucide-react";
import Link from "next/link";
import { Button } from "../shadcn/button";

const NavBar = () => {
  return (
    <header className="h-16 border-b text-lg">
      <div className="container flex h-full items-center justify-between">
        <Link href="/" className="font-semibold">
          Next<span className="text-blue-500">Starter</span>
        </Link>

       
      </div>
    </header>
  );
};

export default NavBar;
