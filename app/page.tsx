"use client";

import Lenis from "lenis";
import Scene from "@/components/Scene";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import Navbar from "@/components/Navbar";
import FirstPart from "@/components/FirstPart";
import { mainFont, mainFont2, mainFont3 } from "./fonts";

gsap.registerPlugin(ScrollTrigger);
const Page = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const grdRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useGSAP(
    () => {
      const lenis = new Lenis();
      lenis.on("scroll", ScrollTrigger.update);

      gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });

      gsap.ticker.lagSmoothing(0);

      gsap.set([canvasRef.current, grdRef.current], {
        y: 170,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          pin: true,
          start: "top top",
          end: "top -300%",
          // markers: true,
          scrub: 2,
        },
      });

      tl.to(
        canvasRef.current,
        {
          y: -140,
        },
        0
      );

      tl.to(
        grdRef.current,
        {
          y: -140,
          opacity: 1,
        },
        0
      );
    },
    { dependencies: [] }
  );

  return (
    <div
      className="h-screen bg-black relative flex flex-col items-center justify-center"
      ref={ref}
    >
      <div
        className="absolute bg-grd z-10 min-w-[300vw] min-h-[300vh] opacity-0"
        ref={grdRef}
      ></div>
      <Navbar />
      <div className="z-20 absolute mb-22 flex flex-col items-center gap-6 md:top-35 top-30">
        <div
          className={
            mainFont3.className +
            " text-white text-sm md:text-[30px] xl:text-[42px] flex flex-col items-center  leading-[1.2] space-y-0 font-[600] uppercase"
          }
        >
          <div className="">This is more than a chatbot. This is Kael,</div>
          <div className="">an advanced intelligence, designed for true</div>
          <div className="">comprehension.</div>
        </div>
        <div
          className={
            mainFont2.className +
            " text-white flex flex-col items-center leading-[1.2] text-[10px] md:text-[16px]"
          }
        >
          <div className="hidden xl:block">
            Discover Nisa AI — a conversational system crafted with genuine
            emotion, precision, and insight. It perceives,
          </div>
          <div className="xl:hidden">
            Discover Nisa AI — a conversational system crafted with genuine
          </div>
          <div className="xl:hidden">
            emotion, precision, and insight. It perceives, evolves, and
          </div>
          <div className="xl:hidden">
            engages with authentic, human-centric awareness.
          </div>
          <div className="hidden xl:block">
            evolves, and engages with authentic, human-centric awareness.
          </div>
        </div>
        <div>
          <button
            className={
              mainFont2.className +
              " cursor-pointer py-2 px-3 md:px-6 bg-white text-black rounded-full text-[10px] md:text-[16px] uppercase"
            }
          >
            Start the Dialogue ↗️
          </button>
        </div>
      </div>
      <Scene canvasRef={canvasRef} />

      {/* <FirstPart /> */}
    </div>
  );
};

export default Page;
