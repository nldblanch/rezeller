"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { api } from "~/trpc/server";

export async function loginUser(index: string) {
  const users = await api.user.getUsers();
  const user_id = users[Number(index) - 1]?.id ?? 0;
  (await cookies()).set("user_id", String(user_id), { httpOnly: true });
  redirect("/profile");
}

export async function logoutUser() {
  const requestCookies = await cookies();

  requestCookies.delete("user_id");
  redirect("/");
}
