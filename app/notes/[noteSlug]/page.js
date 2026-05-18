import { getNote } from "@/lib/db";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaArrowLeftLong } from "react-icons/fa6";

function formatNoteMetaData(createdAtString, details) {
  const date = new Date(createdAtString);
  const formattedDate = date
    .toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
    })
    .replace(",", "");

  const wordsPerMinute = 200;
  const noOfWords = details.split(/\s+/).length;
  const readingTime = Math.ceil(noOfWords / wordsPerMinute);

  return `${formattedDate} · ${readingTime} ${readingTime > 1 ? "mins" : "min"} read`;
}

export default async function NoteDetailsPage({ params }) {
  const { noteSlug } = await params;
  const note = await getNote(noteSlug);

  if (!note) {
    notFound();
  }

  const formattedMetaData = formatNoteMetaData(note.created_at, note.details);

  return (
    <article className="min-h-screen bg-[#050505] text-neutral-100 px-4 sm:px-6 py-10 sm:py-16 selection:bg-green-500/30 selection:text-green-400">
      <div className="mx-auto max-w-3xl flex flex-col gap-8">
        {/* Navigation & Header Section */}
        <div className="space-y-5">
          <Link
            href="/notes"
            className="group inline-flex items-center gap-2 text-xs font-semibold text-green-500 hover:text-green-400 uppercase tracking-wider transition-colors duration-200"
          >
            <FaArrowLeftLong className="transition-transform duration-200 group-hover:-translate-x-1" />
            Back to Notes
          </Link>

          <header className="space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              {note.title}
            </h1>
            <div className="flex flex-wrap items-center gap-3 text-sm text-neutral-400 font-medium">
              <span>{formattedMetaData}</span>
              <span className="text-neutral-700">•</span>
              <span className="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-semibold bg-neutral-900 border border-neutral-800 text-green-400">
                DevNote
              </span>
            </div>
          </header>
        </div>

        {/* Hero Cover Image Box */}
        {note.image && (
          <div className="relative w-full h-64 sm:h-96 md:h-[420px] rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 shadow-2xl shadow-black/40">
            <Image
              src={note.image}
              alt={`${note.title} cover artwork`}
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              priority
              className="object-cover"
            />
          </div>
        )}

        {/* Note Body Content */}
        <div className="text-neutral-300 text-base sm:text-lg leading-relaxed font-normal tracking-wide space-y-6 whitespace-pre-wrap">
          <p className="first-letter:text-4xl first-letter:font-bold first-letter:text-green-500 first-letter:mr-1">
            {note.details}
          </p>
        </div>

        {/* Structural Divider */}
        <hr className="border-neutral-900 my-4" />

        {/* Creator Footer Card */}
        <footer className="flex items-center justify-between bg-neutral-950/40 border border-neutral-900 p-5 rounded-2xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-emerald-700 flex items-center justify-center font-bold text-black uppercase shadow-md shadow-green-500/10">
              {note.creator ? note.creator.substring(0, 2) : "DV"}
            </div>
            <div>
              <p className="text-xs text-neutral-500 font-medium">
                Published by
              </p>
              <h3 className="text-sm font-bold text-neutral-200 tracking-wide">
                {note.creator}
              </h3>
            </div>
          </div>

          <div className="text-xs font-semibold text-neutral-400 bg-neutral-900 px-3 py-1.5 rounded-lg border border-neutral-800/60 select-none">
            Author verified
          </div>
        </footer>
      </div>
    </article>
  );
}
