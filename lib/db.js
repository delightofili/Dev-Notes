import sql from "better-sqlite3";

const db = sql("db/notes.db");

const notes = [
  {
    id: 1,
    slug: "note-1",
    image: "/images/note1.jpg",
    title: "Understanding Javascript Closures",
    summary: "A deep dive into closures in JavaScript with examples.",
    details:
      "Closures are a fundamental concept in JavaScript that allow functions to access variables from an enclosing scope, even after that scope has finished executing. This is particularly useful for creating private variables and functions, as well as for implementing functional programming patterns. In this note, we will explore how closures work, their use cases, and some common pitfalls to avoid.",
    creator: "Delightsome Dev",
    created_at: new Date().toISOString(),
    created_at_time: new Date().getTime(),
  },
  {
    id: 2,
    slug: "note-2",
    image: "/images/note2.jpg",
    title: "Next.js Server Components",
    summary:
      "Learn how React Server Components work in Next.js and how to use them effectively.",
    details:
      "Next.js Server Components allow you to render components on the server, which can improve performance and reduce the amount of JavaScript sent to the client. This note covers the basics of Server Components, how to create them, and best practices for using them in your Next.js applications.",
    creator: "John Doe",
    created_at: new Date().toISOString(),
    created_at_time: new Date().getTime(),
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
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    created_at_time INTEGER
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
        @created_at,
        @created_at_time,
        )`);

  for (const note of notes) {
    stmt.run(note);
  }
}

initData();

export async function getNotes() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return db.prepare("SELECT * FROM notes").all();
}

export function getNote(slug) {
  const note = db.prepare("SELECT * FROM notes WHERE slu = ?").get(slug);

  console.log("FOUND NOTE:", note);

  return note;
}
