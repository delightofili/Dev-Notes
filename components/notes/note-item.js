import Image from "next/image";
import Link from "next/link";

export default function NoteItems({ title, slug, summary, creator, image }) {
  return (
    <Link
      href={`/notes/${slug}`}
      className="block p-4 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors duration-200"
    >
      <div className="flex items-start bg-neutral-900 border border-neutral-800 hover:border-green-500/50 p-5 rounded-2xl transition-all duration-300 shadow-sm hover:shadow-green-500/5 group">
        <div className="relative w-16 h-16 rounded-xl overflow-hidden mr-5 bg-neutral-800 shrink-0 border border-neutral-800">
          <Image
            src={image}
            alt={`${title} image`}
            fill
            sizes="64px"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="flex-1 min-w-0">
          <h2 className="text-lg font-bold text-neutral-100 group-hover:text-green-400 transition-colors duration-200 line-clamp-1 mb-1">
            {title}
          </h2>
          <p className="text-neutral-400 text-sm line-clamp-2 leading-relaxed mb-3">
            {summary}
          </p>
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium text-neutral-500">By</span>
            <span className="text-xs font-semibold text-green-500/90 tracking-wide bg-green-500/10 px-2 py-0.5 rounded-md">
              {creator}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
