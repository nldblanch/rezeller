import Link from "next/link";
import type { User } from "~/app/types/item";

export default function HeroUsername({ user }: { user: User }) {
  return (
    <Link className="hover:underline" href={`/users/${user.id}`}>
      Sold by {user.username}
    </Link>
  );
}
