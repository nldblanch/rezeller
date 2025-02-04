"use client";
import { useState } from "react";

import HeroUsername from "./hero-username";
import type { Item, User } from "~/app/types/item";
import { capitaliseFirstLetters, convertPennyToPounds } from "~/app/scripts";
import Image from "next/image";

export default function Hero({ item, user }: { item: Item; user: User }) {
  const { name = "", photo_source = [], photo_description, price = 0 } = item;
  const [mainPhoto, setMainPhoto] = useState(photo_source[0]);
  return (
    <section className="grid grid-cols-12">
      <Image
        className="col-span-12 col-start-1 aspect-square w-full object-cover mobileLandscape:col-span-6"
        src={mainPhoto ?? "/loading_background.png"}
        alt={photo_description}
        height={500}
        width={500}
      />
      <div className="col-span-12 p-4 mobileLandscape:col-span-6">
        <h2 className="text-2xl">{capitaliseFirstLetters(name)}</h2>
        <div className="my-2 border-t" />
        <HeroUsername user={user} />
        <div className="my-2 border-t" />
        <p className="text-2xl">{convertPennyToPounds(price)}</p>
        <ul className="mt-2 grid grid-cols-3 gap-2">
          {photo_source.map((photo, index) => {
            return (
              <li key={index} className="aspect-square">
                <button
                  className="h-full w-full"
                  onClick={() =>
                    setMainPhoto((prev) => {
                      if (prev !== photo) return photo;
                      return prev;
                    })
                  }
                >
                  <Image
                    src={photo}
                    alt="hero shot"
                    className="col-span-1 h-full w-full rounded-lg object-cover"
                    height={500}
                    width={500}
                  />
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
