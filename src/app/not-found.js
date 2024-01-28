import Link from "next/link";

export default function NotFound() {
  return (
    <main className="my-24 w-full flex justify-center">
      <div className="flex flex-col items-center justify-center text-dark dark:text-light">
        <h1 className=" text-6xl font-bold w-full xl:text-8xl text-center">
          404
        </h1>
        <h2 className=" text-5xl font-bold w-full text-center mt-4 tracking-wide">
          Pagina no encontrada!
        </h2>
        <Link
          href="/"
          className="self-center mt-24 inline-block rounded-lg border-2 border-solid bg-dark px-4 py-4 font-semibold text-light hover:border-dark hover:bg-light hover:text-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light"
        >
          Ir a la página de inicio
        </Link>
      </div>
    </main>
  );
}
