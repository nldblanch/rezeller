"use client";

import type { Item } from "../types/item";
import { ItemCard } from "./item-card";

export default function ItemListClient({ items }: { items: Item[] }) {
  return (
    <ul className="col-span-full flex flex-col gap-4 tablet:col-span-6 tablet:col-start-4">
      {items.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </ul>
  );
}
