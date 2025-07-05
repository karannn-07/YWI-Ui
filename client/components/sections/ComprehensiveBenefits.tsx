import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Award,
  Briefcase,
  Home,
  Heart,
  UserCheck,
  Clock,
  Check,
  Star,
  BookOpen,
} from "lucide-react";

const comprehensiveBenefits = [
  {
    icon: Award,
    title: "Government Approved Certification",
    description: "YCB & Ministry of AYUSH recognized nationwide",
    category: "Certification",
    testimonial: "The government recognition opened so many doors for me!",
    author: "Priya S.",
  },
  {
    icon: Briefcase,
    title: "Multiple Career Opportunities",
    description: "Instructor, wellness coach, studio owner, online classes",
    category: "Career",
    testimonial: "Now I teach at 3 studios and run my online sessions",
    author: "Rajesh K.",
  },
  {
    icon: Home,
    title: "Work From Home Flexibility",
    description: "Earn ₹20-80K monthly with flexible schedules",
    category: "Lifestyle",
    testimonial: "Perfect work-life balance with great income",
    author: "Anjali M.",
  },
  {
    icon: Heart,
    title: "Transform Personal Health",
    description: "Heal stress, PCOS, immunity issues, back pain naturally",
    category: "Wellness",
    testimonial: "Fixed my back pain while building a career",
    author: "Meera D.",
  },
  {
    icon: UserCheck,
    title: "Zero Experience Required",
    description: "Complete beginner to confident instructor journey",
    category: "Accessibility",
    testimonial: "Started as a complete beginner, now teaching daily",
    author: "Rohit P.",
  },
  {
    icon: Clock,
    title: "Fast-Track Completion",
    description: "Certified in weeks, not months - save time & money",
    category: "Efficiency",
    testimonial: "Got certified in 6 weeks, started earning immediately",
    author: "Sneha R.",
  },
];

const stats = [
  { number: "5000+", label: "Certified Instructors", icon: Award },
  { number: "₹25-80K", label: "Monthly Earning Potential", icon: Clock },
  { number: "100%", label: "Government Recognition", icon: Check },
  { number: "4-6 Weeks", label: "Fast Completion", icon: Clock },
];

export function ComprehensiveBenefits() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#FFE8E8] via-white to-[#FFE9D1] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,theme(colors.primary)_2px,transparent_2px)] bg-[length:60px_60px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-full font-semibold text-sm mb-6">
            <Award className="w-5 h-5" />
            Complete YWI Certification Benefits
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            Transform Your Life with{" "}
            <span className="text-primary">Yoga Mastery</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            From complete beginner to confident instructor — unlock a fulfilling
            career while transforming your health, mindset, and life purpose.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-primary/10"
                >
                  <Icon className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {comprehensiveBenefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group"
              >
                <Card className="h-full border-border hover:border-primary/30 transition-all duration-300 bg-white/90 backdrop-blur-sm hover:shadow-xl">
                  <CardContent className="p-6">
                    {/* Category Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                        {benefit.category}
                      </span>
                    </div>

                    {/* Icon & Title */}
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-foreground mb-2 leading-tight">
                          {benefit.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                          {benefit.description}
                        </p>
                      </div>
                    </div>

                    {/* Testimonial */}
                    <div className="bg-accent/10 p-3 rounded-lg border-l-4 border-accent">
                      <p className="text-sm italic text-foreground mb-2">
                        "{benefit.testimonial}"
                      </p>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-3 h-3 fill-accent text-accent"
                            />
                          ))}
                        </div>
                        <span className="text-xs font-medium text-accent">
                          — {benefit.author}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Motivational CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-primary/10 via-white to-accent/10 rounded-3xl p-12 border-2 border-primary/20"
        >
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Your Journey to{" "}
              <span className="text-primary">Wellness & Purpose</span> Starts
              Here
            </h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Don't just dream about a meaningful career — make it reality. Join
              thousands who've transformed their lives through yoga mastery.
              <br />
              <span className="font-semibold text-foreground mt-2 block">
                Your future self will thank you for taking this step today.
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-[#80415e] hover:bg-[#80415e]/90 text-white font-semibold px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <Award className="w-5 h-5 mr-2" />
                Join Now - Transform Your Life
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#80415e] text-[#80415e] hover:bg-[#80415e] hover:text-white font-semibold px-8 py-4 rounded-full text-lg"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Explore Complete Curriculum
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-6 mt-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-600" />
                <span>Government Approved</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-600" />
                <span>5000+ Success Stories</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-600" />
                <span>Lifetime Support</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-600" />
                <span>100% Satisfaction</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
