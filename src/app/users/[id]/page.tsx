import { Hero } from "./_components/hero";
import Feedback from "./_components/feedback";
import Items from "./_components/items";
import { api } from "~/trpc/server";

export default async function User({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const user_id = Number((await params).id);
  if (isNaN(user_id)) return <p>Invalid user ID</p>;

  const user = await api.user.getUserById({ id: String(user_id) });

  return user ? (
    <main className="mobile-landscape:mx-2 mobile-landscape:px-2">
      <Hero user={user} />
      <Feedback user_id={user_id} />
      <Items user_id={user_id} />
    </main>
  ) : (
    <p>nothing</p>
  );
}
