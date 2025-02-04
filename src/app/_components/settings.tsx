import { Suspense } from "react";
import { CategoriesList } from "./categories-list";
import { PriceInput } from "./price-input";

export const Settings = () => {
  return (
    <section className="col-span-3 h-full pr-2 max-tablet:hidden tabletLandscape:col-span-2 tabletLandscape:col-start-2 desktop:col-span-1 desktop:col-start-3">
      <hgroup>
        <h2 className="text-base">Category</h2>
        <Suspense fallback={<div>Loading categories...</div>}>
          <CategoriesList />
        </Suspense>
      </hgroup>
      <hgroup className="pt-2">
        <h2 className="text-base">Price</h2>
        <PriceInput />
      </hgroup>
      <hgroup className="pt-2">
        <h2 className="text-base">Seller</h2>
        <p className="p-1 text-sm">Includes / excludes</p>
      </hgroup>
    </section>
  );
};
