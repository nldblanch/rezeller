import { convertDateToHuman, convertPennyToPounds } from "~/app/scripts";
import { User } from "~/app/types/item";

export const Hero = ({ user }: { user: User }) => {
  let {
    username,
    avatar_url,
    name,
    balance = 0,
    date_registered,
  } = user;
  if (!avatar_url) avatar_url = ""
  return (
    <section className="mobile-landscape:px-0 mobile-landscape:mx-0 grid grid-cols-12 gap-1">
      <p className="col-span-full col-start-2">Hi {username}!</p>
      <div className="mobile-landscape:col-span-6 mobile-landscape:col-start-1 tablet-landscape:col-span-3 col-span-full row-span-12 flex justify-center">
        <img
          className="aspect-square h-full w-full"
          src={avatar_url}
          alt="users avatar"
        />
      </div>
      <h2 className="mobile-landscape:col-start-8 mobile-landscape:text-xl tablet-landscape:col-start-5 tablet-landscape:col-span-4 col-span-5 col-start-2 text-sm">
        {name}
      </h2>
      <p className="mobile-landscape:col-start-8 mobile-landscape:text-xl tablet-landscape:col-start-9 tablet-landscape:col-span-4 col-span-5 col-start-8 w-full text-sm">
        Balance: {convertPennyToPounds(balance)}
      </p>
      <p className="mobile-landscape:col-start-8 tablet-landscape:col-start-5 tablet-landscape:text-[12px] col-span-full col-start-2 text-[8px]">
        Member since {convertDateToHuman(String(date_registered))}
      </p>
    </section>
  );
};
