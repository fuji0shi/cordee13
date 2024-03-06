import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import type { ItemInfiniteMovingCards } from "@/types";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: ItemInfiniteMovingCards[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards",
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse",
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_5%,white_95%,transparent)]",
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {items.map((item, idx) => (
          <li
            className="relative w-[200px] max-w-full flex-shrink-0 rounded-2xl border border-slate-700 px-8 py-6 md:w-[300px]"
            style={{
              background:
                "linear-gradient(180deg, var(--slate-800), var(--slate-900)",
            }}
            key={idx}
          >
            <blockquote className="flex cursor-pointer flex-col gap-4">
              <div className="relative z-20 flex flex-row items-center">
                <span className="flex flex-col gap-1">
                  <span className="text-sm font-bold leading-[1.6] ">
                    {item.category}
                  </span>
                  <span className="text-foreground-500 text-xs leading-[1.6]">
                    {item.date}
                  </span>
                </span>
              </div>
              <div className="relative z-20 h-[120px] w-full">
                <Image
                  alt="Card background"
                  className="rounded-xl object-cover p-2"
                  src="/images/landscape-moutains-alpes.webp"
                  fill={true}
                />
              </div>
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              <span className="relative z-20 line-clamp-3 text-justify text-sm font-normal leading-[1.6]">
                {item.description}
              </span>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
