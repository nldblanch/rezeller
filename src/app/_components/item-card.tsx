import type { Item } from "~/app/types/item";
import { capitaliseFirstLetters, convertPennyToPounds } from "~/app/scripts";
import Link from "next/link";

export const ItemCard = ({ item }: { item: Item }) => {
  return (
    <li className="col-span-full">
      <Link
        href={`/items/${item.id}`}
        className="desktop:grid-rows-1 grid grid-cols-12 grid-rows-6"
      >
        <img
          src={item.photo_source[0]}
          alt={item.name}
          className="desktop:col-span-3 col-span-5 row-span-full aspect-square object-cover"
        />

        <h3 className="col-span-7 px-2">{capitaliseFirstLetters(item.name)}</h3>
        <p className="px-2 font-semibold">{convertPennyToPounds(item.price)}</p>
      </Link>
    </li>
  );
};
