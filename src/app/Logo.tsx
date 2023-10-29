import Image from "next/image";

export function Logo() {
  return (
    <i className="flex place-items-center pointer-events-none select-none before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-blue-100 before:to-blue-300 before:blur-2xl before:content-[&#x27;&#x27;] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-blue-200 after:via-blue-200 after:blur-2xl after:content-[&#x27;&#x27;] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-purple-900 after:dark:via-blue-500 after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
      <Image
        className="relative invert dark:invert-0 pointer-events-none select-none w-24 h-24 md:w-32 md:h-32"
        src="/brand/h-white.svg"
        alt="Henrique GC"
        width="100"
        height="180"
      />
    </i>
  );
}
