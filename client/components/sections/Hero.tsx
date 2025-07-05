import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#FFE8E8] via-[#FFE9D1] to-[#FFE8E8] overflow-hidden">
      {/* Mandala Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 opacity-10">
          <svg
            viewBox="0 0 200 200"
            className="w-full h-full text-[#80415e] fill-current"
          >
            <defs>
              <pattern
                id="mandala"
                patternUnits="userSpaceOnUse"
                width="200"
                height="200"
              >
                <circle
                  cx="100"
                  cy="100"
                  r="80"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <circle
                  cx="100"
                  cy="100"
                  r="60"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <circle
                  cx="100"
                  cy="100"
                  r="40"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                />
                <g>
                  {Array.from({ length: 8 }).map((_, i) => (
                    <g key={i} transform={`rotate(${i * 45} 100 100)`}>
                      <path
                        d="M100,20 Q110,30 100,40 Q90,30 100,20"
                        fill="currentColor"
                      />
                      <path
                        d="M100,60 Q105,65 100,70 Q95,65 100,60"
                        fill="currentColor"
                      />
                    </g>
                  ))}
                </g>
              </pattern>
            </defs>
            <rect width="200" height="200" fill="url(#mandala)" />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left space-y-8"
          >
            <div className="inline-block">
              <span className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-gray-700 border border-[#80415e]/20">
                International Yoga Day Certified
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
              Start Your Certified
              <br />
              <span className="text-[#80415e]">YOGA CAREER</span>
              <br />
              <span className="text-2xl md:text-3xl font-medium text-gray-600">
                with Swasti Bharat
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-md">
              Transform your passion into profession with India's fastest
              government-approved yoga instructor certification program.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-[#80415e] hover:bg-[#80415e]/90 text-white font-semibold px-8 py-4 rounded-full text-lg shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                LEARN MORE
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-[#80415e] text-[#80415e] hover:bg-[#80415e] hover:text-white font-semibold px-8 py-4 rounded-full text-lg transform hover:scale-105 transition-all duration-200"
              >
                View Curriculum
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Government Approved</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>5000+ Graduates</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>4-6 Weeks Duration</span>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Yoga Silhouette */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative flex justify-center items-center"
          >
            {/* Large Mandala Background */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-80 h-80 md:w-96 md:h-96">
                <svg
                  viewBox="0 0 400 400"
                  className="w-full h-full text-[#80415e]/40 fill-current opacity-30"
                >
                  <defs>
                    <radialGradient id="mandalaGrad" cx="50%" cy="50%" r="50%">
                      <stop
                        offset="0%"
                        stopColor="currentColor"
                        stopOpacity="0.3"
                      />
                      <stop
                        offset="100%"
                        stopColor="currentColor"
                        stopOpacity="0.1"
                      />
                    </radialGradient>
                  </defs>
                  <circle cx="200" cy="200" r="180" fill="url(#mandalaGrad)" />
                  {/* Mandala Pattern */}
                  {Array.from({ length: 12 }).map((_, i) => (
                    <g key={i} transform={`rotate(${i * 30} 200 200)`}>
                      <path
                        d="M200,40 Q220,60 200,80 Q180,60 200,40"
                        fill="currentColor"
                        opacity="0.6"
                      />
                      <path
                        d="M200,120 Q210,130 200,140 Q190,130 200,120"
                        fill="currentColor"
                        opacity="0.4"
                      />
                      <circle
                        cx="200"
                        cy="160"
                        r="3"
                        fill="currentColor"
                        opacity="0.5"
                      />
                    </g>
                  ))}
                  <circle
                    cx="200"
                    cy="200"
                    r="120"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    opacity="0.3"
                  />
                  <circle
                    cx="200"
                    cy="200"
                    r="80"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    opacity="0.2"
                  />
                  <circle
                    cx="200"
                    cy="200"
                    r="40"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    opacity="0.15"
                  />
                </svg>
              </div>
            </div>

            {/* Yoga Silhouette */}
            <div className="relative z-10 w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
              <svg viewBox="0 0 200 200" className="w-full h-full">
                <defs>
                  <linearGradient
                    id="silhouetteGrad"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#4A5568" />
                    <stop offset="100%" stopColor="#2D3748" />
                  </linearGradient>
                </defs>
                {/* Meditation Pose Silhouette */}
                <path
                  d="M100 170
                     C85 170 75 165 75 155
                     L75 140
                     C75 130 80 125 85 125
                     L115 125
                     C120 125 125 130 125 140
                     L125 155
                     C125 165 115 170 100 170 Z

                     M100 125
                     C110 125 118 117 118 107
                     C118 97 110 89 100 89
                     C90 89 82 97 82 107
                     C82 117 90 125 100 125 Z

                     M75 140
                     L60 130
                     C55 127 50 130 50 135
                     L50 145
                     C50 150 55 153 60 150
                     L75 140 Z

                     M125 140
                     L140 130
                     C145 127 150 130 150 135
                     L150 145
                     C150 150 145 153 140 150
                     L125 140 Z"
                  fill="url(#silhouetteGrad)"
                />
              </svg>
            </div>

            {/* Floating dots */}
            <div className="absolute top-10 left-10 w-3 h-3 bg-[#80415e]/60 rounded-full animate-pulse"></div>
            <div
              className="absolute bottom-16 right-12 w-2 h-2 bg-[#80415e]/40 rounded-full animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute top-20 right-8 w-2 h-2 bg-[#80415e]/50 rounded-full animate-pulse"
              style={{ animationDelay: "0.5s" }}
            ></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
