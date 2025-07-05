import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Star, Award, Users, Clock, BookOpen, Heart } from "lucide-react";

const instructors = [
  {
    name: "Dr. Priya Sharma",
    title: "Lead Yoga Master & Course Director",
    experience: "15+ Years",
    specialization: "Hatha & Vinyasa Yoga",
    image: "/placeholder.svg",
    credentials: [
      "PhD in Yoga Philosophy",
      "500-Hour RYT Certified",
      "AYUSH Ministry Advisor",
      "International Yoga Alliance Member",
    ],
    achievements: [
      "Trained 2000+ Instructors",
      "Published 5 Yoga Research Papers",
      "International Workshop Conductor",
      "TEDx Speaker on Wellness",
    ],
    quote:
      "Yoga is not just about physical postures; it's a complete transformation of mind, body, and spirit. I'm here to guide you on this beautiful journey.",
  },
  {
    name: "Master Rajesh Kumar",
    title: "Senior Instructor & Meditation Expert",
    experience: "12+ Years",
    specialization: "Pranayama & Meditation",
    image: "/placeholder.svg",
    credentials: [
      "Masters in Yoga Science",
      "Advanced Pranayama Specialist",
      "Mindfulness Coach",
      "Sanskrit Scholar",
    ],
    achievements: [
      "1500+ Students Certified",
      "Meditation App Developer",
      "Corporate Wellness Consultant",
      "Spiritual Retreat Leader",
    ],
    quote:
      "Through breath and mindfulness, we unlock the infinite potential within ourselves. Every student is unique, and I tailor my teaching to honor that uniqueness.",
  },
  {
    name: "Anjali Patel",
    title: "Therapeutic Yoga Specialist",
    experience: "10+ Years",
    specialization: "Yoga Therapy & Anatomy",
    image: "/placeholder.svg",
    credentials: [
      "Certified Yoga Therapist",
      "Anatomy & Physiology Expert",
      "Sports Medicine Background",
      "Injury Rehabilitation Specialist",
    ],
    achievements: [
      "1000+ Healing Cases",
      "Medical Conference Speaker",
      "Therapeutic Yoga Pioneer",
      "Healthcare Integration Advocate",
    ],
    quote:
      "Yoga has the power to heal not just the body, but also emotional and mental wounds. I'm passionate about sharing these therapeutic benefits with every student.",
  },
];

export function InstructorProfile() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-6 py-3 rounded-full font-semibold text-sm mb-6">
            <Users className="w-5 h-5" />
            Meet Your Mentors
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Learn from{" "}
            <span className="text-orange-600">Master Instructors</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Our world-class faculty brings decades of experience and deep wisdom
            to guide you on your yoga journey. Each instructor is carefully
            selected for their expertise, teaching ability, and genuine passion
            for student success.
          </p>
        </motion.div>

        {/* Instructors Grid */}
        <div className="space-y-16">
          {instructors.map((instructor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 items-center`}
            >
              {/* Profile Image & Stats */}
              <div className="lg:w-1/2 flex flex-col items-center text-center space-y-6">
                <div className="relative">
                  <div className="w-64 h-64 bg-gradient-to-br from-orange-200 to-orange-300 rounded-full flex items-center justify-center border-8 border-white shadow-2xl">
                    <span className="text-6xl font-bold text-orange-800">
                      {instructor.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 rounded-full shadow-lg border border-orange-200">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-orange-400 text-orange-400"
                        />
                      ))}
                      <span className="text-sm font-medium text-gray-700 ml-2">
                        5.0
                      </span>
                    </div>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
                  <div className="bg-white p-4 rounded-xl shadow-md border border-orange-100">
                    <Clock className="w-6 h-6 text-orange-600 mb-2 mx-auto" />
                    <div className="text-lg font-bold text-gray-900">
                      {instructor.experience}
                    </div>
                    <div className="text-sm text-gray-600">Experience</div>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-md border border-orange-100">
                    <Users className="w-6 h-6 text-orange-600 mb-2 mx-auto" />
                    <div className="text-lg font-bold text-gray-900">
                      {instructor.achievements[0].split(" ")[1]}
                    </div>
                    <div className="text-sm text-gray-600">Students</div>
                  </div>
                </div>
              </div>

              {/* Profile Details */}
              <div className="lg:w-1/2 space-y-6">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">
                    {instructor.name}
                  </h3>
                  <p className="text-xl text-orange-600 font-semibold mb-1">
                    {instructor.title}
                  </p>
                  <p className="text-lg text-gray-600">
                    {instructor.specialization}
                  </p>
                </div>

                {/* Quote */}
                <div className="bg-orange-50 p-6 rounded-2xl border-l-4 border-orange-400">
                  <Heart className="w-6 h-6 text-orange-600 mb-3" />
                  <p className="text-gray-700 italic leading-relaxed">
                    "{instructor.quote}"
                  </p>
                </div>

                {/* Credentials & Achievements */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="border-orange-200 bg-white/80">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <Award className="w-5 h-5 text-orange-600" />
                        <h4 className="font-bold text-gray-900">Credentials</h4>
                      </div>
                      <ul className="space-y-2">
                        {instructor.credentials.map((credential, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm text-gray-700"
                          >
                            <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{credential}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-orange-200 bg-white/80">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <BookOpen className="w-5 h-5 text-orange-600" />
                        <h4 className="font-bold text-gray-900">
                          Achievements
                        </h4>
                      </div>
                      <ul className="space-y-2">
                        {instructor.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm text-gray-700"
                          >
                            <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-8 rounded-3xl max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Learn from the Best?
            </h3>
            <p className="text-xl mb-6 opacity-90">
              Join thousands of students who have transformed their lives under
              the guidance of our master instructors.
            </p>
            <button className="bg-white text-orange-600 hover:bg-gray-100 font-bold px-8 py-4 rounded-full text-lg transition-colors duration-200 transform hover:scale-105">
              Meet Your Instructor - Book Free Session
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
