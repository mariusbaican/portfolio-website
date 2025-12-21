import Hero from "./_sections/hero";
import ThemeHandler from "./_components/theme-handler";
import NavBar from "./_components/navbar";
import Development from "./_sections/development";
import About from "./_sections/about";

export default function Home() {
  return (
    <ThemeHandler>
      <NavBar />
      <Hero />
      <About />
      <Hero />
      <Hero />
      <Development />
    </ThemeHandler>
  );
}
