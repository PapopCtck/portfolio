import { AvailableBadge } from "@ppaop/components/ui/available-badge";
import { InteractiveCurvedLoop } from "@ppaop/components/ui/curvedLoop";
import Link from "next/link";
import { Drawer } from "./Drawer";
import { SOCIAL_LINKS } from "./constants";

export const Footer = () => {
  return (
    <section id="footer" className="w-full">
      <InteractiveCurvedLoop reverse={true} />
      <div className="mx-auto w-full max-w-[1024px] px-4 pb-12">
        <div className="bg-background flex flex-col items-center rounded-[2rem] px-6 py-14 sm:px-10 sm:py-16">
          <AvailableBadge className="mb-6" />
          <h2 className="max-w-[20ch] text-center text-3xl font-bold tracking-tight text-white sm:max-w-none sm:text-4xl md:text-5xl">
            Let&apos;s build something great together.
          </h2>
          <Drawer />
        </div>

        <div className="mt-20 flex flex-col items-center justify-between gap-6 sm:mt-24 sm:flex-row sm:items-center md:mt-32">
          <p className="text-center text-sm text-zinc-400 sm:text-left">
            © {new Date().getFullYear()} Papop Chattongchaikul. All rights
            reserved.
          </p>
          <nav className="flex items-center gap-5" aria-label="Social links">
            {SOCIAL_LINKS.map(({ label, href, Icon }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 transition-colors hover:text-white"
                aria-label={label}
              >
                <Icon className="size-5" />
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
};
