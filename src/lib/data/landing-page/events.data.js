import arco from "/src/assets/arco.jpg";
import mario from "/src/assets/mario.jpg";
import astro from "/src/assets/astro.jpg";
import savage from "/src/assets/savage.jpg";
import img from "/src/assets/img.jpg";
import img1 from "/src/assets/img1.jpg";
import img2 from "/src/assets/img2.jpg";
import img3 from "/src/assets/img3.jpg";

// * Upcoming Events (for landing sections)
export const UpcomingEventsData = [
  {
    id: "codesprint-5",
    image: arco,
    title: "CodeSprint 5.0",
    description:
      "Annual ACM XIM coding marathon featuring multiple rounds of competitive programming and problem-solving.",
    delay: 0.3,
    session: "2025-26",
  },
  {
    id: "genai-talk-2025",
    image: mario,
    title: "TechTalk: GenAI & the Future",
    description:
      "An expert-led deep dive into Generative AI, LLMs, and the opportunities & risks of modern AI.",
    delay: 0.45,
    session: "2025-26",
  },
];

export const UpcomingEventsDataMobile = UpcomingEventsData;

// * Previous Events (highlights for older sessions)
export const PreviousEventsData = [
  {
    id: "synchro-3",
    image: astro,
    title: "SYNCHRONOISE 3.0 – Tech Fest",
    description:
      "Two days of coding contests, design events, gaming, and industry interactions at ACM XIM’s flagship tech fest.",
    date: "March 15–16, 2024",
    session: "2024-25",
  },
  {
    id: "codesprint-4",
    image: savage,
    title: "CodeSprint 4.0",
    description:
      "Competitive programming contest that challenged students with timed algorithmic problems.",
    date: "February 10, 2024",
    session: "2024-25",
  },
  {
    id: "dsa-drill-2023",
    image: img,
    title: "DSA Drill Saturdays",
    description:
      "Weekly practice sessions focused on core DSA topics, problem patterns, and contest-style questions.",
    date: "Aug – Nov 2023",
    session: "2023-24",
  },
  {
    id: "intro-acm-2023",
    image: img1,
    title: "ACM Chapter Orientation",
    description:
      "An introductory session on ACM, membership benefits, and the roadmap for ACM XIM Student Chapter.",
    date: "July 20, 2023",
    session: "2023-24",
  },
  {
    id: "legacy-workshop-1",
    image: img2,
    title: "Intro to Web Development",
    description:
      "Hands-on workshop covering HTML, CSS, and JavaScript fundamentals for beginners.",
    date: "October 2023",
    session: "2023-24",
  },
  {
    id: "legacy-workshop-2",
    image: img3,
    title: "Getting Started with Git & GitHub",
    description:
      "Practical session on version control, collaboration workflows, and open-source contributions.",
    date: "November 2023",
    session: "2023-24",
  },
  {
    id: "legacy-session-3",
    image: arco,
    title: "Career Paths in Computer Science",
    description:
      "Panel discussion on career options in software, research, data science, and product roles.",
    date: "January 2024",
    session: "2024-25",
  },
  {
    id: "legacy-session-4",
    image: astro,
    title: "ACM Problem-Solving Bootcamp",
    description:
      "Intensive bootcamp helping students strengthen logic building and problem-solving techniques.",
    date: "December 2023",
    session: "2023-24",
  },
];

export const PreviousEventsDataMobile = PreviousEventsData;
