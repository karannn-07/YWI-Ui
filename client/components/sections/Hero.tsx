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
              className="bg-[#80415e] hover:bg-[#80415e]/90 text-white font-semibold px-8 py-3 rounded-full text-lg shadow-lg"
            >
              🚀 Start Your Transformation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-[#80415e] text-[#80415e] hover:bg-[#80415e] hover:text-white font-semibold px-8 py-3 rounded-full text-lg"
            >
              📚 Download Free Guide
            </Button>
          </motion.div>

          {/* Enhanced Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
          >
            <div className="bg-[#80415e]/10 p-4 rounded-xl text-center border border-[#80415e]/20">
              <div className="text-2xl font-bold text-[#80415e] mb-1">✅</div>
              <div className="text-sm font-medium text-[#80415e]">
                Government
              </div>
              <div className="text-xs text-muted-foreground">Approved</div>
            </div>
            <div className="bg-[#80415e]/10 p-4 rounded-xl text-center border border-[#80415e]/20">
              <div className="text-2xl font-bold text-[#80415e] mb-1">
                5000+
              </div>
              <div className="text-sm font-medium text-[#80415e]">Success</div>
              <div className="text-xs text-muted-foreground">Stories</div>
            </div>
            <div className="bg-[#80415e]/10 p-4 rounded-xl text-center border border-[#80415e]/20">
              <div className="text-2xl font-bold text-[#80415e] mb-1">⚡</div>
              <div className="text-sm font-medium text-[#80415e]">
                4-6 Weeks
              </div>
              <div className="text-xs text-muted-foreground">Fast Track</div>
            </div>
            <div className="bg-[#80415e]/10 p-4 rounded-xl text-center border border-[#80415e]/20">
              <div className="text-2xl font-bold text-[#80415e] mb-1">💰</div>
              <div className="text-sm font-medium text-[#80415e]">₹25-80K</div>
              <div className="text-xs text-muted-foreground">Monthly</div>
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
