import Image from "next/image";
import { convertDateToHuman, convertPennyToPounds } from "~/app/scripts";
import type { User } from "~/app/types/item";
import { api } from "~/trpc/server";

export default async function Hero({ user }: { user: User }) {
  const orders = await api.orders.fetchUserOrders({ user_id: user.id });
  const { username, avatar_url, name, balance = 0, date_registered } = user;
  return (
    <section className="mobile-landscape:mx-0 mobile-landscape:px-0 grid grid-cols-12 gap-1">
      <p className="col-span-full col-start-2">Hi {username}!</p>
      <div className="mobile-landscape:col-span-6 mobile-landscape:col-start-1 tablet-landscape:col-span-3 col-span-full row-span-12 flex justify-center">
        <Image
          className="aspect-square"
          src={avatar_url ?? ""}
          alt="users avatar"
          height={500}
          width={500}
        />
      </div>
      <h2 className="mobile-landscape:col-start-8 mobile-landscape:text-xl tablet-landscape:col-span-4 tablet-landscape:col-start-5 col-span-5 col-start-2 text-sm">
        {name}
      </h2>
      <p className="mobile-landscape:col-start-8 mobile-landscape:text-xl tablet-landscape:col-span-4 tablet-landscape:col-start-9 col-span-5 col-start-8 w-full text-sm">
        Balance: {convertPennyToPounds(balance)}
      </p>
      <p className="mobile-landscape:col-start-8 tablet-landscape:col-start-5 tablet-landscape:text-base col-span-full col-start-2 text-sm">
        Member since {convertDateToHuman(String(date_registered))}
      </p>
      <p className="mobile-landscape:col-start-8 tablet-landscape:col-start-5 tablet-landscape:text-base col-span-full col-start-2 text-sm hover:underline cursor-pointer">
        View your orders
      </p>
    </section>
  );
}
