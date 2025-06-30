"use client"

import { useParallax } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"
import type React from "react"

interface ParallaxSectionProps {
  children: React.ReactNode
  className?: string
  speed?: number
}

export function ParallaxSection({ children, className, speed = 0.3 }: ParallaxSectionProps) {
  const ref = useParallax(speed)

  return (
    <div className="relative overflow-hidden">
      <div ref={ref} className={cn("will-change-transform", className)}>
        {children}
      </div>
    </div>
  )
}
