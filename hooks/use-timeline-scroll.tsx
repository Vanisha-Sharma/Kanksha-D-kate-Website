"use client"

import { useEffect, useRef, useState } from "react"

export function useTimelineScroll() {
  const timelineRef = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)
  const [activeStep, setActiveStep] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return

      const timeline = timelineRef.current
      const timelineRect = timeline.getBoundingClientRect()
      const windowHeight = window.innerHeight

      // Calculate how much of the timeline is visible
      const timelineTop = timelineRect.top
      const timelineHeight = timelineRect.height

      // Start animation when timeline enters viewport
      const startOffset = windowHeight * 0.8
      const endOffset = windowHeight * 0.2

      if (timelineTop <= startOffset && timelineTop + timelineHeight >= endOffset) {
        // Calculate progress based on scroll position
        const scrollProgress = Math.max(
          0,
          Math.min(1, (startOffset - timelineTop) / (timelineHeight - (startOffset - endOffset))),
        )

        setProgress(scrollProgress)

        // Calculate active step (0-3 for 4 steps)
        const currentStep = Math.floor(scrollProgress * 4)
        setActiveStep(Math.min(currentStep, 3))
      } else if (timelineTop > startOffset) {
        setProgress(0)
        setActiveStep(0)
      } else if (timelineTop + timelineHeight < endOffset) {
        setProgress(1)
        setActiveStep(3)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // Initial call

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return { timelineRef, progress, activeStep }
}
