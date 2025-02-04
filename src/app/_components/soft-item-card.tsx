import Link from "next/link";
import type { Item } from "../types/item";
import { capitaliseFirstLetters, convertPennyToPounds } from "../scripts";
import Image from "next/image";

export const SoftItemCard = ({
  item,
  styles,
}: {
  item: Item;
  styles?: string;
}) => {
  return (
    <li
      className={`col-span-full aspect-square mobile-landscape:col-span-6 tablet-landscape:col-span-4 desktop:col-span-2 ${styles}`}
    >
      <Link href={`/items/${item.id}`}>
        <Image
          src={item.photo_source[0] ?? ""}
          alt={item.name}
          className="aspect-square rounded-lg object-cover"
          width="500"
          height="500"
        />
        <h3 className="px-2 pt-2">{capitaliseFirstLetters(item.name)}</h3>
        <p className="px-2 font-semibold">{convertPennyToPounds(item.price)}</p>
      </Link>
    </li>
  );
};
