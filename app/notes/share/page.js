"use client";
import ImagePicker from "@/components/images/image-picker";
import NotesFormSubmit from "@/components/notes/notes-form-submit";
import { shareNote } from "@/lib/action";
import Link from "next/link";
import { useActionState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";

export default function NoteSharePage() {
  const [state, formAction] = useActionState(shareNote, { message: null });
  return (
    <section className="min-h-screen bg-[#050505] text-white px-6 py-12">
      <div className="mx-auto max-w-3xl">
        {/* Back Link */}
        <Link
          href="/notes"
          className="inline-flex items-center gap-2 text-sm text-green-500 transition hover:text-green-400"
        >
          <FaArrowLeftLong size={14} />
          Back to Notes
        </Link>

        {/* Header */}
        <header className="mt-6">
          <h1 className="text-4xl font-bold tracking-tight">
            Share a New Note
          </h1>

          <p className="mt-3 text-base leading-relaxed text-white/60 max-w-xl">
            Write something useful for other developers. Share ideas,
            discoveries, fixes, or anything worth learning.
          </p>
        </header>

        {/* Form Card */}
        <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-8 shadow-2xl backdrop-blur-sm">
          <form className="flex flex-col gap-6" action={formAction}>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-white/80">
                Note Title
              </label>

              <input
                type="text"
                name="title"
                placeholder="Understanding React Server Components"
                className="rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-500/20"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-white/80">
                Summary
              </label>

              <input
                type="text"
                name="summary"
                placeholder="A quick explanation of how RSC works in Next.js"
                className="rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-500/20"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-white/80">
                Content
              </label>

              <textarea
                name="details"
                placeholder="Write your note here..."
                className="min-h-[220px] resize-none rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-500/20"
              ></textarea>
            </div>

            <ImagePicker label="Your image" name="image" />

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-white/80">
                Your Name
              </label>

              <input
                type="text"
                placeholder="John Doe"
                name="name"
                className="rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-500/20"
              />
            </div>
            {state.message && <p className="text-red-500">{state.message}</p>}
            <NotesFormSubmit />
          </form>
        </div>
      </div>
    </section>
  );
}
