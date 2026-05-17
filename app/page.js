import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";
import { LuNotebookPen } from "react-icons/lu";
import HeroImage from "../public/images/hero.png"; // Keep this path
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="flex flex-col md:flex-row items-center justify-center md:justify-between w-full min-h-screen mx-auto  px-6 py-12 md:px-12 gap-12">
        <div className="flex-1 flex flex-col items-center md:items-start  rounded-2xl p-8 md:p-12 w-full max-w-4xl text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight">
            Share Ideas.
            <br />
            Inspire <span className="text-green-500">Developers.</span>
          </h1>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
            DevNotes is a tiny note-sharing app for developers.
            <br />
            Create notes. Share knowledge. Inspire others.
          </p>

          <div className="flex gap-4 flex-col sm:flex-row w-full sm:w-auto">
            <Link
              href="/notes"
              className="flex items-center justify-center gap-2 text-white font-semibold rounded-xl bg-green-500 px-8 py-4 text-lg transition-all duration-200 hover:bg-green-600 active:scale-95 w-full sm:w-auto"
            >
              <FaLongArrowAltRight className="text-xl" /> Browse Notes
            </Link>
            <Link
              href="/notes/share"
              className="flex items-center justify-center gap-2 border-2 rounded-xl border-white p-4 text-white text-lg font-medium transition-all duration-200 hover:bg-white hover:text-gray-900 w-full sm:w-auto"
            >
              <LuNotebookPen className="text-2xl" />
              Share a Note
            </Link>
          </div>
        </div>

        <div className="flex-shrink-0 w-full max-w-md md:w-[48%] mt-12 md:mt-0 aspect-square flex items-center justify-center">
          <div className="relative w-full h-full p-2 border-2 border-green-500/50 rounded-3xl bg-white/5 backdrop-blur-sm shadow-[0_0_50px_rgba(34,197,94,0.4)] flex items-center justify-center">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-green-500 rounded-full blur-[100px] opacity-35 pointer-events-none" />

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] h-[50%] bg-emerald-400 rounded-full blur-[60px] opacity-25 pointer-events-none" />

            <div className="relative w-full h-full rounded-2xl overflow-hidden z-10">
              <Image
                src={HeroImage}
                alt="An illustration of developers collaborating with green neon lights"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                objectFit="cover"
                className="w-full h-full border border-white/10"
              />
            </div>
          </div>
        </div>
      </main>
      <footer className="text-center text-gray-500 text-sm py-6">
        &copy; {new Date().getFullYear()} DevNotes. All rights reserved. -
        Delightsome
      </footer>
    </>
  );
}
