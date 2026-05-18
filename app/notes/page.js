import NotesGrid from "@/components/notes/notes-grid";
import Link from "next/link";
import { FaPlus } from "react-icons/fa";
import { getNotes } from "@/lib/db";
import { Suspense } from "react";

async function Notes() {
  const notes = await getNotes();
  return <NotesGrid notes={notes} />;
}
export default function NotePage() {
  return (
    <>
      <header className="px-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold">All Notes</h1>
            <p className="text-white/70">All notes shared by developers.</p>
          </div>
          <Link
            href="/notes/share"
            className="flex items-center justify-center gap-2 text-white font-semibold rounded-xl bg-green-700 px-4 py-2 text-sm transition-all duration-200 hover:bg-green-600 active:scale-95 w-full sm:w-auto"
          >
            <FaPlus className="text-2xl" />
            New Note
          </Link>
        </div>
      </header>
      <main>
        <div className="px-8 py-4">
          <Suspense
            fallback={
              <div className="flex flex-col items-center justify-center min-h-screen bg-black">
                <div className="h-16 w-16 animate-spin rounded-full border-4 border-emerald-500/20 border-t-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.3)]"></div>
                <p className="text-sm text-white pt-2 text-shadow-[0_0_15px_rgba(16,185,129,0.3)] ">
                  Loading Notes...
                </p>
              </div>
            }
          >
            <Notes />
          </Suspense>
        </div>
      </main>
    </>
  );
}
