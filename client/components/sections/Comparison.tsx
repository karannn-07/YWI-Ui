import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Check, X, Crown, Trophy, Star, Zap } from "lucide-react";

const comparisonFeatures = [
  {
    category: "Speed & Efficiency",
    icon: Zap,
    swastiValue: "4-6 Weeks",
    swastiDetail: "Lightning fast completion",
    othersValue: "3-6 Months",
    othersDetail: "Slow traditional approach",
    advantage: "75% Faster",
  },
  {
    category: "Investment Cost",
    icon: Trophy,
    swastiValue: "₹15,000 - ₹25,000",
    swastiDetail: "Most affordable in market",
    othersValue: "₹35,000 - ₹60,000",
    othersDetail: "Premium pricing",
    advantage: "60% Savings",
  },
  {
    category: "Learning Support",
    icon: Star,
    swastiValue: "24/7 Mentor Support",
    swastiDetail: "Always available guidance",
    othersValue: "Limited Office Hours",
    othersDetail: "Restricted availability",
    advantage: "Round-the-clock",
  },
  {
    category: "Class Size",
    icon: Crown,
    swastiValue: "15-20 Students",
    swastiDetail: "Personalized attention",
    othersValue: "30+ Students",
    othersDetail: "Crowded batches",
    advantage: "50% Smaller",
  },
];

export function Comparison() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#80415e]/5 via-white to-[#FFE9D1]/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#80415e]/10 text-[#80415e] px-6 py-3 rounded-full font-semibold text-sm mb-6">
            <Trophy className="w-5 h-5" />
            The Clear Winner
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Smart Students Choose{" "}
            <span className="text-[#80415e]">Swasti Bharat</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            We don't just compete — we dominate every metric that matters to
            your success
          </p>
        </motion.div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {comparisonFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="h-full border-2 border-[#80415e]/20 hover:border-[#80415e] transition-all duration-300 bg-white shadow-lg hover:shadow-2xl">
                  <CardContent className="p-8">
                    {/* Category Header */}
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-[#80415e]/10 rounded-xl flex items-center justify-center">
                        <Icon className="w-6 h-6 text-[#80415e]" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">
                          {feature.category}
                        </h3>
                        <div className="text-sm font-medium text-[#80415e] bg-[#80415e]/10 px-3 py-1 rounded-full inline-block mt-1">
                          {feature.advantage}
                        </div>
                      </div>
                    </div>

                    {/* Comparison */}
                    <div className="space-y-4">
                      {/* Swasti Bharat */}
                      <div className="bg-gradient-to-r from-[#80415e]/10 to-[#80415e]/5 p-6 rounded-2xl border-2 border-[#80415e]/20">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-2">
                            <Check className="w-5 h-5 text-[#80415e]" />
                            <span className="font-bold text-[#80415e] text-lg">
                              Swasti Bharat
                            </span>
                          </div>
                          <Crown className="w-5 h-5 text-[#80415e]" />
                        </div>
                        <div className="text-2xl font-bold text-gray-900 mb-1">
                          {feature.swastiValue}
                        </div>
                        <div className="text-sm text-gray-600">
                          {feature.swastiDetail}
                        </div>
                      </div>

                      {/* Others */}
                      <div className="bg-gray-50 p-6 rounded-2xl border-2 border-gray-200">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-2">
                            <X className="w-5 h-5 text-gray-400" />
                            <span className="font-bold text-gray-600 text-lg">
                              Other Institutes
                            </span>
                          </div>
                        </div>
                        <div className="text-2xl font-bold text-gray-500 mb-1">
                          {feature.othersValue}
                        </div>
                        <div className="text-sm text-gray-500">
                          {feature.othersDetail}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-[#80415e] to-[#80415e]/80 text-white p-8 rounded-3xl max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Join the Winning Side?
            </h3>
            <p className="text-xl mb-6 opacity-90">
              Don't settle for average when you can have the best. Join 5000+
              successful graduates who chose excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#80415e] hover:bg-gray-100 font-bold px-8 py-4 rounded-full text-lg transition-colors duration-200">
                🚀 Choose Excellence - Enroll Now
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-[#80415e] font-bold px-8 py-4 rounded-full text-lg transition-colors duration-200">
                📊 See Full Comparison
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
