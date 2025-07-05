import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    quote:
      "From complete beginner to earning ₹45,000/month in just 8 weeks! Swasti Bharat changed my entire life trajectory.",
    rating: 5,
  },
  {
    name: "Rajesh Kumar",
    quote:
      "Lost 15kg, cured my anxiety, and now run my own wellness center. This certification gave me everything I dreamed of.",
    rating: 5,
  },
  {
    name: "Anjali Patel",
    quote:
      "Teaching 50+ students online while working my day job. The flexibility and income have been life-changing!",
    rating: 5,
  },
  {
    name: "Meera Desai",
    quote:
      "The support system is incredible. My mentors guided me through every step of building my yoga studio.",
    rating: 5,
  },
  {
    name: "Vikram Singh",
    quote:
      "Best investment for my health and career. Now I'm helping others while earning a great income.",
    rating: 5,
  },
  {
    name: "Kavya Nair",
    quote:
      "The course materials were excellent and the live sessions made all the difference. Highly recommended!",
    rating: 5,
  },
  {
    name: "Arjun Reddy",
    quote:
      "Started my own yoga school after certification. The business guidance was invaluable for my success.",
    rating: 5,
  },
  {
    name: "Deepika Joshi",
    quote:
      "Perfect balance of theory and practical. Now I'm teaching at multiple studios with confidence.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Real Lives, Real{" "}
            <span className="text-[#80415e]">Transformations</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From struggling with health issues to building thriving yoga careers
            -
            <span className="font-semibold text-[#80415e]">
              {" "}
              these are their incredible journeys
            </span>
          </p>
        </motion.div>

        {/* Scrollable Testimonials Container */}
        <div className="relative max-w-7xl mx-auto">
          <div
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 px-4"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group flex-shrink-0"
                style={{ scrollSnapAlign: "start" }}
              >
                <Card className="w-80 h-full border-border hover:border-[#80415e]/30 transition-all duration-300 group-hover:shadow-lg relative overflow-hidden bg-white/80 backdrop-blur-sm">
                  <div className="absolute top-4 right-4 text-[#80415e]/20">
                    <Quote className="w-8 h-8" />
                  </div>
                  <CardContent className="p-6">
                    {/* Rating */}
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-[#80415e] text-[#80415e]"
                        />
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="text-muted-foreground italic mb-6 leading-relaxed text-base">
                      "{testimonial.quote}"
                    </p>

                    {/* Profile */}
                    <div className="text-center">
                      <h4 className="font-semibold text-foreground text-lg">
                        {testimonial.name}
                      </h4>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">500+</div>
            <div className="text-muted-foreground">Certified Instructors</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">95%</div>
            <div className="text-muted-foreground">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">4.9/5</div>
            <div className="text-muted-foreground">Average Rating</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
