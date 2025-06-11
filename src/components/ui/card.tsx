import * as React from "react"

import { cn } from "@/lib/utils"

// Imagine these are defined in your tailwind.config.js for custom colors
// --card-bg-light-dark: #1A1A1A; (slightly lighter than current)
// --accent-color: #FFC107; (a more vibrant amber)
// --text-primary: #E0E0E0; (light gray for main text)
// --text-secondary: #A0A0A0; (medium gray for descriptions)

function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
      <div
          data-slot="card"
          // Added hover effects: scale, shadow, border color
          className={cn(
              "group relative flex flex-col rounded-xl border-2 border-solid transition-all duration-300 ease-in-out", // Reduced border width for cleaner look initially
              "bg-card-bg-light-dark text-text-primary border-amber-600 hover:border-accent-color", // Brighter initial border, accent on hover
              "hover:scale-[1.02] hover:shadow-xl hover:shadow-gray-700/50", // Subtle scale and prominent shadow on hover
              "cursor-pointer", // Ensure cursor indicates clickable
              className
          )}
          {...props}
      />
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
      <div
          data-slot="card-header"
          // Added padding, potentially a bottom border for separation, and adjusted gap
          className={cn(
              "grid items-start gap-2 px-6 pt-6 pb-4 border-b border-gray-700/50", // Added bottom border for separation
              className
          )}
          {...props}
      />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
      <div
          data-slot="card-title"
          // Larger font, bolder, more vibrant color
          className={cn("text-2xl md:text-3xl font-bold text-white text-center group-hover:text-white transition-colors duration-300", className)}
          {...props}
      />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
      <div
          data-slot="card-description"
          // Better contrast for description
          className={cn("text-text-secondary text-white text-center text-sm", className)}
          {...props}
      />
  )
}

// Remove border from CardContent, ensure good text contrast
function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
      <div
          data-slot="card-content"
          className={cn("px-6 py-4 text-sm md:text-base text-text-primary leading-relaxed", className)} // Adjusted text color, padding
          {...props}
      />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
      <div
          data-slot="card-footer"
          // Added top border for separation, adjusted padding
          className={cn("flex items-center justify-end px-6 pt-4 pb-6 border-t border-gray-700/50", className)}
          {...props}
      />
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
}
