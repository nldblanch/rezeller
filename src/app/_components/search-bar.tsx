"use client";

import "~/styles/globals.css";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import Image from "next/image";
export default function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialSearchValue = searchParams.get("search") || "";
  const [searchValue, setSearchValue] = useState(initialSearchValue);

  useEffect(() => {
    setSearchValue(initialSearchValue);
  }, [initialSearchValue]);

  return (
    <section className="mobile-landscape:col-span-6 mobile-landscape:col-start-4 col-span-full w-full">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const { value } = e.currentTarget.search;
          if (value) {
            router.push(`/items?search=${value}`);
          } else {
            router.push("/items");
          }
        }}
        className="col-span-full mx-auto flex w-full max-w-lg justify-center rounded-full bg-white"
      >
        <Image
          src={`/search_icon.png`}
          alt="search icon"
          width="20"
          height="12"
        />
        <input
          className="autofill-input w-full rounded-full bg-white px-2 text-sm text-black focus:outline-none"
          placeholder="Search for anything"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          name="search"
          type="text"
        />
        <button className="rounded-full bg-blue-600 px-2 text-sm" type="submit">
          Search
        </button>
      </form>
    </section>
  );
}
