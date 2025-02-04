import { HydrateClient } from "~/trpc/server";
import { Categories } from "~/app/_components/categories";
import FrontPageHero from "./_components/front-page-hero";

export default async function Home() {
  return (
    <HydrateClient>
      <main className="grid h-full w-full grid-cols-12">
        <Categories />
        <FrontPageHero />
      </main>
    </HydrateClient>
  );
}
