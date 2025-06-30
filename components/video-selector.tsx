"use client"
import { Play, Pause, SkipForward } from "lucide-react"

interface VideoSelectorProps {
  currentVideo: number
  totalVideos: number
  onVideoChange: (index: number) => void
  isPlaying: boolean
  onPlayPause: () => void
}

export function VideoSelector({
  currentVideo,
  totalVideos,
  onVideoChange,
  isPlaying,
  onPlayPause,
}: VideoSelectorProps) {
  const videoNames = ["Cosmic Galaxy", "Corporate Skyline", "Nature Sunrise", "Ocean Waves", "Mountain Peaks"]

  return (
    <div className="absolute bottom-4 right-4 z-20 bg-black/50 backdrop-blur-sm rounded-lg p-3 flex items-center space-x-3">
      {/* Play/Pause Button */}
      <button
        onClick={onPlayPause}
        className="p-2 bg-stone-600 hover:bg-stone-500 rounded-full transition-colors"
        aria-label={isPlaying ? "Pause video" : "Play video"}
      >
        {isPlaying ? <Pause className="w-4 h-4 text-white" /> : <Play className="w-4 h-4 text-white" />}
      </button>

      {/* Next Video Button */}
      <button
        onClick={() => onVideoChange((currentVideo + 1) % totalVideos)}
        className="p-2 bg-stone-600 hover:bg-stone-500 rounded-full transition-colors"
        aria-label="Next video"
      >
        <SkipForward className="w-4 h-4 text-white" />
      </button>

      {/* Current Video Name */}
      <span className="text-xs text-stone-300 font-medium">
        {videoNames[currentVideo]} ({currentVideo + 1}/{totalVideos})
      </span>
    </div>
  )
}
