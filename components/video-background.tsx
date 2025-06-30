"use client"

import { useEffect, useRef, useState } from "react"
import { VideoSelector } from "./video-selector"

interface VideoBackgroundProps {
  videoSrc: string
  className?: string
}

function VideoBackground({ videoSrc, className = "" }: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [currentVideo, setCurrentVideo] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  const videos = [
    "/videos/cosmic-galaxy.mp4",
    "/videos/corporate-skyline.mp4",
    "/videos/nature-sunrise.mp4",
    "/videos/ocean-waves.mp4",
    "/videos/mountain-peaks.mp4",
  ]

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7 // Slightly slow for cinematic effect
      videoRef.current.play().catch(() => {
        // Autoplay failed, which is expected in some browsers
      })
    }

    // Rotate videos every 25 seconds for variety
    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % videos.length)
    }, 25000)

    return () => clearInterval(interval)
  }, [videoSrc, videos.length])

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <>
      {/* Edge-to-Edge Impressive Video Background */}
      <div className={`absolute inset-0 w-full h-full overflow-hidden bg-black ${className}`}>
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          key={currentVideo} // Force re-render when video changes
          className="absolute top-0 left-0 w-full h-full object-cover opacity-50"
          style={{
            minWidth: "100%",
            minHeight: "100%",
            transform: "scale(1.02)", // Slight scale to ensure no gaps
          }}
        >
          <source src={videos[currentVideo]} type="video/mp4" />
          {/* Fallback gradient for business appeal */}
          <div className="absolute inset-0 bg-gradient-to-br from-stone-900 via-gray-800 to-black opacity-90"></div>
        </video>

        {/* Professional overlay for business appeal */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-stone-900/20 via-transparent to-gray-900/20"></div>

        {/* Subtle animated elements for sophistication */}
        <div className="absolute inset-0">
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-stone-300 rounded-full animate-star-twinkle opacity-70"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${4 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>

        {/* Subtle geometric patterns for business sophistication */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute top-1/4 left-1/4 w-32 h-32 border border-stone-400 rotate-45 animate-spin"
            style={{ animationDuration: "60s" }}
          ></div>
          <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-gray-400 rotate-12 animate-pulse"></div>
          <div
            className="absolute top-3/4 left-3/4 w-16 h-16 border border-stone-500 -rotate-45 animate-bounce"
            style={{ animationDuration: "8s" }}
          ></div>
        </div>

        {/* Video indicator dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {videos.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentVideo(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentVideo ? "bg-stone-400 w-6" : "bg-stone-600 hover:bg-stone-500"
              }`}
              aria-label={`Switch to video ${index + 1}`}
            />
          ))}
        </div>

        {/* Video Controls */}
        <VideoSelector
          currentVideo={currentVideo}
          totalVideos={videos.length}
          onVideoChange={setCurrentVideo}
          isPlaying={isPlaying}
          onPlayPause={handlePlayPause}
        />
      </div>
    </>
  )
}

export default VideoBackground
export { VideoBackground }
