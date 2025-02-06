"use client";
import { useState } from "react";

import HeroUsername from "./hero-username";
import type { Item, User } from "~/app/types/item";
import { capitaliseFirstLetters, convertPennyToPounds } from "~/app/scripts";
import Image from "next/image";
import MobileImageBar from "./mobile-image-bar";
import DesktopImageBar from "./desktop-image-bar";

export default function Hero({ item, user }: { item: Item; user: User }) {
  const { name = "", photo_source = [], photo_description, price = 0 } = item;
  const [mainPhoto, setMainPhoto] = useState(photo_source[0]);
  return (
    <section className="grid grid-cols-12">
      <Image
        className="tabletLandscape:col-span-6 col-span-10 col-start-2 aspect-square w-full object-cover"
        src={mainPhoto ?? "/loading_background.png"}
        alt={photo_description}
        height={500}
        width={500}
      />
      {photo_source?.length > 1 && (
        <MobileImageBar
          photo_source={photo_source}
          setMainPhoto={setMainPhoto}
        />
      )}
      <div className="tabletLandscape:col-span-6 col-span-12 p-4">
        <h2 className="text-2xl">{capitaliseFirstLetters(name)}</h2>
        <div className="my-2 border-t" />
        <HeroUsername user={user} />
        <div className="my-2 border-t" />
        <p className="text-2xl">{convertPennyToPounds(price)}</p>
        <br />
        <div className="flex w-full flex-col gap-2">
          <button className="rounded-full bg-blue-500 p-2 text-base font-bold text-white">
            Buy it now
          </button>
          <button className="rounded-full bg-white p-2 text-base text-black">
            Add to basket
          </button>
          <button className="rounded-full bg-white p-2 text-base text-black">
            Add to Watchlist
          </button>
        </div>
      </div>
        <DesktopImageBar
          photo_source={photo_source}
          setMainPhoto={setMainPhoto}
        />
    </section>
  );
}
