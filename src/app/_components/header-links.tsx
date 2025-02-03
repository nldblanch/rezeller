"use client";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import Link from "next/link";
import { logoutUser } from "../actions";

export default async function HeaderLinks({
  user_id,
}: {
  user_id: RequestCookie | undefined;
}) {
  return user_id ? (
    <>
      <li>
        <form action={async () => await logoutUser(user_id)}>
          <button type="submit">Logout</button>
        </form>
      </li>
      <li>
        <Link href="/profile">Profile</Link>
      </li>
    </>
  ) : (
    <li>
      <Link href="/login">Login</Link>
    </li>
  );
}
