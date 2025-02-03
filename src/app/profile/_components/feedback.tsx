import type { Feedback as FeedbackType } from "~/app/types/item";

export const Feedback = ({ user_id }: { user_id: string }) => {
  console.log(user_id);
  const feedback: FeedbackType[] = [];
  return feedback ? (
    <section className="my-4 grid grid-cols-12 mobile-landscape:mx-0 mobile-landscape:px-0">
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
