"use client";

import type { Feedback, Item } from "~/app/types/item";
import Items from "./items";
import SearchBar from "~/app/_components/search-bar";
import { useState, useEffect } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import UserSearchBar from "./user-search-bar";

export default function Body({
  items,
  feedback,
}: {
  items: Item[];
  feedback: Feedback[];
}) {
  const [activeTab, setActiveTab] = useState("Shop");
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab) {
      setActiveTab(tab.charAt(0).toUpperCase() + tab.slice(1));
    } else {
      setActiveTab("Shop");
    }
  }, [searchParams]);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    if (tab === "Shop") {
      router.push(pathname);
    } else {
      router.push(`${pathname}?tab=${tab.toLowerCase()}`);
    }
  };

  return (
    <section className="w-full h-full mt-4">
      <nav className="flex h-12 w-full justify-between gap-6">
        <div className="tablet:gap-8 flex h-full items-center gap-4">
          <button className="max-tablet:hidden h-10 rounded-full border border-white px-12">
            Options
          </button>
          <button className="tablet:hidden flex aspect-square h-10 items-center justify-center rounded-full border border-white text-3xl">
            ☰
          </button>
          <ul className="tablet:gap-8 flex h-full w-full items-center justify-center gap-4">
            {["Shop", "About", "Feedback"].map((tab) => {
              return (
                <li
                  key={tab}
                  className={`font-bold hover:underline ${activeTab === tab ? "underline" : "text-zinc-400"}`}
                  onClick={() => handleTabClick(tab)}
                >
                  {tab}
                </li>
              );
            })}
          </ul>
        </div>
        <UserSearchBar />
      </nav>
      <Items userItems={items} />
    </section>
  );
}
