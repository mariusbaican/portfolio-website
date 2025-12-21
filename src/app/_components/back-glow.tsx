"use client";

import { CSSProperties } from "react";
import { motion } from "framer-motion";

export default function BackGlow({
  children,
  className = "",
  style = {},
  bgColor,
  glowOpacity = 0.1,
}: {
  children: React.ReactNode;
  className?: string;
  style?: CSSProperties;
  bgColor: string;
  glowOpacity?: number;
}) {
  return (
    <section
      className={`relative w-fit h-fit ${className}`}
      style={{ ...style }}
    >
      <motion.div
        className={`absolute inset-0 w-full h-full bg-radial from-[#ffffff] to-[${bgColor}] to-65%`}
        style={{ opacity: glowOpacity }}
      />
      {children}
    </section>
  );
}
