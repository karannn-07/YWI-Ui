import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  Building2,
  Shield,
  TrendingUp,
  Heart,
  GraduationCap,
  Users2,
  Clock,
  Award,
} from "lucide-react";

const govBenefits = [
  {
    icon: Building2,
    title: "Government Job Opportunities",
    description:
      "Work in schools, hospitals, wellness centers, and AYUSH ministry programs",
    color: "text-primary",
  },
  {
    icon: Shield,
    title: "Job Security & Pension",
    description:
      "Stable government employment with pension benefits and healthcare coverage",
    color: "text-accent",
  },
  {
    icon: TrendingUp,
    title: "Career Growth",
    description:
      "Structured promotion opportunities and skill development programs",
    color: "text-primary",
  },
  {
    icon: Heart,
    title: "Public Health Impact",
    description:
      "Contribute to national wellness initiatives and community health programs",
    color: "text-accent",
  },
  {
    icon: GraduationCap,
    title: "Educational Sector",
    description: "Teach in government schools, colleges, and sports academies",
    color: "text-primary",
  },
  {
    icon: Users2,
    title: "Community Service",
    description:
      "Work with diverse populations and serve rural and urban communities",
    color: "text-accent",
  },
  {
    icon: Clock,
    title: "Work-Life Balance",
    description: "Fixed working hours with holidays and leave benefits",
    color: "text-primary",
  },
  {
    icon: Award,
    title: "AYUSH Recognition",
    description:
      "Official recognition under Ministry of AYUSH for yoga professionals",
    color: "text-accent",
  },
];

export function GovBenefits() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium text-sm mb-4">
            <Building2 className="w-4 h-4" />
            Government Career Opportunities
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Build a Secure Career in{" "}
            <span className="text-blue-600">Government Sector</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Your YWI certification opens doors to stable government positions
            with excellent benefits, job security, and the opportunity to serve
            the nation's wellness goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {govBenefits.map((benefit, index) => {
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
                <Card className="h-full border-border hover:border-blue-300 transition-all duration-300 bg-white/80 backdrop-blur-sm hover:shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4 group-hover:bg-blue-200 transition-colors duration-300`}
                    >
                      <Icon className={`w-8 h-8 text-blue-600`} />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 shadow-lg border border-blue-200"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">2000+</div>
              <div className="text-muted-foreground text-sm">
                Government Positions Available
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">
                ₹25-60K
              </div>
              <div className="text-muted-foreground text-sm">
                Monthly Salary Range
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-muted-foreground text-sm">
                Government Recognition
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-muted-foreground text-sm">
                Students in Govt Jobs
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
