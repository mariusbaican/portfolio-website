"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

export default function AnimationWhenInView({
  children,
  variants,
  once = true,
}: {
  children: React.ReactNode;
  variants: Variants;
  once?: boolean;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: once, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      className="w-full h-full"
    >
      {children}
    </motion.div>
  );
}

export const fadeIn: Variants = {
  initial: {
    opacity: 0,
    translateY: 60,
  },
  animate: {
    opacity: 1,
    translateY: 0,
    transition: {
      type: "spring",
      bounce: 0.2,
      visualDuration: 0.5,
      ease: "easeIn",
    },
  },
};
