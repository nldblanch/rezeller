import { CategoriesList } from "./categories-list";
import { PriceInput } from "./price-input";

export const Settings = () => {
  return (
    <section className="col-span-3 h-full pr-2 max-tablet:hidden tablet-landscape:col-span-2 tablet-landscape:col-start-2 desktop:col-span-1 desktop:col-start-3">
      <hgroup>
        <h2 className="text-xs">Category</h2>
        <CategoriesList />
      </hgroup>
      <hgroup className="pt-2">
        <h2 className="text-xs">Price</h2>
        <PriceInput />
      </hgroup>
      <hgroup className="pt-2">
        <h2 className="text-xs">Seller</h2>
        <p className="p-1 text-[8px]">Includes / excludes</p>
      </hgroup>
    </section>
  );
};
