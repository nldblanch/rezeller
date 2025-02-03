import type { Item } from "~/app/types/item";
import { capitaliseFirstLetters, convertPennyToPounds } from "~/app/scripts";
import Link from "next/link";
import Image from "next/image";

export const ItemCard = ({ item }: { item: Item }) => {
  return (
    <li className="col-span-full">
      <Link
        href={`/items/${item.id}`}
        className="grid grid-cols-12 grid-rows-6 desktop:grid-rows-1"
      >
        <Image
          src={item.photo_source[0] ?? ""}
          alt={item.name}
          className="col-span-5 row-span-full aspect-square object-cover desktop:col-span-3"
        />

        <h3 className="col-span-7 px-2">{capitaliseFirstLetters(item.name)}</h3>
        <p className="px-2 font-semibold">{convertPennyToPounds(item.price)}</p>
      </Link>
    </li>
  );
};
