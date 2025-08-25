import Banner from "./_sections/banner";
import TechStack from "./_sections/tech-stack";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center">
      <Banner />
      <section className="w-[var(--content-width)] h-auto flex flex-col items-center justify-center my-[4rem] lg:mt-[6.5rem] mb-[6.5rem] lg:mb-[8rem]">
        <TechStack />
      </section>
    </section>
  );
}
