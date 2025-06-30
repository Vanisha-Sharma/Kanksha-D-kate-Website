"use client"

import { useEffect, useRef } from "react"

export function useScrollAnimation() {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed")
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    )

    const element = elementRef.current
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  return elementRef
}

export function useParallax(speed = 0.5) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let animationId: number

    const handleScroll = () => {
      if (!elementRef.current) return

      const scrolled = window.pageYOffset
      const element = elementRef.current
      const rect = element.getBoundingClientRect()
      const elementTop = rect.top + scrolled
      const elementHeight = rect.height
      const windowHeight = window.innerHeight

      // Check if element is in viewport
      if (scrolled + windowHeight > elementTop && scrolled < elementTop + elementHeight) {
        const yPos = -(scrolled - elementTop) * speed
        element.style.transform = `translate3d(0, ${yPos}px, 0)`
      }
    }

    const throttledScroll = () => {
      cancelAnimationFrame(animationId)
      animationId = requestAnimationFrame(handleScroll)
    }

    window.addEventListener("scroll", throttledScroll, { passive: true })
    handleScroll() // Initial call

    return () => {
      window.removeEventListener("scroll", throttledScroll)
      cancelAnimationFrame(animationId)
    }
  }, [speed])

  return elementRef
}

export function useStaggerAnimation() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("stagger-animation")
          }
        })
      },
      {
        threshold: 0.1,
      },
    )

    const element = containerRef.current
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  return containerRef
}
