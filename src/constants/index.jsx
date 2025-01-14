import { Activity, Baby, Backpack, BotMessageSquare, Hospital, House, PillBottle, Salad, SquareActivity } from "lucide-react";
import { Cross } from "lucide-react";
import { HeartPulse } from "lucide-react";

export const navItems = [
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/about" },
];

export const features = [
  {
    icon: <Cross />,
    text: "Personal Care",
    description:
      "Professional assistance with daily living activities including bathing, dressing, grooming, and mobility support, delivered with dignity and compassion in the comfort of your home.",
    image: "src/assets/personalcare.jpg",
    path: "/services/personal-care",
  },
  {
    icon: <HeartPulse />,
    text: "Dementia Care",
    image: "src/assets/dementiacare.jpg",
    path: "/services/dementia-care",
    description:
      "Specialized care and support for individuals living with dementia, featuring personalized attention and safety measures while providing families with peace of mind.",
  },
  {
    icon: <SquareActivity />,
    text: "Companionship",
    image: "src/assets/companionship.jpg",
    path: "/services/companionship",
    description:
      "Meaningful social interaction and emotional support through engaging activities, conversations, and genuine companionship to combat loneliness and enhance quality of life.",
  },
  {
    icon: <Backpack />,
    text: "Support for Individuals with Special Needs and Disabilities",
    image: "src/assets/specialneeds.jpg",
    path: "/services/support-special-needs",
    description:
      "Dedicated care and assistance for individuals with special needs and disabilities, focusing on development, safety, and individual growth through personalized support programs.",
  },
  {
    icon: <Hospital />,
    text: "Appointment / Outing Support",
    image: "src/assets/outting.jpg",
    path: "/services/appointment",
    description:
      "Reliable transportation and companionship for medical appointments, social activities, and community engagements, ensuring safe and comfortable outings.",
  },
  {
    icon: <Activity />,
    text: "Respite Care",
    image: "src/assets/respite.jpg",
    path: "/services/respitecare",
    description:
      "Temporary relief care services allowing primary caregivers to take necessary breaks while ensuring their loved ones receive continuous, quality care.",
  },
  {
    icon: <PillBottle />,
    text: "Palliative Care",
    image: "src/assets/palliative.jpg",
    path: "/services/palliative-care",
    description:
      "Compassionate end-of-life care focusing on comfort, dignity, and quality of life through specialized support for both clients and their families.",
  },
];

export const checklistItems = [
  {
    title: "Code merge made easy",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Review code without worry",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "AI Assistance to reduce time",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Share work in minutes",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "/", text: "Home" },
  { href: "/about", text: "About Us" },
  { href: "/services", text: "Services" },
  { href: "/careers", text: "Careers" },
];

export const platformLinks = [
  { href: "/resources/cdhci", text: "CDHCI invoicing" },
  { href: "/resources/financial-aid", text: "Financial Aid" },
  { href: "/resources/faq", text: "FAQ" },
  {
    text: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61568824271268",
  },
];

export const communityLinks = [
  { href: "#", text: "1324 36 Ave NE" },
  { href: "#", text: "Calgary, AB T2E 8S1" },
  { href: "mailto:info@familycareexperts.com", text: "info@familycareexperts.com" },
  { href: "#tel:+14036303717", text: "+1-403-630-3717" },
];

