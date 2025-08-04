import { mainFont2, mainFont3 } from "@/app/fonts";
import React, { RefObject } from "react";

const P1FP = ({ ref }: { ref: RefObject<HTMLDivElement | null> }) => {
  return (
    <div
      className="absolute p-10 w-full h-full flex flex-col justify-end items-center z-30 opacity-0"
      ref={ref}
    >
      <div
        className={
          mainFont3.className + " text-[16px] md:text-[30px] xl:text-[46px]"
        }
      >
        Kael doesn&apos;t just answer — she connects.
      </div>
      <div
        className={
          mainFont2.className +
          " flex flex-col justify-center items-center leading-[1.2] text-[10px] md:text-[16px] xl:text-[17px]"
        }
      >
        <div className="hidden xl:flex">
          Most AI are designed to react, but Nisa is designed to empathize.
          Whether a user communicates with anger, interest,
        </div>
        <div className="xl:hidden flex">
          Most AI are designed to react, but Nisa is designed
        </div>
        <div className="xl:hidden flex">
          to empathize. Whether a user communicates with
        </div>
        <div className="xl:hidden flex">
          anger, interest, or ease, she recognizes the sentiment.
        </div>
        <div className="hidden xl:flex">
          or ease, she recognizes the sentiment. Using advanced tone analysis,
          memory stacking, and a seamless
        </div>
        <div className="xl:hidden flex">
          Using advanced tone analysis, memory stacking, and a
        </div>
        <div className="hidden xl:flex">
          interface, Nisa AI elevates every interaction beyond a simple
          exchange. It becomes{" "}
        </div>
        <div className="xl:hidden flex">
          seamless interface, Nisa AI elevates every interaction
        </div>
        <div className="xl:hidden flex">
          beyond a simple exchange. Kael becomes significant.
        </div>
        <div className="hidden xl:flex">significant.</div>
      </div>
    </div>
  );
};

export default P1FP;
