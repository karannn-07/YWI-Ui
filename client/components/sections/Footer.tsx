import React from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MessageCircle,
  Download,
  Users,
  BookOpen,
  HelpCircle,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="text-xl font-bold">Swasti Bharat</span>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Transform your passion for yoga into a rewarding career with our
              government-approved certification program.
            </p>
            <div className="bg-primary/20 p-3 rounded-lg border-l-4 border-primary">
              <p className="text-primary text-sm font-medium">
                ✅ Government Approved YWI Certification
              </p>
              <p className="text-white/80 text-xs mt-1">
                Valid across India for teaching yoga
              </p>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-primary">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { icon: BookOpen, text: "Curriculum", href: "#curriculum" },
                { icon: Users, text: "Testimonials", href: "#testimonials" },
                { icon: HelpCircle, text: "FAQs", href: "#faqs" },
                { icon: Download, text: "Download Syllabus", href: "#" },
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="flex items-center gap-2 text-white/80 hover:text-primary transition-colors duration-200 text-sm"
                  >
                    <link.icon className="w-4 h-4" />
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-primary">Contact Us</h3>
            <div className="space-y-3">
              <a
                href="https://wa.me/919876543210"
                className="flex items-center gap-3 text-white/80 hover:text-accent transition-colors duration-200 group"
              >
                <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center group-hover:bg-accent/30 transition-colors duration-200">
                  <MessageCircle className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="text-sm font-medium text-white">WhatsApp</div>
                  <div className="text-xs text-white/60">+91 98765 43210</div>
                </div>
              </a>

              <a
                href="tel:+919876543210"
                className="flex items-center gap-3 text-white/80 hover:text-primary transition-colors duration-200 group"
              >
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-200">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm font-medium text-white">Phone</div>
                  <div className="text-xs text-white/60">+91 98765 43210</div>
                </div>
              </a>

              <a
                href="mailto:info@swastibharat.com"
                className="flex items-center gap-3 text-white/80 hover:text-accent transition-colors duration-200 group"
              >
                <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center group-hover:bg-accent/30 transition-colors duration-200">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="text-sm font-medium text-white">Email</div>
                  <div className="text-xs text-white/60">
                    info@swastibharat.com
                  </div>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Course Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-primary">
              Course Details
            </h3>
            <div className="space-y-3 text-sm">
              <div className="bg-white/5 p-3 rounded-lg">
                <div className="text-white font-medium mb-1">Duration</div>
                <div className="text-white/80">4-6 Weeks</div>
              </div>
              <div className="bg-white/5 p-3 rounded-lg">
                <div className="text-white font-medium mb-1">Fee Structure</div>
                <div className="text-white/80">₹15,000 - ₹25,000</div>
              </div>
              <div className="bg-white/5 p-3 rounded-lg">
                <div className="text-white font-medium mb-1">Next Batch</div>
                <div className="text-accent font-medium">Starting Soon</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-white/20 mt-12 pt-8 text-center"
        >
          <p className="text-white/60 text-sm">
            © 2024 Swasti Bharat. All rights reserved. |
            <span className="text-primary font-medium">
              {" "}
              Government Approved YWI Certification
            </span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
