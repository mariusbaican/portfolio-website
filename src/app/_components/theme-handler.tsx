"use client";

import { useEffect, useRef } from "react";
import { useGlobalContext } from "./context-provider";
import { easeIn, motion, useScroll, useTransform } from "framer-motion";

export default function ThemeHandler({
  children,
}: {
  children: React.ReactNode;
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const { setBgColor, setTextColor, setPrimaryColor } = useGlobalContext();
  const bgColor = useTransform(
    scrollYProgress,
    [0, 0.1, 0.2, 0.35, 0.45, 0.6, 0.7, 0.85, 0.95, 1],
    [
      "#1c0000",
      "#1c0000",
      "#17001C",
      "#17001C",
      "#05001C",
      "#05001C",
      "#001B1C",
      "#001B1C",
      "#001C09",
      "#001C09",
    ],
    { ease: easeIn }
  );

  const textColor = useTransform(
    scrollYProgress,
    [0, 0.1, 0.2, 0.35, 0.45, 0.6, 0.7, 0.85, 0.95, 1],
    [
      "#f2e7e5",
      "#f2e7e5",
      "#ece8f0",
      "#ece8f0",
      "#e6eaf2",
      "#e6eaf2",
      "#e1eded",
      "#e1eded",
      "#e6ece5",
      "#e6ece5",
    ],
    { ease: easeIn }
  );

  const primaryColor = useTransform(
    scrollYProgress,
    [0, 0.1, 0.2, 0.35, 0.45, 0.6, 0.7, 0.85, 0.95, 1],
    [
      "#b70101",
      "#b70101",
      "#8001b7",
      "#8001b7",
      "#0a01b7",
      "#0a01b7",
      "#01aeb7",
      "#01aeb7",
      "#10b701",
      "#10b701",
    ],
    { ease: easeIn }
  );

  useEffect(() => {
    // Subscribe to MotionValue changes instead of just getting current value
    const unsubscribeBg = bgColor.on("change", (latest) => setBgColor(latest));
    const unsubscribeText = textColor.on("change", (latest) =>
      setTextColor(latest)
    );
    const unsubscribePrimary = primaryColor.on("change", (latest) =>
      setPrimaryColor(latest)
    );

    // Set initial values
    setBgColor(bgColor.get());
    setTextColor(textColor.get());
    setPrimaryColor(primaryColor.get());

    // Cleanup subscriptions
    return () => {
      unsubscribeBg();
      unsubscribeText();
      unsubscribePrimary();
    };
  }, [
    setBgColor,
    setTextColor,
    setPrimaryColor,
    bgColor,
    textColor,
    primaryColor,
    scrollYProgress,
  ]);

  return (
    <motion.section
      ref={ref}
      className="flex flex-col items-center justify-center z-[-10000]"
      style={{ background: bgColor }}
    >
      {children}
    </motion.section>
  );
}
