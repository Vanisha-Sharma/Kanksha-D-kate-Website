"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Zap,
  ArrowRight,
  CheckCircle,
  Download,
  Target,
  Quote,
  Play,
  ChevronDown,
  ChevronRight,
  Clock,
  Infinity,
  TrendingUp,
  Compass,
  Rocket,
  Crown,
  Diamond,
  Plus,
  Minus,
  Heart,
  Brain,
  Shield,
  Users,
  Lightbulb,
  Eye,
  Sparkles,
  Flame,
  Star,
  ZapIcon,
  MessageCircle,
  MoreHorizontal,
} from "lucide-react";
import { FloatingElements } from "@/components/floating-elements";
import { useState } from "react";

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<
    "immersion" | "stream" | null
  >(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [expandedBenefit, setExpandedBenefit] = useState<string | null>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    whatsappNumber: "",
    email: "",
    service: "",
    message: "",
    experience: "",
    goals: "",
    timeline: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Simulate document download
      const link = document.createElement("a");
      link.href = "/placeholder.pdf";
      link.download = "FLo-Application.pdf";
      link.click();

      setFormData({
        fullName: "",
        whatsappNumber: "",
        email: "",
        service: "",
        message: "",
        experience: "",
        goals: "",
        timeline: "",
      });
    }, 2000);
  };

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const faqData = [
    {
      question: "How is ¡FLo! different from traditional coaching or therapy?",
      answer:
        "¡FLo! works at the neurological level through Quanta Integration Science™, creating permanent shifts in your internal operating system rather than temporary behavioral changes. It's precision neuroscience, not motivation.",
    },
    {
      question: "What makes the results permanent?",
      answer:
        "The installations happen at the unconscious level, rewiring your neural patterns. Once installed, these changes become your new natural state - no willpower or maintenance required.",
    },
    {
      question: "How quickly will I see results?",
      answer:
        "Most clients notice shifts during the first installation cycle. The changes compound over time, with significant transformations typically visible within the first 30-60 days.",
    },
    {
      question: "Is this suitable for my specific situation?",
      answer:
        "¡FLo! is designed for high-performers across all fields. Whether you're a CEO, parent, artist, or entrepreneur, the technology adapts to your unique internal architecture.",
    },
    {
      question: "What is the mode of sessions?",
      answer:
        "Available online for all. For clients in Mumbai, India, in-person sessions at the client’s location can be arranged on request, subject to Kanksha’s availability.In both formats, the effectiveness of the cycles remains equally powerful.",
    },
    {
      question:
        "Do you prescribe medications, or do installations using some machines? How safe is this?",
      answer: (
        <>
          <p>None. We do not use any medicines or machines.</p>
          <p>
            It’s completely safe because QIS awakens the natural evolution that
            was always meant for you. In fact, in today’s fast-changing world,
            staying the same is far more unsafe. This science simply aligns you
            with your best version, so you’re not just reacting to life, but
            rising with it, powerfully and peacefully with happiness.
          </p>
        </>
      ),
    },
    {
      question: "Is this work similar to clinical professionals like Clinical Psychologists, Counseling Psychologists, therapists etc?",
      answer: 
      "No. Please note, this work is not a substitute for medical, psychological, or emergency care. Participants engage in deep personal evolution that influences various areas of their life and individual results may vary. It is recommended that this be approached as a complementary system to support holistic well-being and clients are advised to consult official medical counsel from their medical clinician when needed."
    }
  ];

  const benefitTiles = [
    {
      id: "emotional-mastery",
      title: "Emotional Mastery",
      icon: Heart,
      color: "from-red-600 to-pink-600",
      description:
        "Embedded clarity of thought at the source of reaction, replacing limiting emotional dependencies and behavioral loops with clear, empowered responses.",
    },
    {
      id: "inner-harmony",
      title: "Inner Harmony",
      icon: Brain,
      color: "from-purple-600 to-blue-600",
      description:
        "Root out unresourceful states, resolve unconscious conflicts, double binds, and misfiring emotional loops for complete internal alignment.",
    },
    {
      id: "trigger-neutralization",
      title: "Trigger Neutralization",
      icon: Shield,
      color: "from-blue-600 to-cyan-600",
      description:
        "Strategic interventions to neutralize triggers, addictions, and phobias at their neurological root, creating lasting freedom.",
    },
    {
      id: "resourceful-states",
      title: "On-Demand Resourceful States",
      icon: ZapIcon,
      color: "from-yellow-600 to-orange-600",
      description:
        "Install the ability to access peak performance states effortlessly across business, negotiations, parenting, health, creativity, and leadership.",
    },
    {
      id: "relationship-intelligence",
      title: "Relationship Intelligence",
      icon: Users,
      color: "from-green-600 to-emerald-600",
      description:
        "Develop authentic ability to bond deeply, intuitively, and impactfully with clients, stakeholders, family, teams, and yourself.",
    },
    {
      id: "vitality-restoration",
      title: "Vitality & Balance",
      icon: Sparkles,
      color: "from-pink-600 to-rose-600",
      description:
        "Internal fine-tuning that reawakens energy, sharpens focus, and evokes youthful radiance - feel and look almost a decade younger!",
    },
    {
      id: "enhanced-awareness",
      title: "Enhanced Awareness",
      icon: Eye,
      color: "from-indigo-600 to-purple-600",
      description:
        "Develop the instinct to detect opportunities, misalignment, or brilliance before others can, giving you a strategic advantage.",
    },
    {
      id: "neurological-fluidity",
      title: "Neurological Fluidity",
      icon: Flame,
      color: "from-orange-600 to-red-600",
      description:
        "Adaptability in challenging scenarios and taking on advanced responsibilities without stress or burnout.",
    },
    {
      id: "decision-making",
      title: "Seamless Decision-Making",
      icon: Lightbulb,
      color: "from-amber-600 to-yellow-600",
      description:
        "Consistent access to clear, congruent decisions without overthinking or second-guessing yourself.",
    },
    {
      id: "charisma-influence",
      title: "Charisma & Social Influence",
      icon: Star,
      color: "from-violet-600 to-purple-600",
      description:
        "A magnetic presence unfolds, subtly commanding attention, trust, and natural influence across personal and professional spaces.",
    },
    {
      id: "lot-more",
      title: "Lot More",
      icon: MoreHorizontal,
      color: "from-slate-600 to-gray-600",
      description:
        "Many shifts occur specific to each client's matrix. Some shifts have been like, healthy habits formation, no more smoking/alcohol, no more binge-eating, managed weight, evolved daily choices in the kind of food they reach out for, music they listen to, movies they choose to watch, the way they dress, the right people showing up to help their next step, and overall life helping them reach at exceptional places in life. And lot more countless evolutionary breakthroughs unfold, unique and beneficial to each individual's matrix.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <FloatingElements />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center py-12">
        {/* Dynamic Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-stone-900 via-gray-900 to-black"></div>
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-10"></div>

          {/* Animated Particles */}
          <div className="absolute inset-0">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="absolute w-0.5 h-0.5 sm:w-1 sm:h-1 bg-stone-400 rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${3 + Math.random() * 4}s`,
                }}
              />
            ))}
          </div>

          {/* Geometric Overlays */}
          <div className="absolute inset-0 opacity-3 sm:opacity-5">
            <div
              className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-48 sm:h-48 border border-stone-400 rotate-45 animate-spin"
              style={{ animationDuration: "120s" }}
            ></div>
            <div className="absolute bottom-1/4 right-1/4 w-24 h-24 sm:w-32 sm:h-32 border border-gray-400 rotate-12 animate-pulse"></div>
            <div
              className="absolute top-3/4 left-3/4 w-16 h-16 sm:w-24 sm:h-24 border border-stone-500 -rotate-45 animate-bounce"
              style={{ animationDuration: "12s" }}
            ></div>
          </div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Main Hero Content */}
          <div className="mb-8 sm:mb-12">
            <div className="relative inline-block mb-6 sm:mb-8">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-shimmer animate-gradient-shift leading-none tracking-tight pb-6">
                ¡FLo!
              </h1>
              <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-stone-500/20 to-gray-500/20 blur-2xl sm:blur-3xl animate-pulse"></div>
            </div>

            <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-200 leading-relaxed font-light">
                Where{" "}
                <span className="text-stone-400 font-bold">Neuroscience</span>{" "}
                meets <span className="text-stone-400 font-bold">Destiny</span>
              </p>

              <div className="relative">
                <div className="bg-gradient-to-r from-stone-900/60 to-gray-900/60 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-stone-500/30">
                  <p className="text-base sm:text-lg lg:text-xl text-gray-200 leading-relaxed mb-3 sm:mb-4">
                    ¡FLo! is a worldwide experiential journey that{" "}
                    <span className="text-stone-300 font-bold">
                      <u className="underline">F</u>inetunes{" "}
                      <u className="underline">L</u>ife{" "}
                      <u className="underline">o</u>utcomes
                    </span>{" "}
                    by creating precise changes in your mind's cosmos.
                  </p>
                  <p className="text-sm sm:text-base lg:text-lg text-stone-400 mb-4">
                    Make brilliance automatic so you don't have to think about
                    becoming better…
                    <br />
                    <span className="text-lg sm:text-xl lg:text-2xl font-bold text-white">
                      YOU SIMPLY ARE!
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Compact Video Preview */}
          <div className="mb-8 sm:mb-12">
            <div className="relative max-w-3xl mx-auto">
              <div
                className="relative aspect-video bg-gradient-to-br from-stone-800 to-gray-800 rounded-xl sm:rounded-2xl overflow-hidden border border-stone-500/30 group cursor-pointer"
                onClick={() => setIsVideoPlaying(!isVideoPlaying)}
              >
                <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=700&text=FLo+Experience+Preview')] bg-cover bg-center opacity-80"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30"></div>

                {!isVideoPlaying && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-6 h-6 sm:w-8 sm:h-8 text-white ml-0.5 sm:ml-1" />
                    </div>
                  </div>
                )}

                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                  <h3 className="text-sm sm:text-base lg:text-lg font-bold text-white mb-1 sm:mb-2">
                    Experience ¡FLo! in Action
                  </h3>
                  <p className="text-gray-300 text-xs sm:text-sm">
                    See how precision neuroscience creates lasting
                    transformation
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Hero CTA */}
          <div className="space-y-4 sm:space-y-6">
            <Button
              size="lg"
              className="btn-professional text-white w-full sm:w-auto px-6 sm:px-10 lg:px-14 py-3 sm:py-4 lg:py-5 text-base sm:text-lg lg:text-xl font-bold rounded-full group relative overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-300"
              onClick={() =>
                document
                  .getElementById("service-selector")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3 lg:gap-4">
                <span className="whitespace-normal break-words text-center leading-tight">
                  Discover Your ¡FLo! Journey
                </span>
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 flex-shrink-0 transition-transform group-hover:translate-x-2" />
              </span>
            </Button>

            <p className="text-gray-400 text-xs sm:text-sm">
              Join the select few who've unlocked their cosmic potential
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-stone-400" />
        </div>
      </section>

      {/* Service Selector - Clean Design */}
      <section id="service-selector" className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-shimmer animate-gradient-shift leading-tight text-center break-words px-2 sm:px-4">
              Choose Your Transformation Path
            </h2>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              It isn't about giving you motivation. It's about switching your
              inner gears at the source, making brilliance automatic.
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed mt-6">
              Enrollment is by invitation only. Each individual is welcomed into
              a 1:1 high-touch experiential journey, curated to initiate rapid
              internal refinements that ripple across every life dimension from
              business performance to emotional mastery, deeper relationships to
              personal equilibrium. At ¡FLo!, all changes happen during the
              installation cycles and there's nothing you need to do afterward.
              You'll start noticing shifts naturally as the cycles progress.
            </p>
            <div className="w-32 h-1 bg-professional-gradient mx-auto rounded-full mt-8"></div>
          </div>

          {/* Clean Service Cards */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
            {/* Signature ¡FLo! Immersion */}
            <div className="relative group">
              {/* Colorful Background Header */}
              <div className="relative h-32 sm:h-36 rounded-t-2xl overflow-hidden mb-6 sm:mb-8">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-600 via-yellow-600 to-orange-600"></div>
                <div className="absolute inset-0 bg-[url('/placeholder.svg?height=200&width=400&text=Abstract+Pattern')] bg-cover bg-center opacity-30"></div>
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-center p-4 sm:p-6">
                  <Crown className="w-12 h-12 sm:w-16 sm:h-16 text-white mb-3 sm:mb-4" />
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1 sm:mb-2">
                    Signature ¡FLo! Immersion
                  </h3>
                  <p className="text-white/90 text-sm sm:text-base lg:text-lg">
                    The Complete Transformation Experience
                  </p>
                </div>
              </div>

              {/* Clean Content Section */}
              <div className="space-y-4 sm:space-y-6 px-2 sm:px-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="flex items-center space-x-2 sm:space-x-3 py-2 sm:py-3">
                    <Target className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400 flex-shrink-0" />
                    <span className="text-sm sm:text-base lg:text-lg text-gray-300 font-medium">
                      3 Installation Cycles
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 sm:space-x-3 py-2 sm:py-3">
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 flex-shrink-0" />
                    <span className="text-sm sm:text-base lg:text-lg text-gray-300 font-medium">
                      14-Month Journey
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 sm:space-x-3 py-2 sm:py-3">
                    <Infinity className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 flex-shrink-0" />
                    <span className="text-sm sm:text-base lg:text-lg text-gray-300 font-medium">
                      Lifetime FLo Effect
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 sm:space-x-3 py-2 sm:py-3">
                    <Crown className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400 flex-shrink-0" />
                    <span className="text-sm sm:text-base lg:text-lg text-gray-300 font-medium">
                      Special concession for one immediate family member
                    </span>
                  </div>
                </div>

                <Button
                  className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full"
                  onClick={() => {
                    document
                      .getElementById("application-form")
                      ?.scrollIntoView({ behavior: "smooth" });
                    setFormData((prev) => ({
                      ...prev,
                      service: "signature-immersion",
                    }));
                  }}
                >
                  Request for Evolution
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-stone-500 text-stone-400 hover:bg-stone-500 hover:text-white py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full bg-transparent"
                  onClick={() => {
                    const message =
                      "Hi Kanksha, I'd like some clarity about the ¡FLo! Immersion programme.";
                    const whatsappUrl = `https://wa.me/919999999999?text=${encodeURIComponent(
                      message
                    )}`;
                    window.open(whatsappUrl, "_blank");
                  }}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Clarity chat over WhatsApp
                </Button>
              </div>
            </div>

            {/* ¡FLo! Stream */}
            <div className="relative group">
              {/* Colorful Background Header */}
              <div className="relative h-32 sm:h-36 rounded-t-2xl overflow-hidden mb-6 sm:mb-8">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600"></div>
                <div className="absolute inset-0 bg-[url('/placeholder.svg?height=200&width=400&text=Abstract+Pattern')] bg-cover bg-center opacity-30"></div>
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-center p-4 sm:p-6">
                  <Rocket className="w-12 h-12 sm:w-16 sm:h-16 text-white mb-3 sm:mb-4" />
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1 sm:mb-2">
                    ¡FLo! Stream
                  </h3>
                  <p className="text-white/90 text-sm sm:text-base lg:text-lg">
                    Precision Breakthrough Experience
                  </p>
                </div>
              </div>

              {/* Clean Content Section */}
              <div className="space-y-4 sm:space-y-6 px-2 sm:px-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="flex items-center space-x-2 sm:space-x-3 py-2 sm:py-3">
                    <Diamond className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 flex-shrink-0" />
                    <span className="text-sm sm:text-base lg:text-lg text-gray-300 font-medium">
                      Life domain specific breakthrough experience
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 sm:space-x-3 py-2 sm:py-3">
                    <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 flex-shrink-0" />
                    <span className="text-sm sm:text-base lg:text-lg text-gray-300 font-medium">
                      3-Month Journey
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 sm:space-x-3 py-2 sm:py-3">
                    <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 flex-shrink-0" />
                    <span className="text-sm sm:text-base lg:text-lg text-gray-300 font-medium">
                      Ripple Effect
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 sm:space-x-3 py-2 sm:py-3">
                    <Target className="w-5 h-5 sm:w-6 sm:h-6 text-red-400 flex-shrink-0" />
                    <span className="text-sm sm:text-base lg:text-lg text-gray-300 font-medium">
                      Laser-Focused
                    </span>
                  </div>
                </div>

                <Button
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full"
                  onClick={() => {
                    document
                      .getElementById("application-form")
                      ?.scrollIntoView({ behavior: "smooth" });
                    setFormData((prev) => ({ ...prev, service: "flo-stream" }));
                  }}
                >
                  Request for Evolution
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-stone-500 text-stone-400 hover:bg-stone-500 hover:text-white py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full bg-transparent"
                  onClick={() => {
                    const message =
                      "Hi Kanksha, I'd like some clarity about the ¡FLo! Stream programme.";
                    const whatsappUrl = `https://wa.me/919999999999?text=${encodeURIComponent(
                      message
                    )}`;
                    window.open(whatsappUrl, "_blank");
                  }}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Clarity chat over WhatsApp
                </Button>
              </div>
            </div>
          </div>

          {/* Common Read More Section */}
          <div className="text-center mt-16">
            <button
              onClick={() =>
                setSelectedService(
                  selectedService === "details" ? null : "details"
                )
              }
              className="inline-flex items-center space-x-3 text-gray-400 hover:text-white transition-colors py-4 px-8 border border-stone-500/30 rounded-full hover:border-stone-400/50"
            >
              <span className="text-lg font-medium">
                Read More About Program Details
              </span>
              {selectedService === "details" ? (
                <ChevronDown className="w-5 h-5 transform rotate-180 transition-transform" />
              ) : (
                <ChevronDown className="w-5 h-5 transition-transform" />
              )}
            </button>

            <div
              className={`transition-all duration-500 overflow-hidden ${
                selectedService === "details"
                  ? "max-h-[800px] opacity-100 mt-12"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="max-w-6xl mx-auto mb-16">
                <div className="bg-gradient-to-br from-stone-900/40 to-gray-900/40 rounded-2xl p-8 border border-stone-500/20 backdrop-blur-sm">
                  <h4 className="text-3xl font-bold text-white mb-12 text-center">
                    Your Journey Options
                  </h4>

                  <div className="grid lg:grid-cols-2 gap-12">
                    {/* Signature ¡FLo! Immersion */}
                    <div className="space-y-6 text-left">
                      <div className="flex items-center space-x-4 mb-8">
                        <Crown className="w-8 h-8 text-400" />
                        <h5 className="text-2xl font-bold text-400">
                          Signature ¡FLo! Immersion
                        </h5>
                      </div>

                      <p className="text-lg text-gray-200 mb-6 text-left">
                        As a signature ¡FLo! Patron, here's what you engage in:
                      </p>

                      <div className="space-y-4">
                        {[
                          "Strategic Multi-Layered Audit",
                          "Analysis of Personal Matrix for Evolution",
                          "Three Advanced Quanta Integration Cycles for Evolutionary shifts",
                          "14-Month Engagement with Kanksha",
                          "Lifetime of FLo effect",
                          "Countless breakthroughs and on-demand resourceful state choice",
                          "Investment Amount :  $10,200",
                        ].map((item, index) => (
                          <div
                            key={index}
                            className="flex items-start space-x-3"
                          >
                            <ArrowRight className="w-5 h-5 text-400 mt-1 flex-shrink-0" />
                            <span className="text-gray-300 text-left">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* ¡FLo! Stream */}
                    <div className="space-y-6 text-left">
                      <div className="flex items-center space-x-4 mb-8">
                        <Rocket className="w-8 h-8 text-400" />
                        <h5 className="text-2xl font-bold text-400">
                          ¡FLo! Stream
                        </h5>
                      </div>

                      <p className="text-lg text-gray-200 mb-6 text-left">
                        You engage in laser-focused sessions where we zero
                        in on one defining challenge - personal, professional,
                        or internal and ignite movement that creates a ripple
                        effect across other areas of your life.
                      </p>

                      <div className="space-y-4">
                        {[
                          "Life domain specific breakthrough experience",
                          "3-Month Engagement with Kanksha",
                          "Targeted multi-installations",
                          "Quick transformation catalyst",
                          "Creating ripple effects across other life domains",
                          "Investment Amount :  $4750",
                        ].map((item, index) => (
                          <div
                            key={index}
                            className="flex items-start space-x-3"
                          >
                            <ArrowRight className="w-5 h-5 text-400 mt-1 flex-shrink-0" />
                            <span className="text-gray-300 text-left">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Clean Comparison Table */}
          {/* Clean Comparison Table - Updated Design */}
          <div className="max-w-6xl mx-auto mt-20">
            <div className="bg-gradient-to-br from-stone-900/40 to-gray-900/40 rounded-3xl p-8 border border-stone-500/20 backdrop-blur-sm">
              <h3 className="text-3xl font-bold text-center mb-12 text-white">
                Comparison Matrix
              </h3>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse min-w-[600px]">
                  <thead>
                    <tr className="border-b border-stone-500/30">
                      <th className="text-left py-3 sm:py-4 px-3 sm:px-6 text-lg sm:text-xl text-gray-300 font-semibold">
                        Feature
                      </th>
                      <th className="text-center py-3 sm:py-4 px-3 sm:px-6 text-lg sm:text-xl text-stone-400 font-semibold">
                        Signature Immersion
                      </th>
                      <th className="text-center py-3 sm:py-4 px-3 sm:px-6 text-lg sm:text-xl text-gray-400 font-semibold">
                        Stream
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Duration", "14 Months", "3 Months"],
                      [
                        "Installation Cycles",
                        "3 Advanced Cycles",
                        "Custom procedures tailored to your needs",
                      ],
                      [
                        "Personal Diagnostics",
                        "Multi-dimensional",
                        "Uni-dimensional",
                      ],
                      [
                        "Ongoing Support",
                        "Concession for one immediate family member",
                        "2 Months post programs",
                      ],
                      ["Exclusive Events", "Included*", "Not Included"],
                    ].map(([feature, immersion, stream], index) => (
                      <tr
                        key={index}
                        className="border-b border-stone-500/10 hover:bg-stone-500/5 transition-colors"
                      >
                        <td className="py-2 sm:py-3 px-3 sm:px-6 text-base sm:text-lg text-gray-300 font-medium">
                          {feature}
                        </td>
                        <td className="py-2 sm:py-3 px-3 sm:px-6 text-center text-base sm:text-lg text-stone-300">
                          {immersion}
                        </td>
                        <td className="py-2 sm:py-3 px-3 sm:px-6 text-center text-base sm:text-lg text-gray-300">
                          {stream}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Footnote for Exclusive Events */}
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-400">
                  *For registrations before September 2025. Terms & Conditions
                  apply.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ¡FLo! Benefits Section - Interactive Tiles */}
      <section className="py-32 px-4 bg-gradient-to-b from-black to-stone-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold pb-2 mb-6 text-shimmer animate-gradient-shift">
              What ¡FLo! Patrons Activate Within Them
            </h2>
            <div className="w-32 h-1 bg-professional-gradient mx-auto rounded-full mt-8"></div>
          </div>

          {/* Interactive Benefit Tiles */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {benefitTiles.map((benefit) => (
              <button
                key={benefit.id}
                onClick={() =>
                  setExpandedBenefit(
                    expandedBenefit === benefit.id ? null : benefit.id
                  )
                }
                className={`group relative px-6 py-4 rounded-full font-semibold text-sm transition-all duration-300 transform hover:scale-105 ${
                  expandedBenefit === benefit.id
                    ? `bg-gradient-to-r ${benefit.color} text-white shadow-lg`
                    : "bg-stone-800/50 text-gray-300 hover:bg-stone-700/50 border border-stone-600/30"
                }`}
              >
                <div className="flex items-center space-x-2">
                  <benefit.icon className="w-4 h-4" />
                  <span>{benefit.title}</span>
                </div>

                {/* Subtle glow effect for active tiles */}
                {expandedBenefit === benefit.id && (
                  <div
                    className={`absolute inset-0 rounded-full bg-gradient-to-r ${benefit.color} opacity-20 blur-xl animate-pulse`}
                  ></div>
                )}
              </button>
            ))}
          </div>

          {/* Expanded Benefit Description */}
          <div className="max-w-4xl mx-auto">
            {expandedBenefit && (
              <div className="bg-gradient-to-br from-stone-900/40 to-gray-900/40 rounded-2xl p-8 border border-stone-500/20 backdrop-blur-sm">
                {(() => {
                  const benefit = benefitTiles.find(
                    (b) => b.id === expandedBenefit
                  );
                  if (!benefit) return null;

                  return (
                    <div className="text-center">
                      <div
                        className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${benefit.color} mb-6`}
                      >
                        <benefit.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">
                        {benefit.title}
                      </h3>
                      <p className="text-lg text-gray-200 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  );
                })()}
              </div>
            )}

            {!expandedBenefit && (
              <div className="text-center py-12">
                <p className="text-lg text-gray-400 italic">
                  Click any After-Effect above
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Clean Testimonial Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Quote className="w-16 h-16 text-stone-400 mx-auto mb-8" />

          <blockquote className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-8 italic font-light">
            "Before ¡FLo!, I'd wake up with ambition, only to find myself
            overthinking, reacting, or stalling by noon. I tried productivity
            hacks and mindset tools, but nothing truly stayed. After ¡FLo!, it's
            like I finally met the version of me guided by an internal team that
            just works reliably and in sync."
          </blockquote>

          <div className="flex items-center justify-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-stone-600 to-stone-700 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">RS</span>
            </div>
            <div className="text-left">
              <div className="text-stone-400 font-bold">Rajiv Sharma</div>
              <div className="text-gray-400 text-sm">
                ¡FLo! Immersion Patron
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clean Timeline Section */}
      <section className="py-32 px-4 bg-gradient-to-br from-stone-900/60 to-gray-900/60">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-stone-900/80 to-gray-900/80 rounded-3xl p-8 sm:p-12 lg:p-16 border border-stone-500/30 backdrop-blur-sm">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-bold pb-6 mb-6 text-shimmer animate-gradient-shift">
                How to Start Your Evolution Journey
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Our work is intentionally selective and that's what protects its
                power. Your application helps us ensure you are the right fit
                for FLo.
              </p>
              <div className="w-32 h-1 bg-professional-gradient mx-auto rounded-full mt-8"></div>
            </div>

            {/* Clean Timeline Steps */}
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Download the Application",
                  description:
                    "Begin by downloading the application for the program you wish to engage in.",
                  icon: Download,
                },
                {
                  step: "02",
                  title: "Fill & Submit for Review",
                  description:
                    "Complete the application with care. Allow the answers to flow and submit it for review.",
                  icon: CheckCircle,
                },
                {
                  step: "03",
                  title: "Application Review & Selection",
                  description:
                    "Each application is thoughtfully reviewed. Only a select few are invited to proceed.",
                  icon: Target,
                },
                {
                  step: "04",
                  title: "Receive Your Invitation to Enroll",
                  description:
                    "If selected, you will receive an official invitation to book your spot and begin your journey.",
                  icon: Crown,
                },
              ].map((item, index) => (
                <div key={index} className="text-center space-y-6">
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-br from-stone-600 to-stone-700 rounded-full mx-auto flex items-center justify-center mb-4">
                      <item.icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-stone-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">
                        {item.step}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Clean Application Form */}
      <section id="application-form" className="py-32 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold pb-6 mb-6 text-shimmer animate-gradient-shift">
              Begin Your Transformation
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              A personalized application process designed to ensure the perfect
              alignment with your journey
            </p>
            <div className="w-32 h-1 bg-professional-gradient mx-auto rounded-full mt-8"></div>
          </div>

          <div className="bg-gradient-to-br from-stone-900/20 to-gray-900/20 rounded-3xl p-8 md:p-12 border border-stone-500/20">
            {isSubmitted ? (
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full mx-auto flex items-center justify-center mb-8">
                  <CheckCircle className="w-12 h-12 text-white" />
                </div>

                <h4 className="text-3xl font-bold mb-6 text-green-400">
                  Application Submitted Successfully!
                </h4>

                <div className="space-y-6 text-gray-300 max-w-2xl mx-auto">
                  <p className="text-lg">
                    Thank you for your interest in ¡FLo!. Your application has
                    been submitted and the detailed application document has
                    been downloaded to your device.
                  </p>
                  <p>
                    Please check your email for further instructions on
                    completing your full application, including payment options
                    and next steps.
                  </p>
                  <div className="bg-gradient-to-r from-amber-900/30 to-orange-900/30 rounded-lg p-6 border border-amber-500/20">
                    <p className="text-amber-300 font-semibold">
                      Our expert team will review your application within 48-72
                      hours and contact you personally.
                    </p>
                  </div>
                </div>

                <Button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-8 bg-gradient-to-r from-stone-600 to-stone-700 hover:from-stone-700 hover:to-stone-800 px-8 py-3"
                >
                  Submit Another Application
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Progress Indicator */}
                <div className="flex items-center justify-center space-x-4 mb-12">
                  {[1, 2, 3].map((step) => (
                    <div key={step} className="flex items-center">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
                          currentStep >= step
                            ? "bg-gradient-to-br from-stone-600 to-stone-700 text-white"
                            : "bg-gray-700 text-gray-400"
                        }`}
                      >
                        {step}
                      </div>
                      {step < 3 && (
                        <div
                          className={`w-16 h-1 mx-2 transition-all duration-300 ${
                            currentStep > step ? "bg-stone-600" : "bg-gray-700"
                          }`}
                        ></div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Step 1: Basic Information */}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-white mb-4">
                        Personal Information
                      </h3>
                      <p className="text-gray-300">
                        Let's start with the basics about you
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="fullName"
                          className="block text-sm font-medium text-gray-300 mb-2"
                        >
                          Full Name *
                        </label>
                        <Input
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          required
                          placeholder="Enter your full name"
                          className="bg-black/50 border-stone-500/30 text-white placeholder-gray-400 h-12"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-300 mb-2"
                        >
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="your@email.com"
                          className="bg-black/50 border-stone-500/30 text-white placeholder-gray-400 h-12"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="whatsappNumber"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        WhatsApp Number (with country code) *
                      </label>
                      <Input
                        id="whatsappNumber"
                        name="whatsappNumber"
                        value={formData.whatsappNumber}
                        onChange={handleChange}
                        required
                        placeholder="+1 234 567 8900"
                        className="bg-black/50 border-stone-500/30 text-white placeholder-gray-400 h-12"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="service"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Preferred ¡FLo! Experience *
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full p-3 bg-black/50 border border-stone-500/30 rounded-md text-white h-12"
                      >
                        <option value="">
                          Select your preferred experience
                        </option>
                        <option value="signature-immersion">
                          Signature ¡FLo! Immersion
                        </option>
                        <option value="flo-stream">¡FLo! Stream</option>
                        <option value="organizational">
                          Organizational Programs
                        </option>
                        <option value="consultation">
                          Need WhatsApp Clarity Conversation before applying
                        </option>
                      </select>
                    </div>
                  </div>
                )}

                {/* Step 2: Experience & Goals */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-white mb-4">
                        Your Journey & Aspirations
                      </h3>
                      <p className="text-gray-300">
                        Help us understand your background and goals
                      </p>
                    </div>

                    <div>
                      <label
                        htmlFor="experience"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Previous Experience with Transformation Work
                      </label>
                      <select
                        id="experience"
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                        className="w-full p-3 bg-black/50 border border-stone-500/30 rounded-md text-white h-12"
                      >
                        <option value="">Select your experience level</option>
                        <option value="none">No previous experience</option>
                        <option value="some">
                          Some coaching/therapy experience
                        </option>
                        <option value="extensive">
                          Extensive personal development work
                        </option>
                        <option value="professional">
                          Professional in the field
                        </option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="goals"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Primary Transformation Goals *
                      </label>
                      <Textarea
                        id="goals"
                        name="goals"
                        value={formData.goals}
                        onChange={handleChange}
                        required
                        placeholder="Describe what you hope to achieve through ¡FLo!..."
                        rows={4}
                        className="bg-black/50 border-stone-500/30 text-white placeholder-gray-400"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="timeline"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Preferred Timeline
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full p-3 bg-black/50 border border-stone-500/30 rounded-md text-white h-12"
                      >
                        <option value="">Select your preferred timeline</option>
                        <option value="immediate">
                          Ready to start immediately
                        </option>
                        <option value="month">Within the next month</option>
                        <option value="quarter">
                          Within the next 3 months
                        </option>
                        <option value="flexible">Flexible timing</option>
                      </select>
                    </div>
                  </div>
                )}

                {/* Step 3: Final Details */}
                {currentStep === 3 && (
                  <div className="space-y-6">
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-white mb-4">
                        Complete Your Application
                      </h3>
                      <p className="text-gray-300">
                        Final details to personalize your ¡FLo! experience
                      </p>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Additional Information
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Share anything else that would help us understand your unique situation and needs..."
                        rows={6}
                        className="bg-black/50 border-stone-500/30 text-white placeholder-gray-400"
                      />
                    </div>

                    <div className="bg-gradient-to-r from-amber-900/30 to-orange-900/30 rounded-lg p-6 border border-amber-500/20">
                      <h4 className="text-lg font-bold text-amber-300 mb-3">
                        What Happens Next?
                      </h4>
                      <div className="space-y-2 text-sm text-amber-200">
                        <p>
                          • Your application document will be automatically
                          downloaded
                        </p>
                        <p>
                          • You'll receive an email with detailed next steps
                        </p>
                        <p>
                          • Our team will review your application within 48-72
                          hours
                        </p>
                        <p>
                          • Selected candidates receive a personal consultation
                          call
                        </p>
                        <p>
                          • Payment and scheduling options will be provided upon
                          acceptance
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between items-center pt-8">
                  <Button
                    type="button"
                    onClick={prevStep}
                    disabled={currentStep === 1}
                    variant="outline"
                    className="border-stone-500 text-stone-400 hover:bg-stone-500 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed bg-transparent"
                  >
                    Previous
                  </Button>

                  {currentStep < 3 ? (
                    <Button
                      type="button"
                      onClick={nextStep}
                      className="bg-gradient-to-r from-stone-600 to-stone-700 hover:from-stone-700 hover:to-stone-800 text-white px-8"
                    >
                      Next Step
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-gradient-to-r from-stone-600 to-stone-700 hover:from-stone-700 hover:to-stone-800 text-white px-8 py-3 text-lg font-semibold rounded-full transform hover:scale-105 transition-all duration-300"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          Processing...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          Submit Application
                          <Download className="w-5 h-5" />
                        </span>
                      )}
                    </Button>
                  )}
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Clean FAQ Section */}
      <section className="py-32 px-4 bg-gradient-to-br from-gray-900/60 to-stone-900/60">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900/80 to-stone-900/80 rounded-3xl p-8 sm:p-12 lg:p-16 border border-stone-500/30 backdrop-blur-sm">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold pb-5 mb-6 text-shimmer animate-gradient-shift">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Everything you need to know about ¡FLo! and the transformation
                process
              </p>
              <div className="w-24 h-1 bg-professional-gradient mx-auto rounded-full mt-8"></div>
            </div>

            <div className="space-y-6">
              {faqData.map((faq, index) => (
                <div key={index} className="border-b border-stone-500/20 pb-6">
                  <div
                    className="cursor-pointer transition-all duration-300 hover:text-stone-300"
                    onClick={() =>
                      setExpandedFAQ(expandedFAQ === index ? null : index)
                    }
                  >
                    <div className="flex items-center justify-between py-4">
                      <h3 className="text-xl font-semibold text-white pr-4">
                        {faq.question}
                      </h3>
                      <div className="flex-shrink-0">
                        {expandedFAQ === index ? (
                          <Minus className="w-6 h-6 text-stone-400 transition-transform duration-300" />
                        ) : (
                          <Plus className="w-6 h-6 text-stone-400 transition-transform duration-300" />
                        )}
                      </div>
                    </div>

                    <div
                      className={`transition-all duration-500 overflow-hidden ${
                        expandedFAQ === index
                          ? "max-h-96 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="pt-4">
                        <p className="text-gray-300 leading-relaxed text-lg">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Clean Final CTA Section - No Box */}
      <section className="py-32 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="w-32 h-32 bg-gradient-to-br from-stone-600 to-stone-700 rounded-full mx-auto mb-12 flex items-center justify-center">
            <Compass className="w-16 h-16 text-white" />
          </div>

          <h3 className="text-4xl md:text-5xl font-bold mb-8 text-white leading-tight">
            Your Evolution Awaits
          </h3>

          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join the select few who have discovered what it means to live from
            their highest potential.
          </p>

          <div className="text-3xl font-bold text-stone-400 mb-12">
            Start your PERSONAL EVOLUTION journey today at KANKSHA D'KATE!
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              size="lg"
              className="btn-professional text-white px-12 py-4 text-xl font-bold rounded-full group relative overflow-hidden shadow-2xl"
              onClick={() =>
                document
                  .getElementById("application-form")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <span className="relative z-10 flex items-center gap-3">
                Begin Your Application
                <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-2" />
              </span>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-stone-500 text-stone-400 hover:bg-stone-500 hover:text-white px-12 py-4 text-xl font-bold rounded-full bg-transparent"
              onClick={() =>
                document
                  .getElementById("service-selector")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Compare Services
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
