import type { Item } from "~/app/types/item";
import { capitaliseFirstLetters, convertPennyToPounds } from "~/app/scripts";
import Link from "next/link";
import Image from "next/image";

export const ItemCard = ({
  item,
  textStyle,
}: {
  item: Item;
  textStyle?: string;
}) => {
  return (
    <li className="w-full max-h-40">
      <Link
        href={`/items/${item.id}`}
        className="h-full flex"
      >
        <Image
          src={item.photo_source[0] ?? ""}
          alt={item.name}
          className="max-h-40 max-w-40 aspect-square object-cover"
          height={500}
          width={500}
        />
        <hgroup>

        <h3 className={` px-2 ${textStyle ?? ""}`}>
          {capitaliseFirstLetters(item.name)}
        </h3>
        <p className={`px-2 font-semibold ${textStyle ?? ""}`}>
          {convertPennyToPounds(item.price)}
        </p>
        </hgroup>
      </Link>
    </li>
  );
};
