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
    api.feedback.getBuyerDetails.useSuspenseQuery({
      buyer_id: userFeedback.buyer_id,
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
        <p>
          {disguiseName(username)} ({feedbackCount})
        </p>
        <p className="text-xl font-bold">•</p>
        <p>{formatDistanceToNow(userFeedback.date_left)}</p>

        <p className="ml-auto">Verified purchase</p>
      </div>
      <p className="w-full text-base font-medium">{userFeedback.comment}</p>
    </div>
  );
}
