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
            Turn Your Passion Into{" "}
            <span className="text-[#80415e]">Purpose</span>
            <br />
            <span className="text-2xl md:text-4xl font-medium text-muted-foreground">
              Become a Certified Yoga Instructor in Just 4-6 Weeks
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Join 5000+ successful instructors who transformed their lives with
            our government-approved YWI certification.
            <span className="font-semibold text-[#80415e]">
              {" "}
              Earn ₹25-80K monthly
            </span>{" "}
            while sharing the gift of wellness.
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

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span>Government Approved</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span>500+ Successful Students</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span>Quick Certification</span>
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
