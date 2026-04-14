import { Navbar as NavbarComponent } from "@ppaop/components/ui/navbar";
import GradualBlur from "@ppaop/components/react-bits/GradualBlur";

export const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 z-50 h-15 w-full max-w-[100vw] md:h-22">
      <NavbarComponent />
      <GradualBlur
        target="parent"
        position="top"
        height="4rem"
        strength={1}
        divCount={10}
        curve="bezier"
        exponential
        opacity={1}
      />
    </div>
  );
};
