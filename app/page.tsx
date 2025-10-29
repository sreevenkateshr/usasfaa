"use client";

import Hero from "@/components/Hero";
import { AboutUs } from "@/components/Aboutus";
import WhoNeeds from "@/components/WhoNeeds";
import StepByStepProcess from "@/components/StepByStepProcess";
import OfferBanner from "@/components/OfferBanner";
import FAQSection from "@/components/FAQSection";
import Resources from "@/components/Resources";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhoNeeds />
      <AboutUs />
      <StepByStepProcess />
      <OfferBanner />
      <FAQSection />
      <Resources />
      
    </>
  );
}
