import Link from "next/link";

import { api, HydrateClient } from "~/trpc/server";

export default async function Test() {
  
  const user = await api.user.getUserById({id: "1"})
  const users = await api.user.getUsers()
  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
        <p>{user?.balance}</p>
      </main>
    </HydrateClient>
  );
}
