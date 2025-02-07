"use client";

import "~/styles/globals.css";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import Image from "next/image";
export default function UserSearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialSearchValue = searchParams.get("search") ?? "";
  const [searchValue, setSearchValue] = useState(initialSearchValue);

  useEffect(() => {
    setSearchValue(initialSearchValue);
  }, [initialSearchValue]);

  return (
    <section className="flex h-full w-full max-w-96 grow">
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
        className="col-span-full mx-auto flex w-full max-w-lg items-center justify-center rounded-full bg-white"
      >
        <Image
          src={`/search_icon.png`}
          alt="search icon"
          width="30"
          height="30"
          className="ml-2 aspect-square h-6 w-6 rounded-none"
        />
        <input
          className="autofill-input w-full rounded-full bg-white px-2 text-base text-black focus:outline-none"
          placeholder="Search user items"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          name="search"
          type="text"
        />
      </form>
    </section>
  );
}
