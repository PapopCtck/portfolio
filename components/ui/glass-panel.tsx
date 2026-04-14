import { cn } from "@ppaop/utils";

export const GlassPanel = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={cn(
      "rounded-[18px] bg-[rgba(255,255,255,0.05)] shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[10px] [-webkit-backdrop-filter:blur(10px)]",
      className,
    )}
  >
    {children}
  </div>
);
