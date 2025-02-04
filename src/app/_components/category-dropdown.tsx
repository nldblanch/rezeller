"use client";
import Link from "next/link";
import { useState } from "react";
import { convertCategory } from "~/app/scripts";

export const CategoryDropdown = ({ categories }: { categories: string[] }) => {
  const [showMore, setShowMore] = useState(false);
  const [hasVisited, setHasVisited] = useState(false);
  return (
    <li
      className="text center p-2 text-base text-blue-500 hover:bg-zinc-950"
      onMouseLeave={() => {
        if (!hasVisited) setShowMore(false);
      }}
      onMouseEnter={() => {
        setShowMore(true);
        setHasVisited(false);
      }}
    >
      See More
      {showMore && (
        <ul
          onMouseEnter={() => setHasVisited(true)}
          onMouseLeave={() => setShowMore(false)}
          className="absolute left-1/2 mt-2 w-[90dvw] -translate-x-1/2 rounded border border-gray-300 bg-white p-2 shadow-lg"
        >
          {categories?.map((category) => (
            <Link href={`/items?category=${category}`} key={category}>
              <li className="p-1 text-base text-black hover:bg-zinc-100">
                {convertCategory(category)}
              </li>
            </Link>
          ))}
        </ul>
      )}
    </li>
  );
};
