"use client";

import { useState } from "react";
import { ItemCard } from "~/app/_components/item-card";
import type { Item, Order } from "~/app/types/item";

export default function OrdersModalClient({
  orders,
  items,
}: {
  orders: Order[];
  items: Item[];
}) {
  const [modalActive, setModalActive] = useState(false);
  const [closing, setClosing] = useState(false);

  const closeModal = () => {
    setClosing(true);
    setTimeout(() => {
      setClosing(false);
    }, 800);
    setModalActive(false);
  };

  return (
    <>
      <a
        className="col-span-full col-start-2 cursor-pointer text-sm hover:underline mobileLandscape:col-start-8 tabletLandscape:col-start-5 tabletLandscape:text-base"
        onClick={() => setModalActive(true)}
      >
        View your orders
      </a>
      <section
        className={`fixed left-1/2 top-1/2 h-[100dvh] w-[100dvw] -translate-x-1/2 -translate-y-1/2 overflow-y-scroll bg-zinc-100 p-5 ${modalActive ? "block animate-[slideIn_0.8s_ease-in_forwards]" : "hidden"} ${closing ? "animate-[slideOut_0.8s_ease-in_forwards]" : ""}`}
      >
        <button
          className="absolute right-0 top-0 px-4 py-2 text-black hover:bg-zinc-200"
          onClick={() => closeModal()}
        >
          Close
        </button>
        {items.map((item) => (
          <ItemCard key={item.id} item={item} textStyle={"text-black"} />
        ))}
      </section>
    </>
  );
}
