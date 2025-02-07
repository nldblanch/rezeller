import { SoftItemCard } from "~/app/_components/soft-item-card";
import { Item } from "~/app/types/item";

export default function Items({ userItems }: { userItems: Item[] }) {
  return (
    <section className="mobileLandscape:mx-0 mobileLandscape:px-0 grid grid-cols-12">
      <h3 className="col-span-full col-start-1 bold text-3xl text-left py-4 mt-2">All items</h3>
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
