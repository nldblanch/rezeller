import Image from "next/image";
import { convertDateToHuman, convertPennyToPounds } from "~/app/scripts";
import type { User } from "~/app/types/item";

export const Hero = ({ user }: { user: User }) => {
  const { username, avatar_url, name, balance = 0, date_registered } = user;
  return (
    <section className="grid grid-cols-12 gap-1 mobile-landscape:mx-0 mobile-landscape:px-0">
      <p className="col-span-full col-start-2">Hi {username}!</p>
      <div className="col-span-full row-span-12 flex justify-center mobile-landscape:col-span-6 mobile-landscape:col-start-1 tablet-landscape:col-span-3">
        <Image
          className="aspect-square"
          src={avatar_url ?? ""}
          alt="users avatar"
          height={500}
          width={500}
        />
      </div>
      <h2 className="col-span-5 col-start-2 text-sm mobile-landscape:col-start-8 mobile-landscape:text-xl tablet-landscape:col-span-4 tablet-landscape:col-start-5">
        {name}
      </h2>
      <p className="col-span-5 col-start-8 w-full text-sm mobile-landscape:col-start-8 mobile-landscape:text-xl tablet-landscape:col-span-4 tablet-landscape:col-start-9">
        Balance: {convertPennyToPounds(balance)}
      </p>
      <p className="col-span-full col-start-2 text-[8px] mobile-landscape:col-start-8 tablet-landscape:col-start-5 tablet-landscape:text-[12px]">
        Member since {convertDateToHuman(String(date_registered))}
      </p>
    </section>
  );
};
