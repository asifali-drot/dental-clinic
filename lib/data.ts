// Centralized business configuration.
// Edit this file to update business details, services, or navigation
// across the entire site.

export const business = {
  name: "Dental Parlor and Implant Clinic",
  shortName: "Dental Parlor",
  tagline: "Confident Smiles Start Here.",
  category: "Dental Clinic",
  phone: "03328880891",
  phoneDisplay: "0332 888 0891",
  phoneIntl: "+923328880891",
  whatsapp: "+923328880891",
  mapUrl: "https://maps.app.goo.gl/8QgVqFUv8bjG19xu9",
  address: {
    line1: "Street 169, G-13/3",
    line2: "G 13/3 G-13, Islamabad, 44000, Pakistan",
    full: "Street 169, G-13/3 G 13/3 G-13, Islamabad, 44000, Pakistan",
  },
  rating: 4.9,
  reviewCount: 611,
  url: "https://www.dentalparlorislamabad.com",
} as const;

export const links = {
  call: `tel:${business.phone}`,
  whatsapp: `https://wa.me/${business.whatsapp.replace("+", "")}?text=${encodeURIComponent(
    "Hi, I'd like to book an appointment at Dental Parlor and Implant Clinic."
  )}`,
  directions: business.mapUrl,
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Dental Implants", href: "/implants" },
  { label: "Reviews", href: "/#reviews" },
  { label: "Contact", href: "/contact" },
];

export type ServiceId =
  | "general-dentistry"
  | "dental-cleaning"
  | "teeth-whitening"
  | "dental-fillings"
  | "root-canal"
  | "dental-crowns"
  | "dental-bridges"
  | "dental-implants"
  | "cosmetic-dentistry"
  | "orthodontic-treatment";

export interface Service {
  id: ServiceId;
  name: string;
  short: string;
  description: string;
  icon:
    | "stethoscope"
    | "sparkles"
    | "sun"
    | "layers"
    | "activity"
    | "crown"
    | "link"
    | "anchor"
    | "smile"
    | "align";
}

export const services: Service[] = [
  {
    id: "general-dentistry",
    name: "General Dentistry",
    short: "Routine checkups and preventive care",
    description:
      "Comprehensive exams and preventive checkups to help keep your teeth and gums healthy over the long term.",
    icon: "stethoscope",
  },
  {
    id: "dental-cleaning",
    name: "Dental Cleaning",
    short: "Professional cleaning and hygiene care",
    description:
      "Thorough professional cleaning to remove plaque and buildup, supporting fresher breath and healthier gums.",
    icon: "sparkles",
  },
  {
    id: "teeth-whitening",
    name: "Teeth Whitening",
    short: "Brighten your natural smile",
    description:
      "A guided whitening approach designed to gently brighten your smile while keeping your comfort in mind.",
    icon: "sun",
  },
  {
    id: "dental-fillings",
    name: "Dental Fillings",
    short: "Restore decayed or damaged teeth",
    description:
      "Careful, tooth-coloured fillings that restore strength and function while blending naturally with your smile.",
    icon: "layers",
  },
  {
    id: "root-canal",
    name: "Root Canal Treatment",
    short: "Relieve pain, save the natural tooth",
    description:
      "Gentle root canal therapy focused on relieving discomfort and preserving your natural tooth wherever possible.",
    icon: "activity",
  },
  {
    id: "dental-crowns",
    name: "Dental Crowns",
    short: "Protect and strengthen weakened teeth",
    description:
      "Custom-fitted crowns that protect weakened teeth and restore a natural, comfortable bite.",
    icon: "crown",
  },
  {
    id: "dental-bridges",
    name: "Dental Bridges",
    short: "Replace missing teeth naturally",
    description:
      "A fixed bridge solution to close gaps left by missing teeth and support your bite and smile.",
    icon: "link",
  },
  {
    id: "dental-implants",
    name: "Dental Implants",
    short: "Long-term tooth replacement",
    description:
      "A modern, long-term approach to replacing missing teeth with a natural look, feel, and function.",
    icon: "anchor",
  },
  {
    id: "cosmetic-dentistry",
    name: "Cosmetic Dentistry",
    short: "Smile enhancements tailored to you",
    description:
      "Personalised cosmetic options designed around your goals, so your smile feels like your own.",
    icon: "smile",
  },
  {
    id: "orthodontic-treatment",
    name: "Orthodontic Treatment",
    short: "Straighter teeth, balanced bite",
    description:
      "Guided orthodontic care to gradually align teeth and improve bite comfort and function.",
    icon: "align",
  },
];

export const journeySteps = [
  {
    number: "01",
    title: "Book Your Appointment",
    description:
      "Reach out by phone, WhatsApp, or our online form and choose a time that works for you.",
  },
  {
    number: "02",
    title: "Meet With the Dentist",
    description:
      "Sit down for an unhurried consultation where your concerns and goals are heard first.",
  },
  {
    number: "03",
    title: "Get a Personalised Plan",
    description:
      "Receive a clear, tailored treatment plan explained in plain language, with no surprises.",
  },
  {
    number: "04",
    title: "Begin Your Treatment",
    description:
      "Start your care in a calm, modern environment built around your comfort at every step.",
  },
];

export const whyChooseUs = [
  {
    title: "Patient-First Approach",
    description:
      "Every visit starts with listening. Your comfort and questions come before anything else.",
    icon: "heart-handshake",
  },
  {
    title: "Modern Dental Care",
    description:
      "Contemporary techniques and equipment applied thoughtfully, with your wellbeing at the centre.",
    icon: "shield-check",
  },
  {
    title: "Comfortable Experience",
    description:
      "A calm, clean environment designed to ease the nerves that often come with dental visits.",
    icon: "sofa",
  },
  {
    title: "Comprehensive Treatment",
    description:
      "From routine cleanings to implant consultations, a wide range of care under one roof.",
    icon: "layout-grid",
  },
  {
    title: "Convenient Islamabad Location",
    description:
      "Based in G-13, easy to reach for patients across Islamabad and nearby sectors.",
    icon: "map-pin",
  },
];
