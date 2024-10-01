import Count from "./components/Count";

export default function Home() {
  return (
    <section className="container py-24 text-center">
      <h1 className="mb-2 text-3xl font-bold">Next.js 14 Starter</h1>

      <p className="mb-10 font-medium">
        Next.js 14 starter template with TypeScript, Tailwind CSS, and
        Shadcn/ui.
      </p>

      <Count />
    </section>
  );
}
