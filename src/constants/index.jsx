import { Activity, Baby, Backpack, BotMessageSquare, Hospital, House, PillBottle, Salad, SquareActivity } from "lucide-react";
import { Cross } from "lucide-react";
import { HeartPulse } from "lucide-react";
import personalcareImg from "../assets/personalcare.jpg"
import dementiacareImg from "../assets/dementiacare.jpg"
import companionshipImg from "../assets/companionship.jpg"
import specialneedsImg from "../assets/specialneeds.jpg"
import outtingImg from "../assets/outting.jpg"
import respiteImg from "../assets/respite.jpg"
import palliativeImg from "../assets/palliative.jpg"
import staffingImg from "../assets/staffing.jpg"


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
    image: personalcareImg,
    path: "/services/personal-care",
  },
  {
    icon: <HeartPulse />,
    text: "Dementia Care",
    image: dementiacareImg,
    path: "/services/dementia-care",
    description:
      "Specialized care and support for individuals living with dementia, featuring personalized attention and safety measures while providing families with peace of mind.",
  },
  {
    icon: <SquareActivity />,
    text: "Companionship",
    image: companionshipImg,
    path: "/services/companionship",
    description:
      "Meaningful social interaction and emotional support through engaging activities, conversations, and genuine companionship to combat loneliness and enhance quality of life.",
  },
  {
    icon: <Backpack />,
    text: "Support for Individuals with Special Needs and Disabilities",
    image: specialneedsImg,
    path: "/services/support-special-needs",
    description:
      "Dedicated care and assistance for individuals with special needs and disabilities, focusing on development, safety, and individual growth through personalized support programs.",
  },
  {
    icon: <Hospital />,
    text: "Appointment / Outing Support",
    image: outtingImg,
    path: "/services/appointment",
    description:
      "Reliable transportation and companionship for medical appointments, social activities, and community engagements, ensuring safe and comfortable outings.",
  },
  {
    icon: <Activity />,
    text: "Respite Care",
    image: respiteImg,
    path: "/services/respitecare",
    description:
      "Temporary relief care services allowing primary caregivers to take necessary breaks while ensuring their loved ones receive continuous, quality care.",
  },
  {
    icon: <PillBottle />,
    text: "Palliative Care",
    image: palliativeImg,
    path: "/services/palliative-care",
    description:
      "Compassionate end-of-life care focusing on comfort, dignity, and quality of life through specialized support for both clients and their families.",
  },
  {
    icon: <Hospital />,
    text: "Healthcare Facility Staffing",
    image: staffingImg,
    path: "/services/staffing",
    description:
      "Reliable staffing solutions for care facilities experiencing shortages. Our carefully selected healthcare professionals - including nurses, health care aides, and community support workers - ensure continuity of high-quality, person-centred care.",
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
  { href: "/services/staffing", text: "Staffing Solutions" },
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

