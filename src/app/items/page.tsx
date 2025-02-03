import { HydrateClient } from "~/trpc/server";
import { Settings } from "~/app/_components/settings";
import ItemListServer from "~/app/_components/item-list-server";

export default async function Items({
  searchParams:search,
}: {
  searchParams: Promise<{search: string}>;
}) {
  // 
  const searchParams = (await search)
  console.log(searchParams, "here")
  return (
    <HydrateClient>
      <main className="rid grid-cols-12 tablet:mx-2 tablet:px-2">
        <Settings />
        <ItemListServer searchParams={searchParams} />
      </main>
    </HydrateClient>
  );
}
