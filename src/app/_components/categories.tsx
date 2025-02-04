"use client";
import { Suspense, useLayoutEffect, useMemo, useState } from "react";

import { SubcategoryDropdown } from "~/app/_components/subcategory-dropdown";
import { CategoryDropdown } from "./category-dropdown";
import { categories } from "~/app/constants/categories";

export const Categories = () => {
  const [categoryReducer, setCategoryReducer] = useState(0);
  const breakpoints = useMemo(
    () => [
      { maxWidth: 500, reduceBy: 6 },
      { maxWidth: 640, reduceBy: 5 },
      { maxWidth: 850, reduceBy: 4 },
      { maxWidth: 1000, reduceBy: 3 },
      { maxWidth: 1150, reduceBy: 2 },
      { maxWidth: 1200, reduceBy: 1 },
      { maxWidth: Infinity, reduceBy: 0 },
    ],
    [],
  );

  useLayoutEffect(() => {
    function updateSize() {
      const category = breakpoints.find(
        (breakpoint) => window.innerWidth <= breakpoint.maxWidth,
      ) ?? { reduceBy: 0 };
      setCategoryReducer(category.reduceBy);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  });

  const categoriesToShow = categories?.slice(
    0,
    categories.length - categoryReducer,
  );
  const remainingCategories =
    categories?.slice(categories.length - categoryReducer) ?? [];

  return (
    <section className="col-span-full">
      <ul
        id={"categories"}
        className="flex flex-nowrap justify-center overflow-hidden text-nowrap pb-2"
      >
        {categoriesToShow?.map((category) => {
          return (
            <Suspense
              key={category.name}
              fallback={<div>Loading dropdown...</div>}
            >
              <SubcategoryDropdown category={category.name} />
            </Suspense>
          );
        })}
        {categoryReducer > 0 && (
          <CategoryDropdown
            categories={remainingCategories.map((category) => {
              return category.name;
            })}
          />
        )}
      </ul>
    </section>
  );
};
