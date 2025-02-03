import { HydrateClient } from "~/trpc/server";
import { Categories } from "~/app/_components/categories";

export default async function Home() {
  return (
    <HydrateClient>
      <main className="grid h-full w-full grid-cols-12">
        <Categories />
      </main>
    </HydrateClient>
  );
}
