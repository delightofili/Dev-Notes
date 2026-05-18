import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";
import fs from "node:fs";

const db = sql("db/notes.db");

const notes = [
  {
    id: 1,
    slug: "note-1",
    image: "/images/javaimage.png",
    title: "Understanding Javascript Closures",
    summary: "A deep dive into closures in JavaScript with examples.",
    details:
      "Closures are a fundamental concept in JavaScript that allow functions to access variables from an enclosing scope, even after that scope has finished executing. This is particularly useful for creating private variables and functions, as well as for implementing functional programming patterns. In this note, we will explore how closures work, their use cases, and some common pitfalls to avoid.",
    creator: "Delightsome Dev",
    created_at: new Date().toISOString(),
  },
];

db.prepare(
  `
    CREATE TABLE IF NOT EXISTS notes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    slug TEXT NOT NULL,
    title TEXT NOT NULL,
    summary TEXT NOT NULL,
    details TEXT NOT NULL,
    image TEXT,
    creator,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    
    )
    `,
).run();

async function initData() {
  const rowCount = db.prepare("SELECT count(*) as count FROM notes").get();
  if (rowCount.count > 0) return;

  const stmt = db.prepare(`
        INSERT INTO notes VALUES (
      null,
      @slug,
      @title,
      @summary,
      @details,
      @image,
      @creator,
      @created_at
    )
  `);
  for (const note of notes) {
    stmt.run(note);
  }
}

initData();

export async function getNotes() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return db.prepare("SELECT * FROM notes").all();
}

export async function getNote(slug) {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const note = db.prepare("SELECT * FROM notes WHERE slug = ?").get(slug);

  console.log("FOUND NOTE:", note);
  console.log("NOTE IMAGE FOUND:", note.image);

  return note;
}

export async function saveNote(note) {
  note.slug = slugify(note.title, { lower: true });
  note.details = xss(note.details);

  const extension = note.image.name.split(".").pop();

  const fileName = `${notes.slug}.${extension}`;

  const stream = fs.createWriteStream(`public/images/${fileName}`);

  const bufferedImage = await note.image.arrayBuffer();

  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error("saving image failed!");
    }
  });

  note.image = `/images/${fileName}`;

  db.prepare(
    `INSERT INTO notes (slug, title, summary, details, image, creator) VALUES (@slug, @title, @summary, @details, @image, @creator)`,
  ).run(note);
}
