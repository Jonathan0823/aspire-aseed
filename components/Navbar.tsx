// Navbar.tsx

import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";
import Dropdown from "./Dropdown";
import { auth } from "@/auth";
import Logout from "./Logout";

const Navbar: React.FC = async () => {
  const session = await auth();
  return (
    <header className="absolute top-0 left-0 w-full md:px-20 px-2 flex justify-between items-center p-4 bg-opacity-30 bg-[#292929] backdrop-blur-lg z-10">
      <div className="flex items-center space-x-2  px-4 py-2">
        <FaUserCircle className="text-white w-8 h-8" />
        <span className="text-[#040180] bg-[#d2c6b7] bg-opacity-80 md:text-base text-sm rounded-full p-2 font-semibold">
          {session ? "English Education Department" : (
            <Link href="/login" className="text-blue-900 font-bold hover:text-blue-600">
              LOGIN
            </Link>
          )}
        </span>
      </div>

      <nav className="hidden lg:flex space-x-4 border-2 border-purple-500 rounded-full bg-[#d2c6b7] bg-opacity-80 px-6 py-2">
        <Link href="/" className="text-blue-900 font-bold hover:text-blue-600">
          HOME
        </Link>
        <Link
          href="/about"
          className="text-blue-900 font-bold hover:text-blue-600"
        >
          ABOUT
        </Link>
        <Link
          href="/contact"
          className="text-blue-900 font-bold hover:text-blue-600"
        >
          CONTACT
        </Link>
        {session && (
          <Logout />
        )  
        }
      </nav>

      <div className="lg:hidden">
        <Dropdown />
      </div>
    </header>
  );
};

export default Navbar;
