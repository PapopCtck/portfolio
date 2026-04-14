import { Footer } from "@ppaop/features/Footer";
import { Hero } from "@ppaop/features/Hero";
import { Navbar } from "@ppaop/features/Navbar";
import { PreviousWork } from "@ppaop/features/PreviousWork";
import { TechStack } from "@ppaop/features/TechStack";

export default function Home() {
  return (
    <main className="flex min-h-screen min-w-screen flex-col">
      <Navbar />
      <Hero />
      <TechStack />
      <PreviousWork />
      <Footer />
    </main>
  );
}
