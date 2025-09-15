import { CSSProperties } from "react";

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
    <div
      className={className}
      style={{
        WebkitMask: `url(${path}) no-repeat center / contain`,
        mask: `url(${path}) no-repeat center / contain`,
        ...style,
      }}
    />
  );
}
