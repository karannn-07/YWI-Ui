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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
                <Card className="h-full border-border hover:border-[#80415e]/30 transition-all duration-300 bg-gradient-to-br from-gray-50 to-gray-100 hover:shadow-xl">
                  <CardContent className="p-6 text-center relative overflow-hidden">
                    {/* Stat Badge */}
                    <div className="absolute top-3 right-3 text-xs font-bold text-gray-500 bg-gray-200 px-2 py-1 rounded-full">
                      {benefit.stat}
                    </div>

                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${benefit.bgColor} mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className={`w-8 h-8 ${benefit.color}`} />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {benefit.description}
                    </p>

                    {/* Bottom accent line */}
                    <div
                      className={`mt-4 h-1 ${benefit.bgColor} rounded-full`}
                    ></div>
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
