import Link from "next/link";
import { Item } from "../types/item";
import { capitaliseFirstLetters, convertPennyToPounds } from "../scripts";

export const SoftItemCard = ({ item, styles }: { item: Item, styles?:string }) => {
  return (
    <li
      className={`col-span-full aspect-square mobile-landscape:col-span-6 tablet-landscape:col-span-4 desktop:col-span-2 ${styles}`}
    >
      <Link href={`/items/${item.id}`}>
        <img
          src={item.photo_source[0]}
          alt={item.name}
          className="aspect-square object-cover rounded-lg"
        />
        <h3 className="px-2 pt-2">{capitaliseFirstLetters(item.name)}</h3>
        <p className="px-2 font-semibold">{convertPennyToPounds(item.price)}</p>
      </Link>
    </li>
  );
};
