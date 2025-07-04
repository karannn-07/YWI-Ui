import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Download, BookOpen, Users, GraduationCap } from "lucide-react";

const curriculumSections = [
  {
    icon: BookOpen,
    title: "Theory",
    items: [
      "Yoga Philosophy & History",
      "Anatomy & Physiology",
      "Breathing Techniques",
      "Meditation Practices",
      "Yoga Sutras Study",
      "Ethics & Guidelines",
    ],
    color: "text-primary",
  },
  {
    icon: Users,
    title: "Practical",
    items: [
      "Asana Practice",
      "Vinyasa Sequences",
      "Alignment Principles",
      "Modifications & Props",
      "Hands-on Adjustments",
      "Self-Practice Development",
    ],
    color: "text-accent",
  },
  {
    icon: GraduationCap,
    title: "Teaching Skills",
    items: [
      "Class Planning",
      "Instruction Techniques",
      "Student Assessment",
      "Business Basics",
      "Communication Skills",
      "Certification Process",
    ],
    color: "text-primary",
  },
];

export function Curriculum() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-[#FFE9D1]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            <span className="text-[#80415e]">Industry-Leading</span> Curriculum
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Our scientifically designed 3-pillar approach ensures you master
            every aspect -
            <span className="font-semibold text-[#80415e]">
              from ancient wisdom to modern teaching techniques
            </span>
          </p>

          <Button
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            <Download className="w-4 h-4 mr-2" />
            Download Full Syllabus
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {curriculumSections.map((section, index) => {
            const Icon = section.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="h-full border-border hover:border-[#80415e]/30 transition-all duration-300 group-hover:shadow-xl bg-gradient-to-br from-gray-50 to-gray-100">
                  <CardHeader className="text-center pb-4 relative">
                    {/* Decorative background */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-[#80415e]/5 rounded-bl-full"></div>

                    <div
                      className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-[#80415e]/20 to-[#80415e]/10 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 border-2 border-[#80415e]/20`}
                    >
                      <Icon className={`w-10 h-10 text-[#80415e]`} />
                    </div>
                    <CardTitle className="text-2xl font-bold text-[#80415e] mb-2">
                      {section.title}
                    </CardTitle>
                    <div className="text-sm text-muted-foreground font-medium">
                      {index === 0
                        ? "Foundation Building"
                        : index === 1
                          ? "Skill Mastery"
                          : "Teaching Excellence"}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {section.items.map((item, itemIndex) => (
                        <motion.li
                          key={itemIndex}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.3,
                            delay: index * 0.2 + itemIndex * 0.1,
                          }}
                          viewport={{ once: true }}
                          className="flex items-center text-muted-foreground hover:text-[#80415e] transition-colors duration-200"
                        >
                          <div className="w-3 h-3 bg-gradient-to-br from-[#80415e] to-[#80415e]/70 rounded-full mr-3 flex-shrink-0"></div>
                          <span className="text-sm font-medium">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
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
