import Link from "next/link";
import { IoLogoDeviantart } from "react-icons/io5";
import NavLink from "./nav-link";

export default function MainHeader() {
  return (
    <div className=" flex items-center justify-between py-6 px-8 ">
      <div className="flex items-center">
        <IoLogoDeviantart className="text-green-500 text-4xl" />
        <Link href="/" className="text-white text-3xl font-bold">
          Dev<span className="text-green-500">Notes</span>
        </Link>
      </div>
      <div className="mr-7">
        <nav>
          <ul className="flex gap-6">
            <li>
              <NavLink href="/notes">Notes</NavLink>
            </li>
            <li>
              <NavLink href="/notes/share">Share</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
