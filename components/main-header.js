import Link from "next/link";
import { IoLogoDeviantart } from "react-icons/io5";
import NavLink from "./nav-link";

export default function MainHeader() {
  return (
    <header className="w-full bg-[#050505]/80 backdrop-blur-md border-b border-white/5 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-4 sm:px-6 md:px-8">
        <div className="flex items-center min-w-0">
          <Link
            href="/"
            className="flex items-center gap-2 text-white text-xl sm:text-2xl font-extrabold tracking-tight select-none group"
          >
            <IoLogoDeviantart className="text-green-500 text-3xl sm:text-4xl shrink-0 transition-transform duration-300 group-hover:rotate-12" />

            <span className="truncate">
              Dev<span className="text-green-500">Notes</span>
            </span>
          </Link>
        </div>

        <nav>
          <ul className="flex items-center gap-4 sm:gap-6 text-sm sm:text-base font-medium">
            <li>
              <NavLink href="/notes">Notes</NavLink>
            </li>
            <li>
              <NavLink href="/notes/share">Share</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
