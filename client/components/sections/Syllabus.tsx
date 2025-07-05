import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Clock, Award, Users } from "lucide-react";

export function Syllabus() {
  return (
    <section className="py-20 bg-white">
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
            <BookOpen className="w-5 h-5" />
            Course Syllabus
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Complete <span className="text-[#80415e]">Learning Journey</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Our comprehensive curriculum is designed to take you from beginner
            to confident yoga instructor with structured modules and practical
            training.
          </p>
        </motion.div>

        {/* Course Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12"
        >
          <div className="text-center p-6 bg-gradient-to-br from-[#FFE8E8] to-[#FFE9D1] rounded-2xl">
            <Clock className="w-8 h-8 text-[#80415e] mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-900 mb-1">
              Few Week
            </div>
            <div className="text-sm text-gray-600">Duration</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-[#FFE8E8] to-[#FFE9D1] rounded-2xl">
            <BookOpen className="w-8 h-8 text-[#80415e] mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-900 mb-1">12+</div>
            <div className="text-sm text-gray-600">Modules</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-[#FFE8E8] to-[#FFE9D1] rounded-2xl">
            <Award className="w-8 h-8 text-[#80415e] mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-900 mb-1">100%</div>
            <div className="text-sm text-gray-600">Practical</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-[#FFE8E8] to-[#FFE9D1] rounded-2xl">
            <Users className="w-8 h-8 text-[#80415e] mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-900 mb-1">24/7</div>
            <div className="text-sm text-gray-600">Support</div>
          </div>
        </motion.div>

        {/* Syllabus Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-[#FFE8E8] to-[#FFE9D1] p-8 rounded-3xl shadow-2xl border border-[#80415e]/10">
            <div className="bg-white rounded-2xl p-4 shadow-lg">
              <img
                src="https://cdn.builder.io/o/assets%2Faf2ee23a37a94cffacbf112a57cc2f0a%2F044f61689ceb42f9b30eceb42a6acc74?alt=media&token=92bf0446-3edb-437a-8ef4-50d10db9a2a7&apiKey=af2ee23a37a94cffacbf112a57cc2f0a"
                alt="Yoga Instructor Certification Course Syllabus"
                className="w-full h-auto rounded-xl shadow-md"
              />
            </div>

            {/* Syllabus Description */}
            <div className="mt-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Structured Learning Path
              </h3>
              <p className="text-gray-700 leading-relaxed max-w-2xl mx-auto">
                Our syllabus covers everything from fundamental yoga philosophy
                to advanced teaching techniques. Each module is carefully
                designed to build upon previous knowledge, ensuring a
                comprehensive understanding of yoga instruction and practice.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Key Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-[#80415e]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-8 h-8 text-[#80415e]" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              Theory & Philosophy
            </h4>
            <p className="text-gray-600 text-sm">
              Deep dive into yoga history, philosophy, and foundational
              principles
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-[#80415e]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-[#80415e]" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              Practical Training
            </h4>
            <p className="text-gray-600 text-sm">
              Hands-on practice sessions and real-world teaching experience
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-[#80415e]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-[#80415e]" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              Certification
            </h4>
            <p className="text-gray-600 text-sm">
              Government-approved certification upon successful completion
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
