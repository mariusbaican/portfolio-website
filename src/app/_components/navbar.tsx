"use client";

import Link from "next/link";
import Icon from "./icon";
import { useGlobalContext } from "./context-provider";

export default function NavBar() {
  const { textColor, primaryColor } = useGlobalContext();

  return (
    <section className="fixed inset-0 w-full h-fit px-[1.5rem] py-[1.5rem] inline-flex items-center bg-transparent select-none">
      <div className="flex flex-row gap-x-[2rem] mr-auto items-center">
        <Icon
          path="/assets/icons/logo.svg"
          className="w-[3rem] h-auto aspect-1/1"
          style={{ background: primaryColor }}
        />
        <span
          className="text-[1.5rem] font-medium"
          style={{ color: textColor }}
        >
          Marius Baican
        </span>
      </div>
      <div className="flex flex-row gap-x-[1.75rem] ml-auto items-center">
        <Link
          href="https://www.linkedin.com/in/marius-baican/"
          target="_blank"
        >
          <Icon
            path="/assets/icons/linkedin.svg"
            className="w-[2.25rem] h-auto aspect-1/1 hover:scale-110 hover:brightness-80 active:brightness-100 active:scale-90 transition-transform duration-200"
            style={{ background: primaryColor }}
          />
        </Link>
        <Link
          href="https://github.com/mariusbaican"
          target="_blank"
        >
          <Icon
            path="/assets/icons/github.svg"
            className="w-[2.25rem] h-auto aspect-1/1 hover:scale-110 hover:brightness-80 active:brightness-100 active:scale-90 transition-transform duration-200"
            style={{ background: primaryColor }}
          />
        </Link>
        <Link
          href="mailto:marius.baican18@gmail.com"
          target="_blank"
        >
          <Icon
            path="/assets/icons/email.svg"
            className="w-[2.25rem] h-auto aspect-1/1 hover:scale-110 hover:brightness-80 active:brightness-100 active:scale-90 transition-transform duration-200"
            style={{ background: primaryColor }}
          />
        </Link>
        <Link
          href="/resume.pdf"
          target="_blank"
        >
          <Icon
            path="/assets/icons/resume.svg"
            className="w-[2.25rem] h-auto aspect-1/1 hover:scale-110 hover:brightness-80 active:brightness-100 active:scale-90 transition-transform duration-200"
            style={{ background: primaryColor }}
          />
        </Link>
      </div>
    </section>
  );
}
