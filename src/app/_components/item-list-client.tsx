"use client";

import { ItemCard } from "./item-card";

export default function ItemListClient({ items }: { items: any[] }) {
  return (
    <ul className="tablet:col-span-6 tablet:col-start-4 col-span-full grid grid-cols-12 gap-4">
      {items.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </ul>
  );
}