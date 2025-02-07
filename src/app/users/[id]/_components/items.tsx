import { SoftItemCard } from "~/app/_components/soft-item-card";
import type { Item } from "~/app/types/item";

export default function Items({ userItems }: { userItems: Item[] }) {
  return (
    <section className="grid grid-cols-12 mobileLandscape:mx-0 mobileLandscape:px-0">
      <h3 className="bold col-span-full col-start-1 mt-2 py-4 text-left text-3xl">
        All items
      </h3>
      <ul className="col-span-full grid grid-cols-3 gap-4">
        {userItems.map((item) => {
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
