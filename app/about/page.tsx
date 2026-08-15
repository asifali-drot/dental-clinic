import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import AboutSection from "@/components/sections/AboutSection";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import TrustBar from "@/components/sections/TrustBar";
import AppointmentSection from "@/components/sections/AppointmentSection";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Dental Parlor and Implant Clinic, a modern, patient-focused dental clinic in G-13, Islamabad rated 4.9/5 from 611 reviews.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A Dental Clinic Built Around You"
        description="Modern dental care in G-13, Islamabad, rooted in patient comfort, clear communication, and personalised treatment."
      />
      <AboutSection />
      <WhyChooseUs />
      <TrustBar />
      <AppointmentSection />
    </>
  );
}
