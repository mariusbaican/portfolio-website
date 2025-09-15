import { CSSProperties } from "react";

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
      <div
        className={`absolute inset-0 z-[-1] w-full h-full bg-radial from-[#ffffff] to-[${bgColor}] to-70%`}
        style={{ opacity: glowOpacity }}
      />
      {children}
    </section>
  );
}
