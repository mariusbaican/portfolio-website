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
  const { setBgColor, setTextColor, setPrimaryColor, setAccentColor } =
    useGlobalContext();
  const bgColor = useTransform(
    scrollYProgress,
    [0, 0.15, 0.2, 0.35, 0.4, 0.55, 0.6, 0.75, 0.8, 1],
    [
      "#1c0000",
      "#1c0000",
      "#2c0056",
      "#2c0056",
      "#1a0052",
      "#1a0052",
      "#00535d",
      "#00535d",
      "#005900",
      "#005900",
    ],
    { ease: easeIn }
  );

  const textColor = useTransform(
    scrollYProgress,
    [0, 0.15, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 0.85, 1],
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
    [0, 0.15, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 0.85, 1],
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

  const accentColor = useTransform(
    scrollYProgress,
    [0, 0.15, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 0.85, 1],
    [
      "#1c0000",
      "#1c0000",
      "#2c0056",
      "#2c0056",
      "#1a0052",
      "#1a0052",
      "#00535d",
      "#00535d",
      "#005900",
      "#005900",
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
    const unsubscribeAccent = accentColor.on("change", (latest) =>
      setAccentColor(latest)
    );

    // Set initial values
    setBgColor(bgColor.get());
    setTextColor(textColor.get());
    setPrimaryColor(primaryColor.get());
    setAccentColor(accentColor.get());

    // Cleanup subscriptions
    return () => {
      unsubscribeBg();
      unsubscribeText();
      unsubscribePrimary();
      unsubscribeAccent();
    };
  }, [
    setBgColor,
    setTextColor,
    setPrimaryColor,
    setAccentColor,
    bgColor,
    textColor,
    primaryColor,
    accentColor,
    scrollYProgress,
  ]);

  return (
    <motion.section
      ref={ref}
      className="flex flex-col items-center justify-center"
      style={{ background: bgColor }}
    >
      {children}
    </motion.section>
  );
}
