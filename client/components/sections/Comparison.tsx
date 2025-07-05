import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const comparisonData = [
  {
    feature: "Duration",
    swasti: "Just Few Week",
    others: "3-6 Months",
    swastiWins: true,
  },
  {
    feature: "Fees",
    swasti: "₹15,000 - ₹25,000",
    others: "₹35,000 - ₹60,000",
    swastiWins: true,
  },
  {
    feature: "Certification Validity",
    swasti: "Nationally Recognized",
    others: "Nationally Recognized",
    swastiWins: false,
  },
  {
    feature: "Student Support",
    swasti: "24/7 Mentor Support",
    others: "Limited Hours",
    swastiWins: true,
  },
  {
    feature: "Batch Size",
    swasti: "Small (15-20 Students)",
    others: "Large (30+ Students)",
    swastiWins: true,
  },
  {
    feature: "Post-Course Guidance",
    swasti: "Lifetime Career Support",
    others: "Limited Support",
    swastiWins: true,
  },
];

export function Comparison() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-100 to-gray-200">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Why <span className="text-[#80415e]">Swasti Bharat</span> Dominates
            The Market
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto font-medium">
            The clear winner in every category that matters to your success
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Card className="overflow-hidden border-border">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/10">
              <div className="grid grid-cols-3 gap-4">
                <div></div>
                <CardTitle className="text-center text-[#80415e] font-bold text-lg">
                  Swasti Bharat
                </CardTitle>
                <CardTitle className="text-center text-gray-600 font-bold text-lg">
                  Other Institutes
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              {comparisonData.map((row, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`grid grid-cols-3 gap-4 p-4 border-b border-border last:border-b-0 ${
                    index % 2 === 0 ? "bg-white" : "bg-muted/20"
                  }`}
                >
                  <div className="font-bold text-gray-800 flex items-center">
                    {row.feature}
                  </div>
                  <div
                    className={`text-center p-3 rounded-lg flex items-center justify-center ${
                      row.swastiWins
                        ? "bg-[#80415e]/20 text-[#80415e] font-semibold"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      {row.swastiWins && <Check className="w-4 h-4" />}
                      <span className="text-sm">{row.swasti}</span>
                    </div>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-red-50 text-red-700 flex items-center justify-center border border-red-200">
                    <div className="flex items-center gap-2">
                      {row.swastiWins && <X className="w-4 h-4 text-red-500" />}
                      <span className="text-sm font-medium">{row.others}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
