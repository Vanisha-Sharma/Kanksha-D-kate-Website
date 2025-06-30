"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Star, Zap, Play, Upload, Video, MessageSquare, Quote } from "lucide-react"
import { useState } from "react"

export default function FeedbackPage() {
  const [selectedTestimonial, setSelectedTestimonial] = useState<number | null>(null)
  const [feedbackType, setFeedbackType] = useState<"text" | "video" | "">("")

  const testimonials = [
    {
      id: 1,
      name: "Sarah M.",
      title: "CEO, Tech Startup",
      rating: 5,
      type: "text",
      message:
        "The ¡FLo! Immersion experience opened dimensions I never knew existed within me. It's not just transformation—it's awakening. I discovered my true potential and learned to harness the infinite energy that was always there. Working with Kanksha has been life-changing. Before starting this journey, I was running a successful tech startup, but I felt like I was constantly fighting against invisible barriers. Every decision felt heavy, every challenge seemed to drain my energy, and despite external success, I felt disconnected from my own power. Kanksha's approach through ¡FLo! was unlike anything I had experienced before. The precision with which she identified the root patterns that were limiting me was extraordinary. Through the installation cycles, I began to notice shifts that were both subtle and profound. My decision-making became effortless, my energy levels soared, and most importantly, I started operating from a place of authentic confidence rather than compensatory drive. The transformation wasn't just professional—it rippled through every aspect of my life. My relationships deepened, my health improved, and I found myself accessing levels of creativity and strategic thinking I didn't know I possessed. What amazes me most is how natural and sustainable these changes feel. This isn't about willpower or forcing myself to be different—it's like Kanksha helped me remember who I actually am beneath all the conditioning and limitations I had unconsciously accepted. The investment in ¡FLo! Immersion has been the most valuable decision I've made for my personal and professional evolution.",
      videoThumbnail: null,
      hasVideo: false,
    },
    {
      id: 2,
      name: "Michael R.",
      title: "Business Consultant",
      rating: 5,
      type: "video",
      message:
        "Kanksha didn't just change my perspective—she revolutionized my entire existence. The ¡FLo! Stream keeps me aligned with my purpose daily. Pure magic in every session.",
      videoThumbnail: "/placeholder.svg?height=200&width=300&text=Video+Testimonial",
      hasVideo: true,
    },
    {
      id: 3,
      name: "Elena K.",
      title: "Creative Director",
      rating: 5,
      type: "text",
      message:
        "I came seeking change but found complete transformation. Kanksha's approach to breakthrough work is unlike anything I've experienced. My life has become a beautiful flow of possibilities. The precision and care in her methodology is extraordinary. As a creative director, I thought I understood the power of vision and imagination, but I was operating from a limited perspective. I had been struggling with creative blocks, imposter syndrome, and a constant feeling that I wasn't living up to my potential. Traditional coaching and therapy had helped to some degree, but the changes were always temporary. When I discovered Kanksha and ¡FLo!, I was initially skeptical about the claims of permanent transformation. However, from our very first session, I could sense that this was different. Kanksha has an uncanny ability to see patterns and connections that aren't obvious on the surface. She worked with me at a level that felt almost architectural—like she was redesigning the very foundation of how I process information and make decisions. The installation process was gentle yet powerful. I didn't have to relive trauma or force myself through painful exercises. Instead, it felt like layers of limitation were simply dissolving, revealing capacities that had always been there. My creative output has not only increased dramatically, but the quality and originality of my work has reached new heights. Clients have noticed the difference, and I've been offered opportunities that seemed impossible before. Beyond the professional gains, I feel a deep sense of peace and alignment that permeates everything I do.",
      videoThumbnail: null,
      hasVideo: false,
    },
    {
      id: 4,
      name: "David L.",
      title: "Entrepreneur",
      rating: 5,
      type: "text",
      message:
        "The depth of transformation I experienced through ¡FLo! Immersion is beyond words. I've unlocked parts of myself I didn't know existed and now live from a place of infinite possibility. Working with Kanksha has been the most profound investment in my personal evolution. As an entrepreneur, I was used to pushing through challenges with sheer determination and willpower. While this approach had brought me financial success, it was also leading to burnout, strained relationships, and a growing sense that something essential was missing from my life. I had tried various forms of personal development, from intensive workshops to one-on-one coaching, but nothing seemed to create lasting change at the level I needed. When I learned about Kanksha's work and the ¡FLo! methodology, I was intrigued by the promise of transformation that didn't require constant effort to maintain. The process exceeded my expectations in every way. Kanksha's ability to identify and work with the unconscious patterns that were driving my behavior was remarkable. Through the installation cycles, I experienced shifts that felt both immediate and deeply rooted. My relationship with stress completely transformed—instead of being overwhelmed by challenges, I found myself naturally accessing resourceful states that allowed me to navigate complexity with ease and even enjoyment. My business performance improved dramatically, not because I was working harder, but because I was operating from a fundamentally different internal state. Decision-making became intuitive, opportunities seemed to appear effortlessly, and my team responded to my leadership in ways that surprised everyone. The ripple effects extended far beyond business—my marriage deepened, my health improved, and I rediscovered a sense of joy and purpose that I hadn't felt since childhood.",
      videoThumbnail: null,
      hasVideo: false,
    },
    {
      id: 5,
      name: "Amanda T.",
      title: "Marketing Executive",
      rating: 5,
      type: "video",
      message:
        "Kanksha's approach is revolutionary. The ¡FLo! Stream has become my compass, guiding me through breakthrough after breakthrough. I'm living my most authentic life. The transformation continues to unfold in ways I never imagined possible.",
      videoThumbnail: "/placeholder.svg?height=200&width=300&text=Amanda+Video",
      hasVideo: true,
    },
    {
      id: 6,
      name: "James W.",
      title: "Investment Banker",
      rating: 5,
      type: "text",
      message:
        "The transformation I experienced is still unfolding months later. Every session with Kanksha reveals new layers of potential. This isn't just personal development—it's evolution.",
      videoThumbnail: null,
      hasVideo: false,
    },
    {
      id: 7,
      name: "Priya S.",
      title: "Healthcare Professional",
      rating: 5,
      type: "video",
      message:
        "Working with Kanksha through ¡FLo! has been the most profound experience of my life. The shifts happen at such a deep level that everything else naturally aligns. I feel like I've finally come home to myself.",
      videoThumbnail: "/placeholder.svg?height=200&width=300&text=Priya+Testimonial",
      hasVideo: true,
    },
    {
      id: 8,
      name: "Robert K.",
      title: "Author & Speaker",
      rating: 5,
      type: "text",
      message:
        "Kanksha's work transcends traditional coaching. The ¡FLo! methodology creates lasting change at the neurological level. I've experienced breakthroughs I didn't even know were possible. The precision and elegance of her approach is unmatched in the field. As someone who has spent decades studying human potential and transformation, I thought I had a comprehensive understanding of what was possible in terms of personal change. I had worked with renowned coaches, attended countless seminars, and even facilitated transformation work myself. However, my experience with Kanksha and ¡FLo! revealed that I had only been scratching the surface of what true transformation could look like. What sets Kanksha apart is her ability to work at the level of unconscious structure rather than conscious content. Instead of trying to change behaviors or thought patterns through effort and repetition, she creates installations that shift the very foundation from which those patterns emerge. The elegance of this approach is that change happens naturally and effortlessly—you don't have to remember to be different, you simply are different. The transformation I experienced was both immediate and progressive. Within days of our first installation cycle, I noticed that my default responses to challenging situations had completely shifted. Where I used to experience anxiety and overthinking, I found myself accessing calm clarity and intuitive knowing. My writing became more fluid and inspired, my speaking engagements felt more authentic and impactful, and my relationships deepened in ways I hadn't expected. What continues to amaze me is how the changes keep unfolding and deepening over time. It's as if Kanksha planted seeds of transformation that continue to grow and bear fruit long after our formal work together ended. I now recommend her work to anyone who is serious about creating lasting change and unlocking their full potential.",
      videoThumbnail: null,
      hasVideo: false,
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-stone-900 via-gray-900 to-black">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1920')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold pb-6 mb-8 bg-gradient-to-r from-stone-400 via-gray-400 to-stone-300 bg-clip-text text-transparent">
            Whispers of Change
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
            Reflections from those who walked into their Evolution
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-stone-400 to-gray-400 bg-clip-text text-transparent">
            Transformation Stories
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial) => (
              <Card
                key={testimonial.id}
                className={`bg-gradient-to-br from-stone-900/30 to-gray-900/30 border-stone-500/30 cursor-pointer transition-all duration-300 hover:scale-105 ${
                  testimonial.type === "video" ? "relative overflow-hidden" : ""
                }`}
                onClick={() => setSelectedTestimonial(selectedTestimonial === testimonial.id ? null : testimonial.id)}
              >
                {testimonial.hasVideo && (
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <img
                      src={testimonial.videoThumbnail || "/placeholder.svg"}
                      alt={`${testimonial.name} video testimonial`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <Play className="w-8 h-8 text-white ml-1" />
                      </div>
                    </div>
                    <div className="absolute top-3 right-3 bg-red-600 text-white px-2 py-1 rounded text-xs font-bold">
                      VIDEO
                    </div>
                  </div>
                )}

                <CardHeader>
                  <div className="flex items-center space-x-2 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-stone-400 fill-current" />
                    ))}
                  </div>
                  <CardTitle className="text-stone-400 flex items-center justify-between">
                    <div>
                      <div className="text-lg font-bold">{testimonial.name}</div>
                      <div className="text-sm text-gray-400 font-normal">{testimonial.title}</div>
                    </div>
                    {!testimonial.hasVideo && <MessageSquare className="w-5 h-5 text-gray-500" />}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <p
                      className={`text-gray-200 italic leading-relaxed transition-all duration-300 ${
                        selectedTestimonial === testimonial.id
                          ? ""
                          : testimonial.message.length > 200
                            ? "line-clamp-4"
                            : ""
                      }`}
                    >
                      "{testimonial.message}"
                    </p>

                    {/* Gradient overlay for long text when collapsed */}
                    {testimonial.message.length > 200 && selectedTestimonial !== testimonial.id && (
                      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-stone-900/90 to-transparent pointer-events-none"></div>
                    )}
                  </div>

                  {testimonial.message.length > 200 && (
                    <div className="mt-4 flex justify-center">
                      <button
                        className="text-stone-400 hover:text-stone-300 text-sm font-medium px-4 py-2 border border-stone-500/30 rounded-full hover:border-stone-400/50 transition-all duration-300"
                        onClick={(e) => {
                          e.stopPropagation()
                          setSelectedTestimonial(selectedTestimonial === testimonial.id ? null : testimonial.id)
                        }}
                      >
                        {selectedTestimonial === testimonial.id ? "Show less" : "Read full story"}
                      </button>
                    </div>
                  )}

                  {/* Word count indicator for long testimonials */}
                  {testimonial.message.length > 500 && selectedTestimonial !== testimonial.id && (
                    <div className="mt-2 text-xs text-gray-500 text-center">
                      {Math.round(testimonial.message.split(" ").length / 200)} min read
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Feedback Form Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-stone-900/20 to-gray-900/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-stone-400 to-gray-400 bg-clip-text text-transparent">
            Share About Your Journey With Us
          </h2>

          <Card className="bg-gradient-to-br from-stone-900/30 to-gray-900/30 border-stone-500/30">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-white">
                We'd Love to Hear About Your Transformation
              </CardTitle>
              <p className="text-center text-gray-300">
                Your voice matters. Share your breakthrough experience and inspire others on their journey.
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Feedback Type Selection */}
              <div className="space-y-4">
                <label className="block text-sm font-medium text-gray-300 mb-3">
                  How would you like to share your experience?
                </label>
                <div className="grid md:grid-cols-2 gap-4">
                  <button
                    onClick={() => setFeedbackType("text")}
                    className={`p-4 rounded-lg border-2 transition-all duration-300 ${
                      feedbackType === "text"
                        ? "border-stone-400 bg-stone-500/20"
                        : "border-stone-500/30 hover:border-stone-400/50"
                    }`}
                  >
                    <MessageSquare className="w-8 h-8 mx-auto mb-2 text-stone-400" />
                    <div className="text-white font-medium">Written Testimonial</div>
                    <div className="text-gray-400 text-sm">Share your story in writing</div>
                  </button>

                  <button
                    onClick={() => setFeedbackType("video")}
                    className={`p-4 rounded-lg border-2 transition-all duration-300 ${
                      feedbackType === "video"
                        ? "border-stone-400 bg-stone-500/20"
                        : "border-stone-500/30 hover:border-stone-400/50"
                    }`}
                  >
                    <Video className="w-8 h-8 mx-auto mb-2 text-stone-400" />
                    <div className="text-white font-medium">Video Testimonial</div>
                    <div className="text-gray-400 text-sm">Record or upload a video</div>
                  </button>
                </div>
              </div>

              {/* Basic Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
                  <Input
                    placeholder="Enter your name"
                    className="bg-black/50 border-stone-500/30 text-white placeholder-gray-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email (Optional)</label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    className="bg-black/50 border-stone-500/30 text-white placeholder-gray-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Your Role/Title (Optional)</label>
                <Input
                  placeholder="e.g., CEO, Entrepreneur, Creative Director"
                  className="bg-black/50 border-stone-500/30 text-white placeholder-gray-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Which Experience Did You Have?</label>
                <select className="w-full p-3 bg-black/50 border border-stone-500/30 rounded-md text-white">
                  <option value="">Select your experience</option>
                  <option value="flo-immersion">¡FLo! Immersion</option>
                  <option value="flo-stream">¡FLo! Stream</option>
                  <option value="both">Both Experiences</option>
                  <option value="consultation">Consultation with Kanksha</option>
                </select>
              </div>

              {/* Conditional Content Based on Feedback Type */}
              {feedbackType === "text" && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Share Your Transformation Story
                    </label>
                    <Textarea
                      placeholder="Tell us about your breakthrough experience with Kanksha and ¡FLo!..."
                      rows={6}
                      className="bg-black/50 border-stone-500/30 text-white placeholder-gray-400"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Key Transformation Areas (Optional)
                    </label>
                    <div className="grid md:grid-cols-2 gap-3">
                      {[
                        "Business Performance",
                        "Emotional Mastery",
                        "Relationships",
                        "Health & Vitality",
                        "Decision Making",
                        "Leadership",
                        "Creativity",
                        "Inner Peace",
                        "Confidence",
                        "Life Purpose",
                      ].map((area) => (
                        <label key={area} className="flex items-center space-x-2">
                          <input type="checkbox" className="rounded border-stone-500/30 bg-black/50 text-stone-400" />
                          <span className="text-gray-300 text-sm">{area}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {feedbackType === "video" && (
                <div className="space-y-6">
                  <div className="border-2 border-dashed border-stone-500/30 rounded-lg p-8 text-center">
                    <Upload className="w-12 h-12 mx-auto mb-4 text-stone-400" />
                    <div className="text-white font-medium mb-2">Upload Your Video Testimonial</div>
                    <div className="text-gray-400 text-sm mb-4">
                      Drag and drop your video file here, or click to browse
                      <br />
                      Supported formats: MP4, MOV, AVI (Max 100MB)
                    </div>
                    <Button className="bg-stone-600 hover:bg-stone-700 text-white">Choose Video File</Button>
                  </div>

                  <div className="bg-amber-900/20 border border-amber-500/30 rounded-lg p-4">
                    <h4 className="text-amber-300 font-medium mb-2">Video Tips:</h4>
                    <ul className="text-amber-200 text-sm space-y-1">
                      <li>• Keep it between 1-3 minutes for best engagement</li>
                      <li>• Ensure good lighting and clear audio</li>
                      <li>• Share specific transformations you experienced</li>
                      <li>• Mention Kanksha and your ¡FLo! experience</li>
                      <li>• Speak from the heart - authenticity resonates</li>
                    </ul>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Brief Written Summary (Optional)
                    </label>
                    <Textarea
                      placeholder="Provide a brief summary of what you shared in your video..."
                      rows={3}
                      className="bg-black/50 border-stone-500/30 text-white placeholder-gray-400"
                    />
                  </div>
                </div>
              )}

              {/* Rating Section */}
              {feedbackType && (
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Rate Your Experience</label>
                  <div className="flex space-x-2">
                    {[1, 2, 3, 4, 5].map((rating) => (
                      <button key={rating} className="p-2 hover:bg-stone-500/20 rounded">
                        <Star className="w-8 h-8 text-gray-400 hover:text-stone-400 transition-colors" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Permission and Privacy */}
              {feedbackType && (
                <div className="space-y-4">
                  <div className="bg-stone-900/30 rounded-lg p-4 border border-stone-500/20">
                    <h4 className="text-white font-medium mb-3">Sharing Permissions</h4>
                    <div className="space-y-2">
                      <label className="flex items-start space-x-3">
                        <input
                          type="checkbox"
                          className="mt-1 rounded border-stone-500/30 bg-black/50 text-stone-400"
                        />
                        <span className="text-gray-300 text-sm">
                          I give permission to use my testimonial on the website and marketing materials
                        </span>
                      </label>
                      <label className="flex items-start space-x-3">
                        <input
                          type="checkbox"
                          className="mt-1 rounded border-stone-500/30 bg-black/50 text-stone-400"
                        />
                        <span className="text-gray-300 text-sm">
                          I'm comfortable with my name being displayed (you can use initials if preferred)
                        </span>
                      </label>
                      <label className="flex items-start space-x-3">
                        <input
                          type="checkbox"
                          className="mt-1 rounded border-stone-500/30 bg-black/50 text-stone-400"
                        />
                        <span className="text-gray-300 text-sm">
                          Please keep me updated about future ¡FLo! offerings and events
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
              )}

              {feedbackType && (
                <Button className="w-full bg-gradient-to-r from-stone-600 to-stone-700 hover:from-stone-700 hover:to-stone-800 text-white py-3 text-lg font-semibold rounded-full transform hover:scale-105 transition-all duration-300">
                  {feedbackType === "video" ? "Submit Video Testimonial" : "Share Your Story"}
                </Button>
              )}

              {!feedbackType && (
                <div className="text-center py-8">
                  <Quote className="w-12 h-12 text-stone-400 mx-auto mb-4" />
                  <p className="text-gray-400 italic">Choose how you'd like to share your transformation story above</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Impact Stats Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-stone-900/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-stone-400 to-gray-400 bg-clip-text text-transparent">
            Transformation Impact
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-gray-900/30 to-stone-900/30 border-gray-500/30 text-center">
              <CardContent className="p-8">
                <Zap className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                <div className="text-4xl font-bold text-white mb-2">1000+</div>
                <p className="text-gray-300">Breakthrough Moments</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-stone-900/30 to-gray-900/30 border-stone-500/30 text-center">
              <CardContent className="p-8">
                <Star className="w-16 h-16 mx-auto mb-4 text-stone-400" />
                <div className="text-4xl font-bold text-white mb-2">98%</div>
                <p className="text-gray-300">Satisfaction Rate</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
