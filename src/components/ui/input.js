import * as React from "react"
import { cn } from "../../lib/utils"

// const Input = React.forwardRef(({ className, ...props }, ref) => {
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
// Input.displayName = "Input"

const Input = React.forwardRef(({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70", className)}
      {...props}
    />
  ))
  Input.displayName = "Input"

export { Input }