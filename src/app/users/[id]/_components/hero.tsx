import Image from "next/image";
import type { User } from "~/app/types/item";
import HeroFeedback from "./hero-feedback";

interface PartialUser {
  user: Partial<User>;
}
export const Hero = ({ user: { username, avatar_url } }: PartialUser) => {
  if (!avatar_url) avatar_url = "";
  return (
    <section className="grid grid-cols-12 gap-1 mobileLandscape:mx-0 mobileLandscape:px-0">
      <div className="col-span-6 row-span-12 flex justify-center mobileLandscape:col-span-6 mobileLandscape:col-start-1 tabletLandscape:col-span-3">
        <Image
          className="aspect-square h-full w-full"
          src={avatar_url}
          alt="users avatar"
          height={500}
          width={500}
        />
      </div>
      <h2 className="col-span-6 pl-4 text-sm mobileLandscape:text-xl">
        {username}
      </h2>
      <HeroFeedback user_id={1} />
    </section>
  );
};
