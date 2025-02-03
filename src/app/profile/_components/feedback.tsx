import { Feedback as FeedbackType } from "~/app/types/item";
import { api } from "~/trpc/server";


export const Feedback = ({ user_id }: { user_id: string }) => {
  const feedback:FeedbackType[] = []
  return feedback ? (
    <section className="mobile-landscape:px-0 mobile-landscape:mx-0 grid grid-cols-12 my-4">
      <h2 className="col-span-full text-center text-sm">
        Your seller rating:{" "}
        {(
          feedback.reduce((acc, el) => acc + el.rating, 0) / feedback.length
        ).toFixed(1)}
      </h2>
    </section>
  ) : (
    <p>something went wrong</p>
  );
};
