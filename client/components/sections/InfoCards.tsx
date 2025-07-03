import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  CheckCircle,
  Clock,
  DollarSign,
  Phone,
  Rocket,
  Globe,
  BookOpen,
} from "lucide-react";

const benefits = [
  {
    icon: CheckCircle,
    title: "Govt-Approved Certification",
    description: "Nationally recognized YWI certification",
    color: "text-accent",
  },
  {
    icon: Clock,
    title: "Complete in Just a Few Weeks",
    description: "Fast-track your certification journey",
    color: "text-primary",
  },
  {
    icon: DollarSign,
    title: "Affordable Fee Structure",
    description: "Most competitive pricing in the market",
    color: "text-accent",
  },
  {
    icon: Phone,
    title: "Expert Mentor Support",
    description: "24/7 guidance from certified instructors",
    color: "text-primary",
  },
  {
    icon: Rocket,
    title: "No Prior Experience Needed",
    description: "Beginner-friendly curriculum design",
    color: "text-accent",
  },
  {
    icon: Globe,
    title: "Online + Live Sessions",
    description: "Flexible learning with live interaction",
    color: "text-primary",
  },
  {
    icon: BookOpen,
    title: "All Materials Included",
    description: "Complete study materials and resources",
    color: "text-accent",
  },
];

export function InfoCards() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose <span className="text-primary">Swasti Bharat</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to become a certified yoga instructor, delivered
            with excellence and care.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
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
                <Card className="h-full border-border hover:border-primary/30 transition-all duration-300 bg-white/70 backdrop-blur-sm">
                  <CardContent className="p-6 text-center">
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-${benefit.color.split("-")[1]}/10 to-${benefit.color.split("-")[1]}/20 mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className={`w-8 h-8 ${benefit.color}`} />
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
      </div>
    </section>
  );
}
