import Link from "next/link";
import { IoLogoDeviantart } from "react-icons/io5";

export default function MainHeader() {
  return (
    <div className=" flex items-center justify-between py-4 px-6 ">
      <div className="flex items-center">
        <IoLogoDeviantart className="text-green-500 text-4xl" />
        <h1 className="text-white text-3xl font-bold">
          Dev<span className="text-green-500">Notes</span>
        </h1>
      </div>
      <div>
        <nav>
          <ul>
            <li>
              <Link
                href="/notes"
                className="text-gray-300 hover:text-white transition-colors duration-300"
              >
                Notes
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
