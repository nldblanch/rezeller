import { SoftItemCard } from "~/app/_components/soft-item-card";
import { api } from "~/trpc/server";


export default async function Items({ user_id }: { user_id: string }) {
  const items = await api.items.fetchUserItems({user_id: Number(user_id)})
  return items ? (
    <section className="mobile-landscape:px-0 mobile-landscape:mx-0 grid grid-cols-12">
      <h3 className="col-span-full col-start-2">Your Items</h3>
      <ul className="col-span-full grid grid-cols-3 gap-4">
        {items.map((item) => {
          return (
            <div key={item.id} className={`aspect-square`}>
              <SoftItemCard item={item} />
            </div>
          );
        })}
      </ul>
    </section>
  ) : (
    <p>something went wrong</p>
  );
};
