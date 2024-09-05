import * as React from "react"
import { cn } from "../../lib/utils"

// const Textarea = React.forwardRef(({ className, ...props }, ref) => {
//   return (
//     <button
//       className={cn(
//         "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
//         className
//       )}
//       ref={ref}
//       {...props}
//     />
//   )
// })
// Textarea.displayName = "Textarea"

const Textarea = React.forwardRef(({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("rounded-lg border bg-card text-card-foreground shadow-sm", className)}
      {...props}
    />
  ))
  Textarea.displayName = "Input"

export { Textarea }