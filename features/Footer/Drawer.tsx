"use client";
import { Button } from "@ppaop/components/shadcn-ui/button";
import {
  FamilyDrawerAnimatedWrapper,
  FamilyDrawerClose,
  FamilyDrawerContent,
  FamilyDrawerAnimatedContent,
  FamilyDrawerOverlay,
  FamilyDrawerTrigger,
  FamilyDrawerPortal,
  FamilyDrawerRoot,
  ViewsRegistry,
  FamilyDrawerViewContent,
} from "@ppaop/components/shadcn-ui/family-drawer";
import { GlassPanel } from "@ppaop/components/ui/glass-panel";
import Link from "next/link";
import { Drawer as VaulDrawer } from "vaul";
import { CONTACT_LINKS } from "./constants";

export const Drawer = () => {
  return (
    <FamilyDrawerRoot views={contactViews}>
      <FamilyDrawerTrigger asChild>
        <Button
          variant="outline"
          className="mt-10 cursor-pointer rounded-full border-white/80 bg-transparent px-8 text-white shadow-none hover:bg-white/10 hover:text-white dark:border-white/80 dark:bg-transparent dark:hover:bg-white/10"
        >
          Contact Me
        </Button>
      </FamilyDrawerTrigger>
      <FamilyDrawerPortal>
        <FamilyDrawerOverlay />
        <FamilyDrawerContent>
          <FamilyDrawerClose />
          <FamilyDrawerAnimatedWrapper>
            <FamilyDrawerAnimatedContent>
              <FamilyDrawerViewContent />
            </FamilyDrawerAnimatedContent>
          </FamilyDrawerAnimatedWrapper>
        </FamilyDrawerContent>
      </FamilyDrawerPortal>
    </FamilyDrawerRoot>
  );
};

function DrawerContent() {
  return (
    <GlassPanel className="px-5 py-4">
      <VaulDrawer.Title asChild>
        <h2 className="text-xl font-semibold">
          Thank you for visiting my portfolio! ❤️
        </h2>
      </VaulDrawer.Title>
      <p className="text-muted-foreground mt-2 text-sm">
        I&apos;m always looking for new opportunities and collaborations. If you
        have any questions or would like to work together, please don&apos;t
        hesitate to contact me.
      </p>
      <div className="mt-4 flex gap-2">
        {CONTACT_LINKS.map(({ label, href, Icon }) => (
          <Link
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="cursor-pointer" aria-label={label}>
              <Icon className="size-4" />
            </Button>
          </Link>
        ))}
      </div>
    </GlassPanel>
  );
}

const contactViews: ViewsRegistry = {
  default: DrawerContent,
};
