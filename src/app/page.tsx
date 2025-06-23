import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen">
        <div className="flex items-center justify-center min-h-screen px-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hello, I&apos;m <span className="text-blue-500">Alfy</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400">
              Full Stack Developer
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen py-20 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">About</h2>
          <p className="text-gray-600 dark:text-gray-400">Coming soon...</p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen py-20 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Skills</h2>
          <p className="text-gray-600 dark:text-gray-400">Coming soon...</p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen py-20 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Projects</h2>
          <p className="text-gray-600 dark:text-gray-400">Coming soon...</p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen py-20 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Contact</h2>
          <p className="text-gray-600 dark:text-gray-400">Coming soon...</p>
        </div>
      </section>
    </main>
  );
}
