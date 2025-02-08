"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { User } from "~/app/types/item";
import { api } from "~/trpc/react";
export default function Body({ user }: { user: User }) {
  const activeTab = "Shop";
  const router = useRouter();
  const [{ feedbackCount }] =
    api.feedback.getUserFeedbackCount.useSuspenseQuery({
      user_id: user.id,
    });

  return (
    <>
      <nav className="col-span-full flex justify-between">
        <ul className="justify-left flex h-full w-full items-center gap-4 tablet:gap-8">
          {["Activity", "Account"].map((tab) => {
            return (
              <li
                key={tab}
                className={`text-lg font-bold hover:underline ${activeTab === tab ? "underline" : "text-zinc-400"}`}
                onClick={() =>
                  tab === "Activity"
                    ? router.push(`/profile`)
                    : router.push(`/profile/${tab.toLowerCase()}`)
                }
              >
                {tab}
              </li>
            );
          })}
        </ul>
        <div className="flex gap-[2px]">
          <Link href={`/users/${user.id}`} className="underline">
            {user.username}
          </Link>
          <p>{"\("}</p>
          <Link href={`/users/${user.id}/feedback`} className="underline">
            {feedbackCount}
          </Link>
          <p>{"\)"}</p>
        </div>
      </nav>
      <h2 className="bold col-span-full col-start-1 mt-2 py-4 text-left text-xl">
        Watchlist
      </h2>
    </>
  );
}
