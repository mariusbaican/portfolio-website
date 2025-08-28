"use client";
import { motion, useInView } from "framer-motion";
import { cloneElement, isValidElement, useRef } from "react";

type TechPillProps = {
  icon: React.ReactNode;
  name: string;
  className?: string;
  delay: number;
};

export default function TechPill({
  icon,
  name,
  className = "",
  delay,
}: TechPillProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const renderIcon = isValidElement(icon)
    ? cloneElement(icon as React.ReactElement<{ className?: string }>, {
        className: [
          (icon as React.ReactElement<{ className?: string }>).props.className,
          className,
          ``,
        ]
          .filter(Boolean)
          .join(" "),
      })
    : icon;

  return (
    <motion.div
      ref={ref}
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
        delay: delay,
      }}
      className="bg-[var(--bg-accents)] w-auto h-auto flex flex-row items-center px-[1rem] py-[1rem] lg:py-[0.75rem] drop-shadow-[0_4px_6px_var(--primary-shadows)] rounded-full lg:mr-[2rem] xl:mr-[1.8rem] 2xl:mr-[3rem] mt-[1.5rem]"
    >
      {renderIcon}
      <p className="text-[1.25rem]/[1.5rem] lg:text-[1.5rem]/[1.75rem] font-medium ml-[1rem] hidden lg:block">
        {name}
      </p>
    </motion.div>
  );
}
