import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

const Dropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <button className="lg:hidden text-gray-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-[#d2c6b7] min-w-44">
        <DropdownMenuItem>
          <Link
            href="/"
            className="text-blue-900 font-bold hover:text-blue-600"
          >
            HOME
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem><Link
          href="/about"
          className="text-blue-900 font-bold hover:text-blue-600"
        >
          ABOUT
        </Link></DropdownMenuItem>
        <DropdownMenuItem><Link
          href="/contact"
          className="text-blue-900 font-bold hover:text-blue-600"
        >
          CONTACT
        </Link></DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Dropdown;
