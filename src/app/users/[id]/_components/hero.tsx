import Image from "next/image";
import type { User } from "~/app/types/item";

interface PartialUser {
  user: Partial<User>;
}
export const Hero = ({ user: { username, avatar_url } }: PartialUser) => {
  if (!avatar_url) avatar_url = "";
  return (
    <section className="grid grid-cols-12 gap-1 mobile-landscape:mx-0 mobile-landscape:px-0">
      <div className="col-span-full row-span-12 flex justify-center mobile-landscape:col-span-6 mobile-landscape:col-start-1 tablet-landscape:col-span-3">
        <Image
          className="aspect-square h-full w-full"
          src={avatar_url}
          alt="users avatar"
        />
      </div>
      <h2 className="col-span-5 col-start-2 text-sm mobile-landscape:col-start-8 mobile-landscape:text-xl tablet-landscape:col-span-4 tablet-landscape:col-start-5">
        {username}
      </h2>
    </section>
  );
};
