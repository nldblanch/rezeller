"use client";

import type { Feedback, Item } from "~/app/types/item";
import Items from "./items";
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
    <section className="mt-4 h-full w-full">
      <nav className="flex h-12 w-full justify-between gap-6">
        <div className="flex h-full items-center gap-4 tablet:gap-8">
          <button className="h-10 rounded-full border border-white px-12 max-tablet:hidden">
            Options
          </button>
          <button className="flex aspect-square h-10 items-center justify-center rounded-full border border-white text-3xl tablet:hidden">
            ☰
          </button>
          <ul className="flex h-full w-full items-center justify-center gap-4 tablet:gap-8">
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
