"use client";

import Lenis from "lenis";
import Scene from "@/components/Scene";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import FirstPart from "@/components/FirstPart";
import { mainFont, mainFont2, mainFont3 } from "./fonts";
import SecondPart from "@/components/SecondPart";

gsap.registerPlugin(ScrollTrigger);
const Page = () => {
  const [width, setWidth] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement | null>(null);
  const ref2 = useRef<HTMLDivElement | null>(null);
  const ref3 = useRef<HTMLDivElement | null>(null);
  const grdRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useGSAP(
    () => {
      const lenis = new Lenis();
      lenis.on("scroll", ScrollTrigger.update);

      gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });

      if (!ref.current || !canvasRef.current || !grdRef.current) return;

      gsap.ticker.lagSmoothing(0);

      gsap.set([canvasRef.current, grdRef.current], {
        y: 170,
      });

      gsap.set(ref3.current, {
        yPercent: 100
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          pin: true,
          start: "top top",
          end: "top -400%",
          // markers: true,
          scrub: 2,
        },
      });

      tl.to(
        canvasRef.current,
        {
          y: -110,
        },
        0
      );

      tl.to(
        grdRef.current,
        {
          y: -110,
          opacity: 1,
        },
        0
      );

      tl.to(ref2.current, {
        opacity: 0,
        duration: 0.015
      }, width! > 768 ? 0.15 : 0.13)

      tl.to(ref3.current, {
        yPercent: width! > 768 ? 0 : -15,
        opacity: 1,
        duration: width! > 768 ? 0.1 : 0.2
      }, width! > 768 ? 0.1 : 0.05)
    },
    { dependencies: [width], revertOnUpdate: true }
  );

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div
        className="h-screen bg-black relative flex flex-col items-center justify-center"
        ref={ref}
      >
        {width! > 768 ? (
          <div
            className="absolute bg-grd z-10 min-w-[300vw] min-h-[300vh] opacity-0"
            ref={grdRef}
          ></div>
        ) : (
          <div
            className="absolute bg-grd-sm z-10 min-w-[300vw] min-h-[300vh] opacity-0"
            ref={grdRef}
          ></div>
        )}
        <Navbar />
        <div className="z-20 absolute mb-22 flex flex-col items-center gap-6 md:top-35 top-30" ref={ref2}>
          <div
            className={
              mainFont3.className +
              " text-white text-[20px] md:text-[34px] xl:text-[50px] flex flex-col items-center  leading-[1.2] space-y-0 font-[400]"
            }
          >
            <div className="">
              This isn&apos;t just a chatbot. This is Kael,
            </div>
            <div className="">an advanced intelligence, designed for true</div>
            <div className="">comprehension.</div>
          </div>
          <div
            className={
              mainFont2.className +
              " text-white flex flex-col items-center leading-[1.2] text-[10px] md:text-[16px] xl:text-[17px]"
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
      <FirstPart ref={ref3} />
      <SecondPart />
      </div>
    </>
  );
};

export default Page;
