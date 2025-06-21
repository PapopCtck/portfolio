import { About } from "@ppaop/features/About";
// import { Footer } from "@ppaop/features/Footer";
// import { GetInTouch } from "@ppaop/features/GetInTouch";
import { Hero } from "@ppaop/features/Hero";
import { PreviousWork } from "@ppaop/features/PreviousWork";
import { Soon } from "@ppaop/features/Soon";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <About />
      <PreviousWork />
      {/* <GetInTouch />
      <Footer /> */}
      <Soon />
    </div>
  );
}
