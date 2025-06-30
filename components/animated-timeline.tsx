"use client"

import { AnimatedCard } from "@/components/animated-card"
import { CardContent } from "@/components/ui/card"
import { CheckCircle, Download, Send, Eye, Award } from "lucide-react"
import { useTimelineScroll } from "@/hooks/use-timeline-scroll"

const timelineData = [
  {
    step: "01",
    title: "Download Application",
    description: "Begin with our comprehensive application designed to understand your unique journey and aspirations.",
    icon: Download,
    color: "from-blue-600 to-purple-600",
    details: ["Detailed questionnaire", "Personal assessment", "Goal identification"],
  },
  {
    step: "02",
    title: "Thoughtful Submission",
    description: "Complete your application with care, allowing your authentic voice and intentions to flow naturally.",
    icon: Send,
    color: "from-purple-600 to-pink-600",
    details: ["Authentic responses", "Clear intentions", "Personal insights"],
  },
  {
    step: "03",
    title: "Expert Review",
    description: "Our team conducts a thorough review to ensure ¡FLo! aligns with your transformation goals.",
    icon: Eye,
    color: "from-pink-600 to-red-600",
    details: ["Compatibility assessment", "Goal alignment", "Readiness evaluation"],
  },
  {
    step: "04",
    title: "Exclusive Invitation",
    description: "Selected candidates receive a personal invitation to begin their ¡FLo! transformation journey.",
    icon: Award,
    color: "from-red-600 to-orange-600",
    details: ["Personal invitation", "Journey planning", "Transformation begins"],
  },
]

export function AnimatedTimeline() {
  const { timelineRef, progress, activeStep } = useTimelineScroll()

  return (
    <div ref={timelineRef} className="relative">
      {/* Background Timeline Line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-700/50 rounded-full"></div>

      {/* Animated Progress Line */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-stone-400 via-stone-500 to-stone-600 rounded-full transition-all duration-300 ease-out"
        style={{
          height: `${progress * 100}%`,
          boxShadow: "0 0 20px rgba(139, 116, 88, 0.5)",
        }}
      >
        {/* Glowing effect at the tip */}
        <div
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-stone-400 rounded-full animate-pulse"
          style={{
            boxShadow: "0 0 15px rgba(139, 116, 88, 0.8)",
            opacity: progress > 0 ? 1 : 0,
            transition: "opacity 0.3s ease-out",
          }}
        ></div>
      </div>

      <div className="space-y-24">
        {timelineData.map((item, index) => {
          const isActive = activeStep >= index
          const isCompleted = activeStep > index

          return (
            <div
              key={index}
              className={`relative flex items-center ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
            >
              {/* Timeline Node */}
              <div
                className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 border-black z-10 transition-all duration-500 ${
                  isCompleted
                    ? "bg-gradient-to-br from-stone-400 to-stone-600 scale-125"
                    : isActive
                      ? "bg-gradient-to-br from-stone-500 to-stone-700 scale-110 animate-pulse"
                      : "bg-gray-700"
                }`}
                style={{
                  boxShadow: isActive ? "0 0 20px rgba(139, 116, 88, 0.6)" : "none",
                }}
              >
                {/* Completion checkmark */}
                {isCompleted && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-white animate-scale-in" />
                  </div>
                )}
              </div>

              {/* Content Card */}
              <div className={`w-5/12 ${index % 2 === 0 ? "pr-16" : "pl-16"}`}>
                <AnimatedCard
                  animation={index % 2 === 0 ? "slide-right" : "slide-left"}
                  delay={index * 200}
                  className={`card-tilt transition-all duration-500 ${
                    isActive ? "transform scale-105 shadow-2xl shadow-stone-500/20" : "opacity-70"
                  }`}
                >
                  <CardContent className="p-8 relative overflow-hidden">
                    {/* Active glow effect */}
                    {isActive && (
                      <div className="absolute inset-0 bg-gradient-to-r from-stone-500/10 via-stone-400/5 to-stone-500/10 animate-pulse"></div>
                    )}

                    <div className="relative z-10">
                      <div className="flex items-center mb-6">
                        <div
                          className={`p-4 bg-gradient-to-br ${item.color} rounded-full mr-4 transition-all duration-500 ${
                            isActive ? "animate-subtle-pulse scale-110" : ""
                          }`}
                        >
                          <item.icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <div
                            className={`text-3xl font-bold mb-1 transition-colors duration-500 ${
                              isActive ? "text-white" : "text-gray-400"
                            }`}
                          >
                            {item.step}
                          </div>
                          <h3
                            className={`text-xl font-bold transition-colors duration-500 ${
                              isActive ? "text-stone-300" : "text-gray-500"
                            }`}
                          >
                            {item.title}
                          </h3>
                        </div>
                      </div>

                      <p
                        className={`leading-relaxed mb-6 transition-colors duration-500 ${
                          isActive ? "text-gray-200" : "text-gray-400"
                        }`}
                      >
                        {item.description}
                      </p>

                      <div className="space-y-2">
                        {item.details.map((detail, detailIndex) => (
                          <div
                            key={detailIndex}
                            className="flex items-center space-x-2"
                            style={{
                              animationDelay: isActive ? `${detailIndex * 100}ms` : "0ms",
                            }}
                          >
                            <CheckCircle
                              className={`w-4 h-4 transition-colors duration-500 ${
                                isActive ? "text-stone-400" : "text-gray-600"
                              }`}
                            />
                            <span
                              className={`text-sm transition-colors duration-500 ${
                                isActive ? "text-gray-300" : "text-gray-500"
                              }`}
                            >
                              {detail}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </AnimatedCard>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
