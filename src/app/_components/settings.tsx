import { Suspense } from "react";
import { CategoriesList } from "../items/_components/categories-list";
import { PriceInput } from "./price-input";

export const Settings = () => {
  return (
    <section className="col-span-3 h-full pr-2 max-tablet:hidden">
      <hgroup className="max-w-96 ml-auto">
        <h2 className="text-base">Category</h2>
        <Suspense fallback={<div>Loading categories...</div>}>
          <CategoriesList />
        </Suspense>
      </hgroup>
      <hgroup className="pt-2 max-w-96 ml-auto">
        <h2 className="text-base">Price</h2>
        <PriceInput />
      </hgroup>
      <hgroup className="pt-2 max-w-96 ml-auto">
        <h2 className="text-base">Seller</h2>
        <p className="p-1 text-sm">Includes / excludes</p>
      </hgroup>
    </section>
  );
};
