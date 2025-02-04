import { SoftItemCard } from "~/app/_components/soft-item-card";
import { api } from "~/trpc/server";

export default async function Items({ user_id }: { user_id: number }) {
  const items = await api.items.fetchUserItems({ user_id });
  return (
    <section className="grid grid-cols-12 mobileLandscape:mx-0 mobileLandscape:px-0">
      <h3 className="col-span-full col-start-2">Seller{"\'"}s Items</h3>
      <ul className="col-span-full grid grid-cols-3 gap-4">
        {items.map((item) => {
          return (
            <div key={item.id} className="aspect-square">
              <SoftItemCard item={item} />
            </div>
          );
        })}
      </ul>
    </section>
  );
}
