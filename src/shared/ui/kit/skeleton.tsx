import { cn } from "@/shared/lib/css"

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn("bg-white animate-pulse rounded-md", className)}
      {...props}
    />
  )
}

export { Skeleton }
