import { Categories } from "~/app/_components/categories";

import { api, HydrateClient } from "~/trpc/server";
import Hero from "./_components/hero";
import { SmallInfo } from "./_components/small-info";
import { Description } from "./_components/description";
import { notFound } from "next/navigation";

export default async function Item({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const id = (await params).id;
  const item = await api.items.fetchItem({ id: String(id) });
  const user = await api.user.getUserById({ id: String(item.user_id) });
  if (!user) return notFound();
  return (
    <HydrateClient>
      <main className="min-h-screen mobile-landscape:mx-2 mobile-landscape:px-2">
        <Categories />
        <Hero item={item} user={user} />
        <SmallInfo item={item} />
        <Description item={item} />
      </main>
    </HydrateClient>
  );
}
