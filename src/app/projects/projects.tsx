import { FaCss3Alt, FaHtml5, FaJava, FaReact } from "react-icons/fa";
import Project, { ProjectProps } from "./project";
import { SiTypescript } from "react-icons/si";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import AnimationWhenInView, {
  fadeIn,
} from "../_components/animation-when-in-view";

export default function Projects() {
  return (
    <section className="flex flex-col w-full items-start justify-center">
      <h2 className="section-header underline decoration-[var(--primary)] mb-[2.75rem]">
        Projects
      </h2>
      <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 md:auto-rows-[1fr] gap-x-[3rem] lg:flex lg:flex-col gap-y-[4.5rem]">
        {projectsList.map((project) => {
          return (
            <AnimationWhenInView
              key={project.title}
              variants={fadeIn}
              once={true}
            >
              <Project
                title={project.title}
                description={project.description}
                imagePath={project.imagePath}
                checkItOutButton={project.checkItOutButton}
                sourceCodeButton={project.sourceCodeButton}
                techStack={project.techStack}
              />
            </AnimationWhenInView>
          );
        })}
      </div>
    </section>
  );
}

const projectsList: ProjectProps[] = [
  {
    title: "BrickBot Presentation\u00A0Website",
    description:
      "My first dive into web dev: a website revamp for the robotics team I mentor. I built it with speed, structure, and flexibility in mind. It's where I figured out how fun it is to make tech look good.",
    imagePath: "/assets/projects/bricksite.webp",
    checkItOutButton: "https://brickbot.ro/en/home",
    sourceCodeButton: "https://github.com/BrickBot15996/brickbot-website",
    techStack: [
      <RiNextjsFill
        key="nextjs-icon"
        aria-label="NextJS Icon"
      />,
      <FaReact
        key="react-icon"
        aria-label="React Icon"
      />,
      <SiTypescript
        key="typescript-icon"
        aria-label="TypeScript Icon"
      />,
      <RiTailwindCssFill
        key="tailwind-icon"
        aria-label="Tailwind CSS Icon"
      />,
    ],
  },
  {
    title: "BrickBot Custom\u00A0Linktree",
    description:
      "A custom LinkTree I hacked together in just 3 hours, but it still looks and feels polished. It's mobile-first, responsive, and perfectly tailored to our team’s brand. Quick to build, but solid enough to stick around long-term.",
    imagePath: "/assets/projects/bricklinks.webp",
    checkItOutButton: "https://links.brickbot.ro/",
    sourceCodeButton: "https://github.com/BrickBot15996/brickbot-links",
    techStack: [
      <RiNextjsFill
        key="nextjs-icon"
        aria-label="NextJS Icon"
      />,
      <FaReact
        key="react-icon"
        aria-label="React Icon"
      />,
      <SiTypescript
        key="typescript-icon"
        aria-label="TypeScript Icon"
      />,
      <RiTailwindCssFill
        key="tailwind-icon"
        aria-label="Tailwind CSS Icon"
      />,
    ],
  },
  {
    title: "BrickBot Documentation\u00A0Platform",
    description:
      "A simple hub where new members can quickly find guides, tutorials, and resources. It's lightweight and fast, built with MkDocs Material and GitHub Pages. It's basically our team's knowledge base, always one push away from an update.",
    imagePath: "/assets/projects/brickdocs.webp",
    checkItOutButton: "https://docs.brickbot.ro/",
    sourceCodeButton: "https://github.com/BrickBot15996/brickbot-docs",
    techStack: [
      <FaHtml5
        key="html-icon"
        aria-label="HTML Icon"
      />,
      <FaCss3Alt
        key="css-icon"
        aria-label="CSS Icon"
      />,
    ],
  },
  {
    title: "SimplicityFTC: Programming\u00A0Library",
    description:
      "This is a robotics library meant to simplify the experience of writing FTC code. It offers all of the necessary tools to have a competitive robot, while keeping the focus on an intuitive developer experience.",
    imagePath: "/assets/projects/simplicity.webp",
    checkItOutButton: "https://simplicityftc.github.io/SimplicityFTC-Docs/",
    sourceCodeButton: "https://github.com/SimplicityFTC",
    techStack: [
      <FaJava
        key="java-icon"
        aria-label="Java Icon"
      />,
      <FaHtml5
        key="html-icon"
        aria-label="HTML Icon"
      />,
      <FaCss3Alt
        key="css-icon"
        aria-label="CSS Icon"
      />,
    ],
  },
];
