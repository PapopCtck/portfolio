import { Contact } from "@ppaop/features/Contact";
import { Footer } from "@ppaop/features/Footer";
import { Hero } from "@ppaop/features/Hero";
import { PreviousWork } from "@ppaop/features/PreviousWork";
import { TechStack } from "@ppaop/features/TechStack";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen min-w-screen">
      <Hero />
      <TechStack />
      <PreviousWork />
      <Contact />
      <Footer />
    </main>
  );
}
