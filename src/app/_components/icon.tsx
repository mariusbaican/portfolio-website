"use client";

import { CSSProperties } from "react";
import { motion } from "framer-motion";

export default function Icon({
  path,
  className = "",
  style = {},
}: {
  path: string;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <motion.div
      className={className}
      style={{
        WebkitMask: `url(${path}) no-repeat center / contain`,
        mask: `url(${path}) no-repeat center / contain`,
        ...style,
      }}
    />
  );
}
