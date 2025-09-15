import Link from "next/link";
import Icon from "./icon";

export default function NavBar() {
  return (
    <section className="fixed inset-0 w-full h-fit px-[1.5rem] py-[1.5rem] inline-flex items-center bg-transparent select-none">
      <div className="flex flex-row gap-x-[2rem] mr-auto items-center">
        <Icon
          path="/assets/icons/logo.svg"
          className="bg-[var(--hero-primary)] w-[3rem] h-auto aspect-1/1"
        />
        <span className="text-[1.5rem] text-[var(--hero-text)] font-medium">
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
            className="bg-[var(--hero-primary)] w-[2.25rem] h-auto aspect-1/1 hover:bg-[var(--hero-accents)] hover:scale-110 active:scale-90 active:bg-[var(--hero-primary)] transition-all duration-200"
          />
        </Link>
        <Link
          href="https://github.com/mariusbaican"
          target="_blank"
        >
          <Icon
            path="/assets/icons/github.svg"
            className="bg-[var(--hero-primary)] w-[2.25rem] h-auto aspect-1/1 hover:bg-[var(--hero-accents)] hover:scale-110 active:scale-90 active:bg-[var(--hero-primary)] transition-all duration-200"
          />
        </Link>
        <Link
          href="mailto:marius.baican18@gmail.com"
          target="_blank"
        >
          <Icon
            path="/assets/icons/email.svg"
            className="bg-[var(--hero-primary)] w-[2.25rem] h-auto aspect-1/1 hover:bg-[var(--hero-accents)] hover:scale-110 active:scale-90 active:bg-[var(--hero-primary)] transition-all duration-200"
          />
        </Link>
        <Link
          href="/resume.pdf"
          target="_blank"
        >
          <Icon
            path="/assets/icons/resume.svg"
            className="bg-[var(--hero-primary)] w-[2.25rem] h-auto aspect-1/1 hover:bg-[var(--hero-accents)] hover:scale-110 active:scale-90 active:bg-[var(--hero-primary)] transition-all duration-200"
          />
        </Link>
      </div>
    </section>
  );
}
