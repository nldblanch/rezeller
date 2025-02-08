import Image from "next/image";
import { disguiseName, formatDistanceToNow } from "~/app/scripts";
import type { Feedback } from "~/app/types/item";
import { api } from "~/trpc/react";
export default function FeedbackCard({
  userFeedback,
}: {
  userFeedback: Feedback;
}) {
  const [{ username = "", feedbackCount }] =
    api.feedback.getUserFeedbackCount.useSuspenseQuery({
      user_id: userFeedback.buyer_id,
    });
  return (
    <div className="flex h-16 w-full flex-col justify-between">
      <div className="flex h-[20px] w-full items-center gap-2 text-zinc-400">
        <Image
          src="/plus.svg"
          alt="positive feedback"
          height={50}
          width={50}
          className="h-full w-fit rounded-full"
        />
        <p className="max-mobileLandscape:text-sm">
          {disguiseName(username)} ({feedbackCount})
        </p>
        <p className="text-xl font-bold max-mobileLandscape:text-lg">•</p>
        <p className="max-mobileLandscape:text-sm">
          {formatDistanceToNow(userFeedback.date_left)}
        </p>

        <p className="ml-auto max-mobileLandscape:text-sm">
          Verified <span className="max-mobileLandscape:hidden">purchase</span>
        </p>
      </div>
      <p className="w-full font-medium max-mobileLandscape:text-sm">
        {userFeedback.comment}
      </p>
    </div>
  );
}
