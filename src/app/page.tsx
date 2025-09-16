import Hero from "./_sections/hero";
import ThemeHandler from "./_components/theme-handler";
import NavBar from "./_components/navbar";

export default function Home() {
  return (
    <ThemeHandler>
      <NavBar />
      <Hero />
      <Hero />
      <Hero />
      <Hero />
      <Hero />
    </ThemeHandler>
  );
}
