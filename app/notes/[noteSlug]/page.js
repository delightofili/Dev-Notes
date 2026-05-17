import { getNote } from "@/lib/db";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaArrowLeftLong } from "react-icons/fa6";

export default async function NoteDetailsPage({ params }) {
  const { noteSlug } = await params;
  const note = getNote(noteSlug);

  if (!note) {
    notFound();
  }

  return (
    <>
      <div>
        <div>
          <Link
            href="/notes"
            className="flex gap-2 text-green-500 items-center text-center"
          >
            <FaArrowLeftLong />
            Back to Notes
          </Link>
          <header className="my-4">
            <h1 className="text-3xl font-bold">{note.title}</h1>
            <p className="text-white/70 mt-2">{note.created_at}</p>
          </header>
        </div>
      </div>
    </>
  );
}
