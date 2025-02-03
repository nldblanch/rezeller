"use client"
import { useLayoutEffect, useState } from "react";

import { SubcategoryDropdown } from "~/app/_components/subcategory-dropdown";
import { CategoryDropdown } from "./category-dropdown";
import { categories } from "~/app/constants/categories"; 

export const Categories = () => {
  const [categoryReducer, setCategoryReducer] = useState(0);
  const breakpoints = [
    { maxWidth: 340, reduceBy: 5 },
    { maxWidth: 450, reduceBy: 4 },
    { maxWidth: 540, reduceBy: 3 },
    { maxWidth: 620, reduceBy: 2 },
    { maxWidth: 680, reduceBy: 1 },
    { maxWidth: Infinity, reduceBy: 0 },
  ];
  useLayoutEffect(() => {
    function updateSize() {
      const category = breakpoints.find(
        (breakpoint) => window.innerWidth <= breakpoint.maxWidth
      ) || { reduceBy: 0 };
      setCategoryReducer(category.reduceBy);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const categoriesToShow = categories?.slice(
    0,
    categories.length - categoryReducer
  );
  const remainingCategories =
    categories?.slice(categories.length - categoryReducer) || [];

  return (
    <section className="col-span-full">
      <ul
        id={"categories"}
        className="flex justify-center flex-nowrap text-nowrap overflow-hidden pb-2"
      >
        {categoriesToShow?.map((category) => {
          return (
            <SubcategoryDropdown key={category.name} category={category.name} />
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
