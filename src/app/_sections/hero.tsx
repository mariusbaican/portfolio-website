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

export default function Hero() {
  const { bgColor, textColor, primaryColor } = useGlobalContext();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.6", "end 0.4"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0, 1, 1, 0]);
  const translateY = useTransform(
    scrollYProgress,
    [0, 0.3, 0.4, 0.6, 0.7, 1],
    ["0vh", "0vh", "-10vh", "10vh", "0vh", "0vh"]
  );
  const scale = useTransform(
    scrollYProgress,
    [0, 0.4, 0.6, 1],
    [0.6, 1, 1, 0.6],
    { ease: [easeOut, easeInOut, easeIn] }
  );

  return (
    <motion.section
      ref={ref}
      className="w-screen h-screen flex flex-col items-center justify-center"
      style={{ opacity, scale }}
    >
      <BackGlow
        className="px-[5rem] py-[10rem]"
        glowOpacity={0.09}
        bgColor={bgColor}
      >
        <div className="flex flex-col items-center z-2">
          <div className="flex flex-row gap-[1.5rem] justify-center">
            <motion.span
              initial={{ opacity: 0, filter: "blur(20px)" }}
              animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
              transition={{ duration: 0.4, ease: "easeIn" }}
              className="font-extralight italic text-[5rem]"
              style={{ color: primaryColor }}
            >
              People
            </motion.span>
            <motion.span
              initial={{ opacity: 0, filter: "blur(20px)" }}
              animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
              transition={{ delay: 0.4, duration: 0.4, ease: "easeIn" }}
              className="font-extrabold text-[5rem]"
              style={{ color: textColor }}
            >
              shape technology.
            </motion.span>
          </div>
          <motion.span
            initial={{ opacity: 0, filter: "blur(20px)" }}
            animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
            transition={{ delay: 0.8, duration: 0.4, ease: "easeIn" }}
            className="font-extrabold text-[5rem]"
            style={{ color: textColor }}
          >
            Not vice-versa.
          </motion.span>
          <motion.div
            initial={{ opacity: 0, filter: "blur(20px)" }}
            animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
            transition={{ delay: 1.2, duration: 0.4, ease: "easeIn" }}
            className="flex flex-row gap-[0.5rem] justify-center mt-[2rem]"
          >
            <span
              className="font-regular text-[1.75rem]"
              style={{ color: textColor }}
            >
              Software Engineer
            </span>
            <span
              className="font-regular text-[1.75rem]"
              style={{ color: primaryColor }}
            >
              •
            </span>
            <span
              className="font-regular text-[1.75rem]"
              style={{ color: textColor }}
            >
              Bucharest, Romania
            </span>
          </motion.div>
        </div>
      </BackGlow>
    </motion.section>
  );
}
