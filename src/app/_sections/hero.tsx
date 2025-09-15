"use client";

import BackGlow from "../_components/back-glow";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="w-[100vw] h-[100vh] flex flex-col items-center justify-center">
      <BackGlow
        className="px-[5rem] py-[10rem]"
        glowOpacity={0.1}
        bgColor="var(--hero-bg)"
      >
        <div className="flex flex-col items-center">
          <div className="flex flex-row gap-[1.5rem] justify-center">
            <motion.span
              initial={{ opacity: 0, filter: "blur(20px)" }}
              animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
              transition={{ duration: 0.4, ease: "easeIn" }}
              className="text-[var(--hero-primary)] font-extralight italic text-[5rem]"
            >
              People
            </motion.span>
            <motion.span
              initial={{ opacity: 0, filter: "blur(20px)" }}
              animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
              transition={{ delay: 0.4, duration: 0.4, ease: "easeIn" }}
              className="text-[var(--hero-text)] font-extrabold text-[5rem]"
            >
              shape technology.
            </motion.span>
          </div>
          <motion.span
            initial={{ opacity: 0, filter: "blur(20px)" }}
            animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
            transition={{ delay: 0.8, duration: 0.4, ease: "easeIn" }}
            className="text-[var(--hero-text)] font-extrabold text-[5rem]"
          >
            Not vice-versa.
          </motion.span>
          <motion.div
            initial={{ opacity: 0, filter: "blur(20px)" }}
            animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
            transition={{ delay: 1.2, duration: 0.4, ease: "easeIn" }}
            className="flex flex-row gap-[0.5rem] justify-center mt-[2rem]"
          >
            <span className="text-[var(--hero-text)] font-regular text-[1.75rem]">
              Software Engineer
            </span>
            <span className="text-[var(--hero-primary)] font-regular text-[1.75rem]">
              •
            </span>
            <span className="text-[var(--hero-text)] font-regular text-[1.75rem]">
              Bucharest, Romania
            </span>
          </motion.div>
        </div>
      </BackGlow>
    </section>
  );
}
