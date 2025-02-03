"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { api } from "~/trpc/server";

export async function loginUser(index: string) {
  const users = await api.user.getUsers();
  console.log(users);
  const user_id = users[Number(index) - 1]?.id ?? 0;
  console.log(user_id);
  let redirectPath = "";
  try {
    (await cookies()).set("user_id", String(user_id), { httpOnly: true });
    redirectPath = "/profile";
  } catch (error) {
    console.log(error);
    redirectPath = "/";
  } finally {
    redirect(redirectPath);
  }
}

export async function logoutUser() {
  const requestCookies = await cookies();

  requestCookies.delete("user_id");
  redirect("/");
}
