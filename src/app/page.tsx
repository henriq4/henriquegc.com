import { Logo } from "./Logo";

export default function Home() {
  return (
    <main className="flex flex-col items-center gap-8 justify-center w-full mx-auto lg:gap-0 lg:justify-between px-4 py-20 sm:px-16">
      <div className="fixed top-0 left-0 flex flex-col items-center justify-center w-full h-screen pb-16">
        <Logo />
      </div>
      <footer className="fixed bottom-8 left-0 right-0 flex h-auto mx-auto w-full max-w-4xl items-center justify-center sm:justify-between p-8 z-10">
        <div className="hidden sm:flex items-center justify-center gap-2 pointer-events-none select-none">
          Software Engineer
        </div>
        <div className="flex flex-row justify-center">
          <a
            href="https://github.com/henriq4"
            title="GitHub"
            target="_blank"
            rel="noopener noreferrer"
            className="flex place-items-center gap-2 p-4 rounded-full hover:bg-zinc-500 dark:hover:bg-zinc-950 transition-colors motion-reduce:transform-none"
          >
            <svg
              viewBox="0 0 16 16"
              width="20"
              height="20"
              className="fill-current dark:text-white text-black"
            >
              <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
            </svg>
          </a>
          <a
            href="https://linkedin.com/in/henriq4"
            title="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
            className="flex place-items-center gap-2 p-4 rounded-full hover:bg-zinc-500 dark:hover:bg-zinc-950 transition-colors motion-reduce:transform-none"
          >
            <svg
              viewBox="0 0 24 24"
              width="20"
              height="20"
              className="fill-current dark:text-white text-black"
            >
              <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
            </svg>
          </a>
        </div>
      </footer>
    </main>
  );
}
