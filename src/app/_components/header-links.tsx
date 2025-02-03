"use client";
import type { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import Link from "next/link";
import { logoutUser } from "../actions";

export default function HeaderLinks({
  user_id,
}: {
  user_id: RequestCookie | undefined;
}) {
  return user_id ? (
    <>
      <li>
        <form action={async () => await logoutUser()}>
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
