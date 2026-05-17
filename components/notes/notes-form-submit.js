import { useFormStatus } from "react-dom";

export default function NotesFormSubmit() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="mt-2 inline-flex items-center justify-center rounded-xl bg-green-500 px-5 py-3 text-md font-semibold text-white  transition hover:bg-green-400 active:scale-[0.98]"
      disabled={pending}
    >
      {pending ? "Publishing..." : "Publish Note"}
    </button>
  );
}
