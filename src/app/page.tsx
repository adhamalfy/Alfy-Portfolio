import Navigation from "@/components/Navigation";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-gray-50 dark:bg-[#0F1419] transition-colors duration-300">
      <Navigation />
      <Hero />
    </main>
  );
}
