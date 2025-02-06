"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

export default function ImageBar({
  photo_source,
  setMainPhoto,
  containerStyle,
}: {
  photo_source: string[];
  setMainPhoto: React.Dispatch<React.SetStateAction<string | undefined>>;
  containerStyle: string;
}) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollX, setScrollX] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);
  const [canScroll, setCanScroll] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  const imageWidth = 208;
  const totalWidth = photo_source.length * imageWidth;

  const updateScrollLimits = useCallback(() => {
    if (carouselRef.current && containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const needsScrolling = totalWidth > containerWidth;
      setCanScroll(needsScrolling);
      setMaxScroll(needsScrolling ? -(totalWidth - containerWidth) : 0);
      if (!needsScrolling) setScrollX(0);
    }
  }, [totalWidth]);

  useEffect(() => {
    updateScrollLimits();
    window.addEventListener("resize", updateScrollLimits);
    return () => window.removeEventListener("resize", updateScrollLimits);
  }, [updateScrollLimits]);

  useEffect(() => {
    const timeout = setTimeout(() => setIsScrolling(false), 300);
    return () => clearTimeout(timeout);
  }, [scrollX]);

  const scroll = (direction: "left" | "right") => {
    if (!canScroll || isScrolling) return;
    setIsScrolling(true);

    setScrollX((prev) => {
      let newX = direction === "left" ? prev + imageWidth : prev - imageWidth;
      if (newX > 0) newX = 0;
      if (newX < maxScroll) newX = maxScroll;
      return newX;
    });
  };

  return (
    <div
      ref={containerRef}
      className={`relative col-span-full mt-4 w-full overflow-hidden ${containerStyle}`}
    >
      {canScroll && (
        <button
          className={`absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 text-black shadow-md ${
            scrollX === 0 ? "cursor-not-allowed opacity-50" : ""
          }`}
          onClick={() => scroll("left")}
          disabled={scrollX === 0 || isScrolling}
        >
          ◀
        </button>
      )}

      <motion.div
        ref={carouselRef}
        className="flex flex-nowrap gap-2"
        animate={{ x: scrollX }}
        transition={{ type: "tween", duration: 0.3 }}
        drag={canScroll ? "x" : false}
        dragConstraints={{ right: 0, left: maxScroll }}
      >
        {photo_source.map((photo, index) => (
          <motion.div
            key={index}
            className="aspect-square w-[200px] flex-shrink-0"
          >
            <button
              className="h-full w-full"
              onClick={() =>
                setMainPhoto((prev) => (prev !== photo ? photo : prev))
              }
            >
              <Image
                src={photo}
                alt="hero shot"
                className="h-full w-full rounded-lg object-cover"
                height={500}
                width={500}
              />
            </button>
          </motion.div>
        ))}
      </motion.div>

      {canScroll && (
        <button
          className={`absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 text-black shadow-md ${
            scrollX === maxScroll ? "cursor-not-allowed opacity-50" : ""
          }`}
          onClick={() => scroll("right")}
          disabled={scrollX === maxScroll || isScrolling}
        >
          ▶
        </button>
      )}
    </div>
  );
}
