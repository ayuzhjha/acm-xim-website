import FeaturedProjectImage from "../../assets/nl123.jpg";
import WebDevImage from "../../assets/project_2.png";
import AIMLImage from "../../assets/project_dev.png";
import MerchImage from "../../assets/merch.png";

export const merchandise = [
  {
    title: "ACM XIM Winter Hoodie",
    img: MerchImage,
    tags: "Hoodie",
    tagColor: "bg-blue-200",
    description:
      "Stay warm and sharp. Premium fleece for coding marathons and campus comfort.",
    price: "8??",
    date: "Dec 2025",
  },
  {
    title: "ACM XIM Signature Jacket",
    img: MerchImage,
    tags: "Jacket",
    tagColor: "bg-violet-200",
    description:
      "The official varsity-style chapter jacket. Durable fabric with embroidered branding.",
    price: "8??",
    date: "Dec 2025",
  },
  {
    title: "ACM Winter Edition T-Shirt",
    img: MerchImage,
    tags: "T-Shirt",
    tagColor: "bg-green-200",
    description:
      "Minimal design, maximum comfort. Soft, breathable cotton limited edition tee.",
    price: "5??",
    date: "Dec 2025",
  },
];

const featured = {
  title: "Smart Campus Navigator – AI-Powered Indoor Mapping",
  img: FeaturedProjectImage,
  tags: "Project",
  description:
    "A real-time campus navigation system built using image processing and pathfinding algorithms. The project helps students locate classrooms, labs, and campus facilities with ease.",
  date: "Jan 12, 2025",
};

const otherNewsLetter = [
  {
    title: "Music Genre Classifier using Deep Learning",
    img: AIMLImage,
    tags: "AI / ML",
    tagColor: "bg-blue-200",
    description:
      "A CNN-based model trained on spectrograms to automatically classify music genres. Features preprocessing with Librosa and a custom neural network built in PyTorch.",
    date: "Dec 5, 2024",
  },
  {
    title: "Personal Expense Tracker – Full-Stack Web App",
    img: WebDevImage,
    tags: "Web Development",
    tagColor: "bg-violet-200",
    description:
      "A MERN-stack application that allows users to track expenses, visualize spending patterns, and export financial summaries using integrated charts.",
    date: "Nov 20, 2024",
  },
  {
    title: "IoT Smart Agriculture Monitor",
    img: AIMLImage,
    tags: "IoT",
    tagColor: "bg-green-200",
    description:
      "A sensor-based IoT system that monitors soil moisture, humidity, and temperature while providing actionable insights to improve crop health via a cloud dashboard.",
    date: "Oct 10, 2024",
  },
  {
    title: "AI Resume Analyzer for Recruiters",
    img: AIMLImage,
    tags: "AI / ML",
    tagColor: "bg-violet-200",
    description:
      "A natural language processing tool that evaluates candidate resumes, extracts key skills, and ranks applicants based on job description matching.",
    date: "Sep 18, 2024",
  },
  {
    title: "E-Commerce Website with Recommendation System",
    img: WebDevImage,
    tags: "Web Development",
    tagColor: "bg-blue-200",
    description:
      "A full-fledged e-commerce platform featuring user authentication, cart management, order tracking, and a personalized recommendation engine.",
    date: "Aug 30, 2024",
  },
  {
    title: "Social Media Sentiment Dashboard",
    img: AIMLImage,
    tags: "Data Science",
    tagColor: "bg-blue-200",
    description:
      "A visual analytics dashboard that tracks real-time sentiment across platforms like X, Instagram, and Reddit using transformer-based models.",
    date: "Aug 12, 2024",
  },
  {
    title: "JavaScript Visualizer – Learn JS Internals",
    img: WebDevImage,
    tags: "Web Development",
    tagColor: "bg-blue-200",
    description:
      "An interactive tool that explains how JavaScript executes code: call stack, event loop, microtasks, and rendering pipeline.",
    date: "Jul 28, 2024",
  },
  {
    title: "Quantum Computing Simulator (Beginner Friendly)",
    img: AIMLImage,
    tags: "Research",
    tagColor: "bg-violet-200",
    description:
      "A simulation tool demonstrating qubits, superposition, and quantum gates. Designed to help students understand quantum computing fundamentals.",
    date: "Jul 10, 2024",
  },
  {
    title: "AI Learning Path Generator",
    img: WebDevImage,
    tags: "Education",
    tagColor: "bg-yellow-200",
    description:
      "Personalized AI-generated study roadmaps for students based on their goals—DSA, ML, DevOps, Web Dev, or Research.",
    date: "Jun 18, 2024",
  },
  {
    title: "Ethical AI Toolkit for Schools",
    img: AIMLImage,
    tags: "Education",
    tagColor: "bg-yellow-200",
    description:
      "A curated toolkit including lesson plans, examples, and interactive modules to help schools teach AI ethics in an engaging way.",
    date: "Jun 5, 2024",
  },
  {
    title: "Women in Tech – Innovation Spotlight",
    img: WebDevImage,
    tags: "Community",
    tagColor: "bg-green-200",
    description:
      "A collection of featured projects built by women innovators in ACM-XIM, celebrating impact, creativity, and leadership.",
    date: "May 20, 2024",
  },
  {
    title: "Tech Collaborators Hub – Global Project Network",
    img: AIMLImage,
    tags: "Community",
    tagColor: "bg-green-200",
    description:
      "A platform connecting ACM members across universities, enabling them to collaborate on open-source and research-driven projects.",
    date: "May 5, 2024",
  },
];


const categories = [
  "All",
  "Web Development",
  "Education",
  "AI / ML",
  "Data Science",
  "Community"
];

export { featured, otherNewsLetter, categories };