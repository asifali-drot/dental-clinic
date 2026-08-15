import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import Services from "@/components/sections/Services";
import ImplantSection from "@/components/sections/ImplantSection";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import PatientJourney from "@/components/sections/PatientJourney";
import Reviews from "@/components/sections/Reviews";
import AboutSection from "@/components/sections/AboutSection";
import LocationSection from "@/components/sections/LocationSection";
import AppointmentSection from "@/components/sections/AppointmentSection";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Services limit={6} />
      <ImplantSection />
      <WhyChooseUs />
      <PatientJourney />
      <Reviews />
      <AboutSection />
      <LocationSection />
      <AppointmentSection />
    </>
  );
}
