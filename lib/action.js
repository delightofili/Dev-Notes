"use server";

import { redirect } from "next/navigation";
import { saveNote } from "./db";
import { revalidatePath } from "next/cache";

function isValidText(text) {
  return !text || text.trim() === "";
}
export async function shareNote(prevState, formData) {
  const note = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    details: formData.get("details"),
    image: formData.get("image"),
    creator: formData.get("name"),
  };

  if (
    isValidText(note.title) ||
    note.image.size === 0 ||
    isValidText(note.summary) ||
    isValidText(note.details) ||
    isValidText(note.creator)
  ) {
    return {
      message: "Invalid Input!",
    };
  }

  await saveNote(note);

  revalidatePath("/notes");
  redirect("/notes");
}
