import NoteItems from "./note-item";

export default function NotesGrid({ notes }) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {notes.map((note) => (
        <li key={note.id}>
          <NoteItems {...note} />
        </li>
      ))}
    </ul>
  );
}
