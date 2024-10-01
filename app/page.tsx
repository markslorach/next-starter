import Count from "./components/Count";

export default function Home() {
  return (
    <main>
      <section className="container py-24 text-center">
        <h1 className="mb-4 text-4xl font-bold sm:text-5xl">
          Next.js 14 Starter Template
        </h1>

        <p className="mx-auto mb-10 max-w-xl text-xl font-medium text-zinc-500 sm:text-2xl">
          Next.js 14 starter template using TypeScript, Tailwind CSS, and
          Shadcn/ui.
        </p>

        <Count />
      </section>
    </main>
  );
}
