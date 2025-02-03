import Link from "next/link";
import { convertCategory } from "~/app/scripts";
import { Subcategory } from "~/app/types/item";
import { api } from "~/trpc/server";

export default async function SubcategoryLink({
  category_id,
  subcategory_id,
}: {
  category_id: number;
  subcategory_id: number;
}) {
  // const subcategory = await api.
  // transform: (subcategories) => subcategories.filter((subcategory) => subcategory.id === subcategory_id),

  // const extractSubcategory = (filteredSubcategory: Subcategory[] | null) => {
  //   if (!filteredSubcategory)
  //     return { id: -1, category_id: -1, subcategory_name: "" };
  //   return filteredSubcategory[0];
  // };
  // const getSubcategoryName = (subcategory: Subcategory) => {
  //   return convertCategory(subcategory.subcategory_name);
  // };
  return (
    <Link href={`/items?subcategory=${subcategory_id}`}>
      <p className="p-1 text-[8px] italic hover:bg-zinc-950">
        subcategory name
      </p>
    </Link>
  );
}
