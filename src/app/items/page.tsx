import { HydrateClient } from "~/trpc/server";
import { Settings } from "~/app/_components/settings";
import ItemListServer from "~/app/_components/item-list-server";
import { Suspense } from "react";
import Loading from "./loading";

export default async function Items({
  searchParams: search,
}: {
  searchParams: Promise<{ search: string }>;
}) {
  const searchParams = await search;
  return (
    <HydrateClient>
      <main className="grid grid-cols-12 tablet:mx-2 tablet:px-2">
        <Settings />
        <Suspense fallback={<Loading />}>
          <ItemListServer searchParams={searchParams} />
        </Suspense>
      </main>
    </HydrateClient>
  );
}
