import {
  FaCss3Alt,
  FaGitAlt,
  FaHtml5,
  FaJava,
  FaJs,
  FaLinux,
  FaReact,
} from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import TechPill from "./tech-pill";
import { BiLogoFigma } from "react-icons/bi";
import { SiJavascript, SiTypescript } from "react-icons/si";

export default function TechStack() {
  return (
    <div className="flex flex-row items-center flex-wrap w-full h-auto gap-x-[1.5rem] md:gap-x-[2rem] lg:gap-x-0 justify-center xl:justify-between">
      {techList.map((tech, index) => {
        return (
          <TechPill
            key={tech.name}
            icon={tech.icon}
            name={tech.name}
            delay={index * 0.1}
            className={
              tech.className
                ? tech.className
                : "h-[var(--icon-size)] w-[var(--icon-size)] fill-[var(--primary)]"
            }
          />
        );
      })}
    </div>
  );
}

const techList: { icon: React.ReactNode; name: string; className?: string }[] =
  [
    {
      icon: (
        <div
          style={{
            WebkitMask: "url('/assets/c.svg') no-repeat center / contain",
            mask: "url('/assets/c.svg') no-repeat center / contain",
          }}
        />
      ),
      name: "C",
      className:
        "h-[var(--icon-size)] w-[var(--icon-size)] bg-[var(--primary)] fill-[var(--primary)]",
    },
    {
      icon: <FaJava aria-label="Java Icon" />,
      name: "Java",
    },
    {
      icon: <FaHtml5 aria-label="HTML Icon" />,
      name: "HTML",
    },
    {
      icon: <FaCss3Alt aria-label="CSS Icon" />,
      name: "CSS",
    },
    {
      icon: <SiJavascript aria-label="JavaScript Icon" />,
      name: "JavaScript",
    },
    {
      icon: <SiTypescript aria-label="TypeScript Icon" />,
      name: "TypeScript",
    },
    {
      icon: <RiTailwindCssFill aria-label="Tailwind CSS Icon" />,
      name: "Tailwind CSS",
    },
    {
      icon: <FaReact aria-label="React Icon" />,
      name: "React",
    },
    {
      icon: <RiNextjsFill aria-label="NextJS Icon" />,
      name: "NextJS",
    },
    {
      icon: <FaGitAlt aria-label="Git Icon" />,
      name: "Git",
    },
    {
      icon: <FaLinux aria-label="Linux Icon" />,
      name: "Linux",
    },
    {
      icon: <BiLogoFigma aria-label="Figma Icon" />,
      name: "Figma",
    },
  ];
