"use client";
import Link from "next/link";

import { categories } from "../../constants/categories";
import { useSearchParams } from "next/navigation";
import { convertCategory } from "../../scripts";

export const CategoriesList = () => {
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get("category") ?? "";
  const activeSubcategory = searchParams.get("subcategory") ?? "";
  return (
    <ul>
      {categories.map((category) => {
        return (
          <div key={category.name}>
            <Link href={`/items?category=${category.name}`}>
              <li className="items-left flex h-full w-full flex-col text-base text-blue-600">
                <p
                  className={`h-full p-1 hover:bg-zinc-950 ${
                    activeCategory === category.name ? "bg-zinc-900" : ""
                  }`}
                >
                  {convertCategory(category.name)}
                </p>
              </li>
            </Link>
            {(activeCategory === category.name ||
              category.subcategories.includes(activeSubcategory)) && (
              <ul className="ml-2">
                {category.subcategories.map((subcategory) => {
                  return (
                    <Link
                      href={`/items?subcategory=${subcategory}`}
                      key={subcategory}
                    >
                      <li
                        className={`p-1 text-base text-blue-600 hover:bg-zinc-950 ${
                          activeSubcategory === subcategory ? "bg-zinc-900" : ""
                        }`}
                      >
                        {convertCategory(subcategory)}
                      </li>
                    </Link>
                  );
                })}
              </ul>
            )}
          </div>
        );
      })}
    </ul>
  );
};
