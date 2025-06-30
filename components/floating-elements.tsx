"use client"

export function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Floating Subtle Orbs */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-gradient-to-r from-stone-500/5 to-stone-600/5 floating-element"
          style={{
            width: `${Math.random() * 100 + 50}px`,
            height: `${Math.random() * 100 + 50}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${Math.random() * 10 + 15}s`,
          }}
        />
      ))}

      {/* Floating Subtle Stars */}
      {[...Array(20)].map((_, i) => (
        <div
          key={`star-${i}`}
          className="absolute w-1 h-1 bg-stone-400 rounded-full animate-star-twinkle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}

      {/* Subtle Gradient Orbs */}
      {[...Array(3)].map((_, i) => (
        <div
          key={`orb-${i}`}
          className="absolute rounded-full blur-3xl animate-subtle-pulse"
          style={{
            width: `${Math.random() * 300 + 200}px`,
            height: `${Math.random() * 300 + 200}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: `radial-gradient(circle, ${
              ["rgba(139, 116, 88, 0.05)", "rgba(122, 107, 79, 0.05)", "rgba(160, 149, 107, 0.05)"][i]
            } 0%, transparent 70%)`,
            animationDelay: `${i * 2}s`,
          }}
        />
      ))}

      {/* Mandala-inspired Floating Elements */}
      {[...Array(4)].map((_, i) => (
        <div
          key={`mandala-${i}`}
          className="absolute opacity-3 animate-mandala-rotate"
          style={{
            width: `${Math.random() * 150 + 100}px`,
            height: `${Math.random() * 150 + 100}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: `conic-gradient(from 0deg, transparent, rgba(139, 116, 88, 0.05), transparent)`,
            borderRadius: "50%",
            animationDuration: `${Math.random() * 30 + 20}s`,
          }}
        />
      ))}
    </div>
  )
}
