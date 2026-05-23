import Navbar from "./Components/Navbar";
import Skills from "./skills/page";
import ContactPage from "./contact/page";
import Experience from "./experience/page";
import Hero from "./hero/page";
import Projects from "./projects/page";
import About from "./about/page";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero/>
      <About />
      <Skills />
      <Projects />
      <Experience />
      <ContactPage />
    </>
  );
}
