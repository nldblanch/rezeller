import { api } from "~/trpc/server";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import Body from "./_components/body";

export default async function Profile() {
  const user_id = (await cookies()).get("user_id")?.value ?? "";

  if (!user_id) {
    console.error("❌ No user ID found in cookies");
    return notFound();
  }

  const user = await api.user.getUserById({ id: user_id });
  if (!user) {
    console.error("❌ No user data found");
    return notFound();
  }
  return (
    <main className="mx-2 grid grid-cols-12 px-2">
      <h1 className="bold col-span-full col-start-1 mt-2 py-4 text-left text-2xl">
        My profile
      </h1>

      <Body user={user} />
    </main>
  );
}
