"use server";

import type { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { cookies } from "next/headers";
import { notFound, redirect } from "next/navigation";

export async function loginUser(userId: string) {
  (await cookies()).set("user_id", userId, { httpOnly: true });
  redirect("/profile");
}

export async function logoutUser(userId: RequestCookie) {
  const requestCookies = await cookies();
  if (requestCookies.get("user_id") !== userId) return notFound();
  else {
    requestCookies.delete("user_id");
    redirect("/");
  }
}
