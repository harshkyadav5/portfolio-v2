import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { TechStack } from "@/components/sections/TechStack";
import { Projects } from "@/components/sections/Projects";
import { Education } from "@/components/sections/Education";
import { Certifications } from "@/components/sections/Certifications";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

const Index = () => {
  return (
    <main className="min-h-screen overflow-x-clip">
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Education />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
