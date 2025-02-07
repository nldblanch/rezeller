"use client";

import "~/styles/globals.css";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import Image from "next/image";
export default function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialSearchValue = searchParams.get("search") ?? "";
  const [searchValue, setSearchValue] = useState(initialSearchValue);

  useEffect(() => {
    setSearchValue(initialSearchValue);
  }, [initialSearchValue]);

  return (
    <section className="col-span-full flex h-full w-full mobileLandscape:col-span-6 mobileLandscape:col-start-4">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const form = e.currentTarget as HTMLFormElement;
          const input = form.elements.namedItem("search") as HTMLInputElement;
          const value = input?.value.trim();

          if (value) {
            router.push(`/items?search=${value}`);
          } else {
            router.push("/items");
          }
        }}
        className="col-span-full mx-auto flex min-h-8 w-full items-center justify-center rounded-full bg-white tablet:max-w-lg"
      >
        <Image
          src={`/search_icon.png`}
          alt="search icon"
          width="32"
          height="32"
          className="ml-2 aspect-square h-6 w-6 rounded-none"
        />
        <input
          className="autofill-input w-full rounded-full bg-white px-2 text-base text-black focus:outline-none"
          placeholder="Search for anything"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          name="search"
          type="text"
        />
        <button
          className="text-baSE h-full rounded-full bg-blue-600 px-2"
          type="submit"
        >
          Search
        </button>
      </form>
    </section>
  );
}
