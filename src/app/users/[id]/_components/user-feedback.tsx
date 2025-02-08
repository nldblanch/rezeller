import Link from "next/link";
import type { Feedback } from "~/app/types/item";
import FeedbackCard from "./feedback-card";
import { formatDistanceToNow } from "~/app/scripts";

type Rank = "positive" | "neutral" | "negative";

export default function UserFeedback({
  userFeedback,
}: {
  userFeedback: Feedback[];
}) {
  const ranks: Record<Rank, number> = { positive: 0, neutral: 0, negative: 0 };
  userFeedback.forEach(({ rating, date_left }) => {
    if (formatDistanceToNow(date_left) !== "More than a year ago") {
      if (rating > 3) ranks.positive += 1;
      else if (rating < 3) ranks.negative += 1;
      else ranks.neutral += 1;
    }
  });

  return (
    <section className="mobileLandscape:mx-0 mobileLandscape:px-0">
      <h3 className="col-start-1 mt-4 py-2 text-left text-2xl font-bold">
        Feedback ratings
      </h3>
      <h4 className="pb-3 text-base font-medium text-zinc-400">
        Last 12 months
      </h4>
      <ul className="flex gap-28 max-mobileLandscape:gap-14">
        {["Positive", "Neutral", "Negative"].map((rank) => {
          const rankKey = rank.toLowerCase() as Rank;
          return (
            <li key={rank} className="flex flex-col gap-1 font-bold">
              {rank}
              <Link href="/" className="underline">
                {ranks[rankKey]}
              </Link>
            </li>
          );
        })}
      </ul>
      <h3 className="col-start-1 mt-4 py-2 text-left text-2xl font-bold">
        All Feedback{" "}
        <span className="font-medium text-zinc-400">
          ({userFeedback.length})
        </span>
      </h3>
      <ul className="flex w-full flex-col gap-2">
        {userFeedback?.map((item) => {
          return (
            <li key={item.id} className="w-full py-4 shadow-md">
              <FeedbackCard userFeedback={item} />
            </li>
          );
        })}
      </ul>
    </section>
  );
}
