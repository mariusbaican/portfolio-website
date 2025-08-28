import Banner from "./banner/banner";
import Projects from "./projects/projects";
import TechStack from "./tech-stack/tech-stack";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center">
      <Banner />
      <section className="w-[var(--content-width)] h-auto flex flex-col items-center justify-center my-[6.5rem] lg:my-[8rem] gap-y-[6.5rem] lg:gap-y-[8rem]">
        <TechStack />
        <Projects />
      </section>
    </section>
  );
}
