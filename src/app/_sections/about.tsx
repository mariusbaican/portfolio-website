"use client";

import BackGlow from "../_components/back-glow";
import {
  easeIn,
  easeInOut,
  easeOut,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useGlobalContext } from "../_components/context-provider";
import { useRef } from "react";

export default function About() {
  const { bgColor, textColor, primaryColor } = useGlobalContext();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.6", "end 0.4"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0, 1, 1, 0]);
  const translateY = useTransform(
    scrollYProgress,
    [0, 0.4, 0.6, 1],
    ["0vh", "-10vh", "10vh", "0vh"]
  );
  const scale = useTransform(
    scrollYProgress,
    [0, 0.4, 0.6, 1],
    [0.7, 1, 1, 0.7],
    { ease: [easeOut, easeInOut, easeIn] }
  );
  return (
    <motion.section
      ref={ref}
      className="w-screen h-screen flex flex-col items-center justify-center"
      style={{ opacity: opacity, translateY: translateY, scale: scale }}
    >
      <div className="w-[var(--content-width)] h-auto flex flex-row flex-wrap">
        <Principles
          bgColor={bgColor}
          textColor={textColor}
        />
        <Fuels
          bgColor={bgColor}
          textColor={textColor}
        />
        <Teamwork
          bgColor={bgColor}
          textColor={textColor}
        />
      </div>
    </motion.section>
  );
}

function Principles({
  bgColor,
  textColor,
}: {
  bgColor: string;
  textColor: string;
}) {
  return (
    <BackGlow
      bgColor={bgColor}
      className="flex flex-col flex-[0_0_50%]"
    >
      <motion.div
        className="font-bold text-[3rem] mb-[1.5rem]"
        style={{ color: textColor }}
      >
        My Principles.
      </motion.div>
      <div
        className="text-[1.25rem]/[2rem] font-regular mb-[0.5rem]"
        style={{ color: textColor }}
      >
        Skibidi - Biggest brainrot ever
        <br />
        67 - Worst thing to happen to me
        <br />
        W ME - For making this portfolio
        <br />
      </div>
    </BackGlow>
  );
}

function Fuels({ bgColor, textColor }: { bgColor: string; textColor: string }) {
  return (
    <BackGlow
      bgColor={bgColor}
      className="flex flex-col flex-[0_0_50%]"
    >
      <motion.div
        className="font-bold text-[3rem] mb-[1.5rem]"
        style={{ color: textColor }}
      >
        What Fuels Me.
      </motion.div>
      <div></div>
    </BackGlow>
  );
}

function Teamwork({
  bgColor,
  textColor,
}: {
  bgColor: string;
  textColor: string;
}) {
  return (
    <BackGlow
      bgColor={bgColor}
      className="flex flex-col flex-[0_0_50%]"
    >
      <motion.div
        className="font-bold text-[3rem] mb-[1.5rem]"
        style={{ color: textColor }}
      >
        How I Work in a Team.
      </motion.div>
      <div></div>
    </BackGlow>
  );
}
