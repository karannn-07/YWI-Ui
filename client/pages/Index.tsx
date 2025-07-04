import React from "react";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { InfoCards } from "@/components/sections/InfoCards";
import { Curriculum } from "@/components/sections/Curriculum";
import { Comparison } from "@/components/sections/Comparison";
import { GovBenefits } from "@/components/sections/GovBenefits";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQs } from "@/components/sections/FAQs";
import { CTAStrip } from "@/components/sections/CTAStrip";
import { Footer } from "@/components/sections/Footer";

export default function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <InfoCards />
      <Curriculum />
      <Comparison />
      <GovBenefits />
      <Testimonials />
      <FAQs />
      <CTAStrip />
      <Footer />
    </div>
  );
}
