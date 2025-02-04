import Image from "next/image";
import { convertDateToHuman, convertPennyToPounds } from "~/app/scripts";
import type { User } from "~/app/types/item";
import { api } from "~/trpc/server";
import OrdersModalServer from "./orders-modal-server";

export default async function Hero({ user }: { user: User }) {
  const orders = await api.orders.fetchUserOrders({ user_id: user.id });
  const { username, avatar_url, name, balance = 0, date_registered } = user;
  return (
    <section className="grid grid-cols-12 gap-1 mobileLandscape:mx-0 mobileLandscape:px-0">
      <p className="col-span-full col-start-2">Hi {username}!</p>
      <div className="col-span-full row-span-12 flex justify-center mobileLandscape:col-span-6 mobileLandscape:col-start-1 tabletLandscape:col-span-3">
        <Image
          className="aspect-square"
          src={avatar_url ?? "/loading_background.png"}
          alt="users avatar"
          height={500}
          width={500}
        />
      </div>
      <h2 className="col-span-5 col-start-2 text-sm mobileLandscape:col-start-8 mobileLandscape:text-xl tabletLandscape:col-span-4 tabletLandscape:col-start-5">
        {name}
      </h2>
      <p className="col-span-5 col-start-8 w-full text-sm mobileLandscape:col-start-8 mobileLandscape:text-xl tabletLandscape:col-span-4 tabletLandscape:col-start-9">
        Balance: {convertPennyToPounds(balance)}
      </p>
      <p className="col-span-full col-start-2 text-sm mobileLandscape:col-start-8 tabletLandscape:col-start-5 tabletLandscape:text-base">
        Member since {convertDateToHuman(String(date_registered))}
      </p>
      <OrdersModalServer orders={orders} />
    </section>
  );
}
