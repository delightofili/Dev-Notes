import MainHeader from "@/components/main-header";
import "./globals.css";

export const metadata = {
  title: "DevNotes",
  description: "A tiny note-sharing app for developers.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" name="color-scheme" content="dark">
      <body className="min-h-full flex flex-col">
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
