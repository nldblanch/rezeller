"use client";
import { useState } from "react";
import { categories as rawCategories } from "~/app/constants/categories";

import { convertCategory } from "~/app/scripts/convertCategory";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export const SubcategoryDropdown = ({ category }: { category: string }) => {
  const searchParams = useSearchParams();
  const currentUrlCategory = searchParams.get("category") ?? "";

  const categoryObj = rawCategories.find((el) => el.name === category);
  const subcategories = categoryObj ? categoryObj.subcategories : [];

  const [showMore, setShowMore] = useState(false);
  const [hasVisited, setHasVisited] = useState(false);

  return (
    <div
      className={`text-[8px] hover:bg-zinc-950 hover:shadow-lg ${currentUrlCategory === category ? "bg-zinc-900" : ""} `}
      onMouseLeave={() => {
        if (!hasVisited) setShowMore(false);
      }}
      onMouseEnter={() => {
        setShowMore(true);
        setHasVisited(false);
      }}
    >
      <Link href={`/items?category=${category}`}>
        <li className="h-full w-full p-2">{convertCategory(category)}</li>
      </Link>
      {showMore && (
        <ul
          onMouseEnter={() => setHasVisited(true)}
          onMouseLeave={() => setShowMore(false)}
          className="absolute left-1/2 w-[90dvw] -translate-x-1/2 rounded border border-gray-300 bg-white p-2 shadow-lg"
        >
          {subcategories?.map((subcategory) => (
            <Link href={`/items?subcategory=${subcategory}`} key={subcategory}>
              <li className="p-1 text-[8px] text-black hover:bg-zinc-100">
                {convertCategory(subcategory)}
              </li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
};
