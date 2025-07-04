import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  CheckCircle,
  Clock,
  DollarSign,
  Phone,
  Rocket,
  Globe,
  BookOpen,
} from "lucide-react";

const benefits = [
  {
    icon: CheckCircle,
    title: "Government Recognized Certification",
    description: "YCB & AYUSH approved - valid nationwide for teaching",
    color: "text-[#80415e]",
    stat: "100%",
    bgColor: "bg-[#80415e]/10",
  },
  {
    icon: Clock,
    title: "Lightning Fast Completion",
    description: "Get certified in 4-6 weeks vs 3-6 months elsewhere",
    color: "text-green-600",
    stat: "75%",
    bgColor: "bg-green-100",
  },
  {
    icon: DollarSign,
    title: "Massive Cost Savings",
    description: "₹15-25K vs ₹35-60K at other institutes",
    color: "text-blue-600",
    stat: "60%",
    bgColor: "bg-blue-100",
  },
  {
    icon: Phone,
    title: "24/7 Expert Support",
    description: "Personal mentors + doubt clearing sessions anytime",
    color: "text-purple-600",
    stat: "24/7",
    bgColor: "bg-purple-100",
  },
  {
    icon: Rocket,
    title: "Zero Experience Required",
    description: "Complete beginner to confident instructor transformation",
    color: "text-orange-600",
    stat: "0→100",
    bgColor: "bg-orange-100",
  },
  {
    icon: Globe,
    title: "Hybrid Learning Model",
    description: "Online theory + live practical sessions for flexibility",
    color: "text-teal-600",
    stat: "Hybrid",
    bgColor: "bg-teal-100",
  },
  {
    icon: BookOpen,
    title: "Complete Learning Package",
    description: "All materials, certificates, and lifetime access included",
    color: "text-indigo-600",
    stat: "∞",
    bgColor: "bg-indigo-100",
  },
];

export function InfoCards() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#FFE9D1] to-[#FFE8E8]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why <span className="text-[#80415e]">5000+ Students</span> Choose
            Us?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The fastest, most affordable path to yoga instructor certification
            with
            <span className="font-semibold text-[#80415e]">
              {" "}
              lifetime earning potential
            </span>{" "}
            and personal transformation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="h-full border-2 border-transparent hover:border-[#80415e] transition-all duration-500 bg-gradient-to-br from-white via-gray-50 to-[#80415e]/5 hover:shadow-2xl transform hover:-translate-y-2 group">
                  <CardContent className="p-8 text-center relative overflow-hidden">
                    {/* Decorative corner */}
                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[#80415e]/10 to-transparent rounded-bl-full"></div>

                    {/* Stat Badge */}
                    <div className="absolute top-4 right-4 text-xs font-bold text-[#80415e] bg-[#80415e]/10 px-3 py-1 rounded-full border border-[#80415e]/20">
                      {benefit.stat}
                    </div>

                    <div
                      className={`inline-flex items-center justify-center w-20 h-20 rounded-3xl ${benefit.bgColor} mb-6 group-hover:scale-125 transition-all duration-500 shadow-lg border-2 border-white`}
                    >
                      <Icon className={`w-10 h-10 ${benefit.color}`} />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-[#80415e] transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {benefit.description}
                    </p>

                    {/* Animated bottom line */}
                    <div className="relative overflow-hidden">
                      <div
                        className={`h-2 ${benefit.bgColor} rounded-full transition-all duration-500 group-hover:scale-x-110`}
                      ></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
