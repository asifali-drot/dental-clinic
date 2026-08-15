import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import AppointmentSection from "@/components/sections/AppointmentSection";
import LocationSection from "@/components/sections/LocationSection";

export const metadata: Metadata = {
  title: "Contact & Book an Appointment",
  description:
    "Contact Dental Parlor and Implant Clinic in G-13, Islamabad. Call, message on WhatsApp, or request an appointment online.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let's Get Your Visit on the Calendar"
        description="Call, message us on WhatsApp, or fill out the form below and our team will confirm your appointment."
      />
      <AppointmentSection />
      <LocationSection />
    </>
  );
}
