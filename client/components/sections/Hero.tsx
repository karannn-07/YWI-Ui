import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-[#FFE8E8] via-[#FFE9D1] to-[#FFE8E8] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,theme(colors.primary)_1px,transparent_1px)] bg-[length:60px_60px]"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Start Your Certified{" "}
            <span className="text-[#80415e]">Yoga Career Today</span>
            <br />
            <span className="text-2xl md:text-4xl font-medium text-muted-foreground">
              — with Swasti Bharat
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Transform your passion into profession with India's fastest yoga
            instructor certification program.
            <br />
            <span className="font-semibold text-[#80415e]">
              Government-approved • Expert mentorship • Lifetime support
            </span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              className="bg-[#80415e] hover:bg-[#80415e]/90 text-white font-semibold px-12 py-4 rounded-full text-lg shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              Start Your Journey
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-[#80415e] text-[#80415e] hover:bg-[#80415e] hover:text-white font-semibold px-12 py-4 rounded-full text-lg transform hover:scale-105 transition-all duration-200"
            >
              View Curriculum
            </Button>
          </motion.div>

          {/* Redesigned Feature Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
          >
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg border-l-4 border-[#80415e] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-12 h-12 bg-gradient-to-br from-[#80415e] to-[#80415e]/70 rounded-xl flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-[#80415e] rounded-full"></div>
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Government Certified
              </h3>
              <p className="text-sm text-gray-600">
                YCB & AYUSH Ministry approved nationwide recognition
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg border-l-4 border-green-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Fast Track Learning
              </h3>
              <p className="text-sm text-gray-600">
                Complete certification in just 4-6 weeks vs 3-6 months
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg border-l-4 border-blue-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Expert Mentorship
              </h3>
              <p className="text-sm text-gray-600">
                24/7 support from certified yoga masters and career guidance
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg border-l-4 border-purple-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Career Success
              </h3>
              <p className="text-sm text-gray-600">
                Earn ₹25-80K monthly with flexible teaching opportunities
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute top-20 right-10 w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-xl"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-20 left-10 w-24 h-24 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-xl"
        ></motion.div>
      </div>
    </section>
  );
}
