import type { Item } from "~/app/types/item";
import CategoryLink from "./category-link";
import SubcategoryLink from "./subcategory-link";
import { convertDateToHuman } from "~/app/scripts";

export const SmallInfo = ({ item }: { item: Item }) => {
  const { tag, category_id, subcategory_id, date_listed } = item;
  return (
    <section className="m-2 grid grid-cols-12 p-2 opacity-50 mobile-landscape:mx-0 mobile-landscape:px-0">
      <div className="col-span-12 mb-3 border-t" />
      <h4 className="col-span-full mb-1">About this item</h4>
      <p className="col-span-3 mb-1 text-[8px]">{tag}</p>
      <div className="col-span-full flex items-center">
        <p className="pr-1 text-[8px]">From</p>
        <CategoryLink id={category_id} />
        <SubcategoryLink
          category_id={category_id}
          subcategory_id={subcategory_id}
        />
      </div>
      <p className="col-span-12 mt-1 text-[8px]">
        Last updated {convertDateToHuman(String(date_listed))}
      </p>
      <div className="col-span-12 mt-3 border-t" />
    </section>
  );
};
