import { Feedback } from "./_components/feedback";
import { Hero } from "./_components/hero";
import Items from "./_components/items";
import { api } from "~/trpc/server";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";

export default async function Profile() {
  const user_id = (await cookies()).get("user_id")?.value || "";

  if (!user_id) {
    console.error("❌ No user ID found in cookies");
    return notFound();
  }

  const user = await api.user.getUserById({ id: user_id });
  return user ? (
    <main className="mobile-landscape:mx-2 mobile-landscape:px-2">
      <Hero user={user} />
      <Feedback user_id={user_id} />
      <Items user_id={user_id} />
    </main>
  ) : (
    <p>something went wrong</p>
  );
}
