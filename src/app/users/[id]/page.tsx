import { Hero } from "./_components/hero";
import Feedback from "./_components/hero-feedback";
import Items from "./_components/items";
import { api } from "~/trpc/server";
import Body from "./_components/body";

export default async function User({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const user_id = Number((await params).id);
  if (isNaN(user_id)) return <p>Invalid user ID</p>;

  const user = await api.user.getUserById({ id: String(user_id) });
  const items = await api.items.fetchUserItems({ user_id });
  const feedback = await api.feedback.fetchUserFeedback({ user_id });
  return user ? (
    <main className="mx-2 px-2">
      <Hero user={user} />
      {/* <Feedback user_id={user_id} /> */}
      <Body items={items} feedback={feedback} />
    </main>
  ) : (
    <p>nothing</p>
  );
}
