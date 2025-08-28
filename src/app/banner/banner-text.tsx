"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaCode } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export default function BannerText() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      className="h-[80vh] w-full flex flex-col items-center justify-center z-2"
    >
      <motion.h1
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeIn" }}
        className="main-header mb-[1.25rem] lg:mb-[1.5rem]"
      >
        Marius Baican
      </motion.h1>
      <div className="flex flex-col items-start space-y-[0.75rem] lg:space-y-[1rem]">
        <motion.div
          initial={{ opacity: 0, translateX: 60 }}
          animate={
            isInView
              ? { opacity: 1, translateX: 0 }
              : { opacity: 0, translateX: 60 }
          }
          transition={{
            type: "spring",
            bounce: 0.3,
            visualDuration: 0.3,
            ease: "easeInOut",
            delay: 0.3,
          }}
          className="flex flex-row space-x-[1rem] items-center"
        >
          <FaCode className="h-[var(--icon-size)] w-[var(--icon-size)] fill-[var(--primary)]" />
          <h2 className="text-[1.25rem]/[1.5rem] lg:text-[1.5rem]/[1.75rem] font-medium">
            Software Engineer
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, translateX: 60 }}
          animate={
            isInView
              ? { opacity: 1, translateX: 0 }
              : { opacity: 0, translateX: 60 }
          }
          transition={{
            type: "spring",
            bounce: 0.3,
            visualDuration: 0.3,
            ease: "easeInOut",
            delay: 0.4,
          }}
          className="flex flex-row space-x-[1rem] items-center"
        >
          <FaLocationDot className="h-[var(--icon-size)] w-[var(--icon-size)] fill-[var(--primary)]" />
          <h2 className="text-[1.25rem]/[1.5rem] lg:text-[1.5rem]/[1.75rem] font-medium">
            Bucharest, Romania
          </h2>
        </motion.div>
      </div>
    </div>
  );
}
