import type { Feedback as FeedbackType } from "~/app/types/item";

export default async function Feedback({ user_id }: { user_id: number }) {
  const feedback: FeedbackType[] = [];
  return feedback ? (
    feedback.length === 0 ? (
      <section className="my-4 grid grid-cols-12 mobile-landscape:mx-0 mobile-landscape:px-0">
        <h2 className="col-span-full text-center text-sm">
          No Seller Rating for {user_id}
        </h2>
      </section>
    ) : (
      <section className="my-4 grid grid-cols-12 mobile-landscape:mx-0 mobile-landscape:px-0">
        <h2 className="col-span-full text-center text-sm">
          Seller rating:{" "}
          {(
            feedback.reduce((acc, el) => acc + el.rating, 0) / feedback.length
          ).toFixed(1) ?? 1}
        </h2>
      </section>
    )
  ) : (
    <p>something went wrong</p>
  );
}
