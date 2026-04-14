import { cn } from "@ppaop/utils";

export const AvailableBadge = ({ className }: { className?: string }) => (
  <div
    className={cn(
      "flex items-center gap-2 rounded-full bg-emerald-500/15 px-3 py-1.5",
      className,
    )}
  >
    <span className="size-2 shrink-0 rounded-full bg-emerald-400" aria-hidden />
    <span className="text-sm font-medium text-emerald-400">
      Available for work
    </span>
  </div>
);
