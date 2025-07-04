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
            Comprehensive <span className="text-primary">Curriculum</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            A complete learning path designed to transform you from beginner to
            confident instructor
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
                <Card className="h-full border-border hover:border-primary/30 transition-all duration-300 group-hover:shadow-lg">
                  <CardHeader className="text-center pb-4">
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-${section.color.split("-")[1]}/10 to-${section.color.split("-")[1]}/20 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className={`w-8 h-8 ${section.color}`} />
                    </div>
                    <CardTitle className="text-xl font-bold text-foreground">
                      {section.title}
                    </CardTitle>
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
                          className="flex items-center text-muted-foreground"
                        >
                          <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                          <span className="text-sm">{item}</span>
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
