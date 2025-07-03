import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";

export function CTAStrip() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary via-primary/90 to-accent relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,white_2px,transparent_2px)] bg-[length:50px_50px]"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to Turn Your Passion for Yoga
            <br />
            <span className="text-white/90">Into a Profession?</span>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl text-white/90 mb-8 font-medium"
          >
            Let Us Guide You — Step by Step
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-lg text-white/80 mb-10 max-w-2xl mx-auto"
          >
            Join hundreds of successful yoga instructors who transformed their
            lives with Swasti Bharat's proven certification program.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              className="bg-white text-foreground hover:bg-white/90 hover:text-foreground font-semibold px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5 mr-2 text-foreground" />
              Talk to a Mentor
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white border-2 text-white hover:bg-white hover:text-foreground font-semibold px-8 py-4 rounded-full text-lg backdrop-blur-sm"
            >
              <Phone className="w-5 h-5 mr-2 text-white hover:text-foreground" />
              Enroll Now
            </Button>
          </motion.div>

          {/* Urgency Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-8 inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 text-white"
          >
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">
              Next batch starts in 7 days - Limited seats available
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        viewport={{ once: true }}
        className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1 }}
        viewport={{ once: true }}
        className="absolute bottom-10 right-10 w-16 h-16 bg-white/10 rounded-full blur-xl"
      ></motion.div>
    </section>
  );
}
