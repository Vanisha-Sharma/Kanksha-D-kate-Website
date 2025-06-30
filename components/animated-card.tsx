"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"
import type React from "react"

interface AnimatedCardProps {
  children: React.ReactNode
  className?: string
  animation?: "slide-up" | "slide-left" | "slide-right" | "scale" | "rotate"
  delay?: number
}

export function AnimatedCard({ children, className, animation = "slide-up", delay = 0 }: AnimatedCardProps) {
  const ref = useScrollAnimation()

  const animationClass = {
    "slide-up": "scroll-reveal",
    "slide-left": "scroll-reveal-left",
    "slide-right": "scroll-reveal-right",
    scale: "scroll-reveal",
    rotate: "scroll-reveal",
  }[animation]

  return (
    <div
      ref={ref}
      className={cn(
        animationClass,
        "card-hover card-glow",
        "bg-gradient-to-br from-amber-900/20 to-yellow-900/20",
        "backdrop-blur-sm border border-yellow-500/20",
        "rounded-2xl p-6 transition-all duration-300",
        "shadow-golden",
        className,
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
