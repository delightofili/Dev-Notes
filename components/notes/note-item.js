import Link from "next/link";

export default function NoteItems({ title, slug, summary, creator }) {
  return (
    <Link
      href={`/notes/${slug}`}
      className="block p-4 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors duration-200"
    >
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-700 mb-4">{summary}</p>
      <p className="text-sm text-gray-500">By {creator}</p>
    </Link>
  );
}
