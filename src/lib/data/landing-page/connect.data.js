import {
  House,
  ChevronRight,
  ChevronLeft,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";

// Data object for all content
export const connectData = {
  heading: {
    main: "Let's",
    highlight: "Connect",
  },
  description:
    "Reach out to the ACM XIM Student Chapter. Whether you're a student, mentor, or industry partner, we’re here to collaborate and support your journey in computing and technology.",
  contacts: [
    {
      icon: MapPin,
      title: "Visit Us",
      lines: [
        "XIM University",
        "Plot No: 12(A), Harirajpur",
        "Bhubaneswar, Odisha, 752050",
        "India",
      ],
    },
    {
      icon: Mail,
      title: "Email Us",
      lines: [
        "student.chap.acm@xim.edu.in",
      ],
      note: "For all chapter, event, and membership-related queries.",
    },
    {
      icon: Phone,
      title: "Call Us",
      lines: [
        "+91 96254 25303",
        "+91 62041 48753",
      ],
      note: "Available on working days during institute hours.",
    },
  ],
  newsletter: {
    heading: {
      main: "Join our",
      highlight: "Newsletter",
    },
    description: "Stay updated with chapter announcements, upcoming events, workshops, and opportunities curated for the ACM XIM community.",

    whatsapp: {
      label: "Join WhatsApp Group",
      link: "https://chat.whatsapp.com/KeIp4WIuUZz0LJgWw7J8wV",
    },
    discord: {
      label: "Join Discord Server",
      link: "https://discord.com/invite/hCV9phzpQf",
    },
  },
  footer: {
    left: {
      href: "/team",
      label: "Team",
      icon: ChevronLeft,
      hidden: false,
    },
    center: {
      href: "/",
      icon: House,
    },
    right: {
      href: "/events",
      label: "Events",
      icon: ChevronRight,
    },
  },
};
