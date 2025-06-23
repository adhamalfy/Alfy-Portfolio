import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen">
        <Hero />
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen py-20">
        <About />
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen py-20">
        <Skills />
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen py-20">
        <Projects />
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen py-20">
        <Contact />
      </section>

      <Footer />
    </main>
  );
}
