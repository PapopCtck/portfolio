import { cn } from "@ppaop/lib/utils"

function HorizonGuideLine({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="div"
      className={cn('h-[80px] w-[1px] bg-white lg:h-[80px]', className)}
      {...props}
    />
  )
}

export { HorizonGuideLine }
