import { cn } from "@ppaop/utils";

export const SectionHeading = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={cn(
      "text-2xl font-black tracking-[32%] md:flex md:gap-3 md:text-5xl lg:text-[60px]",
      className,
    )}
  >
    {children}
  </div>
);
