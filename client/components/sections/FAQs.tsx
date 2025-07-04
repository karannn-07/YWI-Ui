import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { HelpCircle, CheckCircle } from "lucide-react";

const faqs = [
  {
    question:
      "Is the YWI certification from Swasti Bharat government-approved?",
    answer:
      "Yes, our YWI (Yoga Wellness Instructor) certification is fully approved by the Government of India under the Ministry of AYUSH. This certification is nationally recognized and valid for teaching yoga anywhere in India, including government institutions.",
  },
  {
    question: "How long does it take to complete the certification course?",
    answer:
      "Our accelerated program takes just 4-6 weeks to complete, compared to traditional courses that take 3-6 months. Despite the shorter duration, we maintain the same quality standards and curriculum depth as longer programs through our intensive learning methodology.",
  },
  {
    question: "What are the job opportunities after getting certified?",
    answer:
      "With your YWI certification, you can work in government schools, hospitals, wellness centers, AYUSH ministry programs, private studios, corporate wellness programs, or start your own yoga practice. Many of our graduates have secured government positions with salaries ranging from ₹25,000 to ₹60,000 per month.",
  },
  {
    question: "Do I need prior yoga experience to join this course?",
    answer:
      "No prior yoga experience is required! Our course is designed for complete beginners. We start with basics and gradually build your knowledge and skills. Our expert mentors provide personalized support to ensure every student succeeds, regardless of their starting level.",
  },
  {
    question:
      "What kind of support do you provide during and after the course?",
    answer:
      "We provide 24/7 mentor support during the course, including live doubt-clearing sessions, practical guidance, and personal feedback. After completion, you get lifetime career support including job placement assistance, business guidance, and access to our alumni network.",
  },
  {
    question: "How much does the certification course cost?",
    answer:
      "Our course fees range from ₹15,000 to ₹25,000, making it the most affordable government-approved YWI certification in the market. We also offer flexible payment plans and scholarships for deserving candidates. This includes all study materials, live sessions, and lifetime support.",
  },
  {
    question: "Is the course conducted online or offline?",
    answer:
      "We offer a hybrid learning model with both online and live sessions. You can attend theory classes online at your convenience, while practical sessions are conducted through live virtual classes with real-time feedback. This flexible format allows you to learn from anywhere while maintaining quality.",
  },
  {
    question:
      "Will I be able to start teaching immediately after certification?",
    answer:
      "Yes! Our comprehensive curriculum includes teaching methodology, class planning, and practical skills that prepare you to start teaching immediately. Many of our graduates begin teaching within 2-4 weeks of completion. We also provide ongoing mentorship during your initial teaching phase.",
  },
];

export function FAQs() {
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
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full font-medium text-sm mb-4">
            <HelpCircle className="w-4 h-4" />
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Got Questions?{" "}
            <span className="text-primary">We've Got Answers</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about our YWI certification program and
            your yoga instructor career journey.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="border border-border rounded-lg px-6 py-2 bg-muted/30 hover:bg-muted/50 transition-colors duration-200"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary transition-colors duration-200">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>{faq.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed ml-8 pr-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        {/* Still have questions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Still Have Questions?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our expert counselors are here to help you make an informed
              decision about your yoga instructor career.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/919876543210"
                className="inline-flex items-center justify-center bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-6 py-3 rounded-full transition-colors duration-200"
              >
                <HelpCircle className="w-4 h-4 mr-2" />
                Chat with Counselor
              </a>
              <a
                href="tel:+919876543210"
                className="inline-flex items-center justify-center border border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-6 py-3 rounded-full transition-colors duration-200"
              >
                Schedule a Call
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
