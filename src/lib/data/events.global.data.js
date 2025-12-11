// src/lib/data/events.global.data.js

// This contains the list of events (all sessions)
// 2025-26 → current
// 2024-25, 2023-24 → previous sessions

const events = [
  // =========================================================================
  // * 2025-26 (Current Session) - Including new events with Jan 2025 dates
  // =========================================================================
  {
    id: "dr-banik-talk-2025",
    title: "Guest Talk by Dr. Aritra Banik (ACM Council)",
    posterImg: "/assets/events/genai/poster.png", // Reusing placeholder
    backgroundImg: "/assets/events/genai/bg.jpg", // Reusing placeholder
    venue: "Mini Auditorium",
    time: "January 11, 2025 | 10:00 AM – 11:00 AM",
    session: "2025-26",
    type: "Guest Talk",
    description:
      "A renowned computer science researcher and academic from NISER Bhubaneswar delivered an insightful talk on advanced algorithm design and computational challenges, inspiring fresh perspectives on efficient computing and research opportunities.",
    rulesAndRegulation: [
      "Attendees are required to arrive and be seated before the scheduled start time.",
      "All mobile phones and electronic devices must be switched to silent mode (or turned off).",
      "Attendees must maintain respectful and attentive behavior throughout the presentation.",
      "Questions for the speaker should be reserved for the designated Q&A session at the end.",
      "Participants are requested not to interrupt the speaker or other audience members.",
    ],
    leaderboard: [
      { name: "Knowledge Transfer", score: "Attendees gained deep insights into advanced algorithm design and current research trends." },
      { name: "Inspiration", score: "Dr. Banik's talk motivated students to explore innovative solutions." },
      { name: "Engagement", score: "The interactive Q&A and discussion sessions enriched the learning experience." },
    ],
    gallery: ["/assets/events/drbanik/gallery1.jpg", "/assets/events/drbanik/gallery2.jpg"],
  },
  {
    id: "code-of-orbit-2025",
    title: "Code Of Orbit",
    posterImg: "/assets/events/codesprint/poster.png", // Reusing placeholder
    backgroundImg: "/assets/events/codesprint/bg.jpg", // Reusing placeholder
    venue: "LAB 5",
    time: "January 9, 2025 | 11:45 AM – 01:45 PM",
    session: "2025-26",
    type: "Coding Challenge",
    description:
      "A coding challenge consisting of three rounds designed to test participant’s skills in pattern printing, Data Structures & Algorithms (DSA), and debugging. Winners were determined by the highest score in the least amount of time.",
    rulesAndRegulation: [
      "The challenge consists of three mandatory rounds (Pattern Printing, DSA, and Debugging).",
      "All rounds were conducted in Lab 5.",
      "Each round was strictly time-bound.",
      "Winners were determined by the highest cumulative score.",
      "Tie-Breaker: The participant who completed the challenges in the least amount of total time.",
    ],
    leaderboard: [
      { name: "Bismay Sarangi, Tejash Maru", prize: "₹1500 + Certificates + Medal" },
      { name: "Mrinalee Mishra, Koyena Sutradhar", prize: "₹1000 + Certificates + Medal" },
    ],
    gallery: ["/assets/events/codeoforbit/gallery1.jpg", "/assets/events/codeoforbit/gallery2.jpg"],
  },
  {
    id: "codesprint-5",
    title: "CodeSprint 5.0",
    posterImg: "/assets/events/codesprint/poster.png",
    backgroundImg: "/assets/events/codesprint/bg.jpg",
    venue: "Auditorium, Block A",
    time: "July 5, 2025 · 10:00 AM – 5:00 PM",
    session: "2025-26",
    type: "Coding Contest",
    description:
      "CodeSprint 5.0 is ACM XIM’s annual coding marathon designed to push problem-solving skills to the next level. Participants compete in multiple rounds of competitive programming challenges, either solo or in a team of two.",
    rulesAndRegulation: [
      "Solo or 2-member teams allowed.",
      "Use of AI coding assistants is strictly prohibited.",
      "Plagiarism will result in immediate disqualification.",
      "Top 10 scorers move to the final rapid-fire round.",
    ],
    leaderboard: [
      { name: "Rahul Mehta", score: 430 },
      { name: "Team ByteForce", score: 420 },
      { name: "Ananya Roy", score: 410 },
    ],
    gallery: [
      "/assets/events/codesprint/gallery1.jpg",
      "/assets/events/codesprint/gallery2.jpg",
      "/assets/events/codesprint/gallery3.jpg",
    ],
  },
  {
    id: "genai-talk-2025",
    title: "TechTalk: GenAI & the Future",
    posterImg: "/assets/events/genai/poster.png",
    backgroundImg: "/assets/events/genai/bg.jpg",
    venue: "Seminar Hall 2, Main Building",
    time: "August 12, 2025 · 2:00 PM – 4:30 PM",
    session: "2025-26",
    type: "Tech Talk",
    description:
      "A thought-provoking session on Generative AI, large language models, and the ethical implications of modern AI systems. Includes live demos, an interactive Q&A, and networking with industry experts.",
    rulesAndRegulation: [
      "Open to all students of XIM University.",
      "Pre-registration is mandatory due to limited seating.",
      "Maintain silence and decorum during the session.",
    ],
    leaderboard: [],
    gallery: [
      "/assets/events/genai/gallery1.jpg",
      "/assets/events/genai/gallery2.jpg",
    ],
  },
  {
    id: "designathon-2025",
    title: "UI/UX Designathon",
    posterImg: "/assets/events/designathon/poster.png",
    backgroundImg: "/assets/events/designathon/bg.jpg",
    venue: "Design Lab, Block C",
    time: "September 1, 2025 · 9:00 AM – 6:00 PM",
    session: "2025-26",
    type: "Design Sprint",
    description:
      "A one-day design sprint where creativity meets usability. Teams design interactive UI/UX mockups for real-world problem statements using tools like Figma and Adobe XD.",
    rulesAndRegulation: [
      "Teams of up to 3 members.",
      "Submission must include a prototype and a short explanation.",
      "No pre-made or purchased templates allowed.",
      "Judging is based on creativity, usability, and impact.",
    ],
    leaderboard: [
      { name: "Team PixelPioneers", score: 92 },
      { name: "NeonDesigners", score: 89 },
      { name: "The Interface Club", score: 87 },
    ],
    gallery: [
      "/assets/events/designathon/gallery1.jpg",
      "/assets/events/designathon/gallery2.jpg",
      "/assets/events/designathon/gallery3.jpg",
    ],
  },
  {
    id: "hack-the-night-2025",
    title: "Hack the Night 2025",
    posterImg: "/assets/events/hackthenight/poster.png",
    backgroundImg: "/assets/events/hackthenight/bg.jpg",
    venue: "Innovation Hub, Block D",
    time: "October 10–11, 2025 · 8:00 PM – 8:00 AM",
    session: "2025-26",
    type: "Hackathon",
    description:
      "An overnight hackathon where teams build solutions to real-world problems. Work through the night, ship a prototype, and pitch your project to a panel of judges.",
    rulesAndRegulation: [
      "Teams of 3–5 members.",
      "All code must be written during the event.",
      "At least one team member must be present during final presentations.",
      "Respect the workspace, mentors, and fellow participants.",
    ],
    leaderboard: [
      { name: "Team NightOwls", score: 98 },
      { name: "Code Crusaders", score: 95 },
      { name: "Bug Busters", score: 93 },
    ],
    gallery: [
      "/assets/events/hackthenight/gallery1.jpg",
      "/assets/events/hackthenight/gallery2.jpg",
    ],
  },
  {
    id: "women-in-tech-2025",
    title: "Women in Tech Panel",
    posterImg: "/assets/events/womenintech/poster.png",
    backgroundImg: "/assets/events/womenintech/bg.jpg",
    venue: "Conference Room 1, Block B",
    time: "November 15, 2025 · 3:00 PM – 5:00 PM",
    session: "2025-26",
    type: "Panel Discussion",
    description:
      "A panel featuring inspiring women in technology sharing their journeys, challenges, and advice for the next generation of tech leaders.",
    rulesAndRegulation: [
      "Open to all students and faculty.",
      "Questions for the panel can be submitted in advance.",
      "Maintain respectful and inclusive conduct throughout.",
    ],
    leaderboard: [],
    gallery: [
      "/assets/events/womenintech/gallery1.jpg",
      "/assets/events/womenintech/gallery2.jpg",
    ],
  },
  {
    id: "algovis-2025",
    title: "Algorithm Visualization Workshop",
    posterImg: "/assets/events/algovis/poster.png",
    backgroundImg: "/assets/events/algovis/bg.jpg",
    venue: "Lab 204, Block E",
    time: "December 2, 2025 · 11:00 AM – 2:00 PM",
    session: "2025-26",
    type: "Workshop",
    description:
      "Learn how to visualize algorithms using JavaScript and D3.js. A hands-on workshop with live coding and interactive demos to make complex concepts intuitive.",
    rulesAndRegulation: [
      "Participants must bring their own laptops.",
      "Basic familiarity with JavaScript is recommended.",
      "Seats are limited to 30 participants.",
    ],
    leaderboard: [],
    gallery: ["/assets/events/algovis/gallery1.jpg"],
  },

  // =========================================================================
  // * 2024-25 Session - Integrating new event details
  // =========================================================================
  {
    id: "dsa-drill-saturdays-2024",
    title: "DSA Drill Saturdays (DDS)",
    posterImg: "/assets/events/legacy/dsa-drill.png", // Reusing placeholder
    backgroundImg: "/assets/events/legacy/dsa-drill-bg.jpg", // Reusing placeholder
    venue: "Hacker Rank",
    time: "Every Saturday (Starting Dec 14, 2024)",
    session: "2024-25",
    type: "Practice Series",
    description:
      "A weekly coding initiative focused on strengthening problem-solving skills through hands-on DSA practice and mentorship for technical interviews and competitive programming.",
    rulesAndRegulation: [
      "Participants must actively engage in hands-on DSA practice.",
      "Participation requires commitment to the weekly Saturday schedule.",
      "Participants are strongly encouraged to review the previous week's concepts and prepare any questions.",
      "When interacting with mentors, participants must be respectful, attentive.",
      "Participants are expected to attempt problems independently first before seeking assistance.",
      "Consistent attendance is crucial for maximizing learning benefits.",
    ],
    leaderboard: [
      { name: "Session 1 (Dec 14th)", score: "Basics of DSA covered. Gained confidence in fundamental concepts." },
      { name: "Session 2 (Dec 21st)", score: "Array manipulation techniques covered. Improved understanding of sorting/searching." },
      { name: "Session 3 (Dec 28th)", score: "Big Sorting and efficient sorting algorithms covered." },
      { name: "Session 4 (Jan 4th)", score: "Java Loops II covered. Enhanced proficiency in using loops." },
      { name: "Session 5 (Feb 1st)", score: "String and Number Analysis covered. Improved understanding of palindrome logic." },
    ],
    gallery: [],
  },
  {
    id: "web-styledown-2024",
    title: "Web Styledown – CSS Styling Challenge Event",
    posterImg: "/assets/events/legacy/webstyledown.png", // Placeholder
    backgroundImg: "/assets/events/legacy/webstyledown-bg.jpg", // Placeholder
    venue: "Online | Open Source",
    time: "Dec 6–8, 2024 (50-hour window)",
    session: "2024-25",
    type: "Design Challenge",
    description:
      "A CSS styling challenge where participants were given a pre-written HTML front-page template and had 50 hours to creatively style it, ensuring full responsiveness across all screen sizes.",
    rulesAndRegulation: [
      "The primary goal was creative styling and full responsiveness.",
      "The competition period was strictly 50 hours.",
      "Participants were permitted to modify the provided HTML structure.",
      "Submission Criteria: Creativity, Technical Proficiency, and Responsiveness.",
      "Plagiarism or use of previously created external code was prohibited.",
    ],
    leaderboard: [
      { name: "Yash Mittal (Chitkara University)", prize: "1st Place (ACM Certificate)" },
      { name: "Pratyush Jha (Delhi Technical Campus)", prize: "2nd Place (ACM Certificate)" },
      { name: "Anupam Choudhary (XIM University)", prize: "3rd Place (ACM Certificate)" },
    ],
    gallery: [],
  },
  {
    id: "codewave-2024",
    title: "CodeWave",
    posterImg: "/assets/events/legacy/codewave.png", // Placeholder
    backgroundImg: "/assets/events/legacy/codewave-bg.jpg", // Placeholder
    venue: "LAB 5",
    time: "July 30, 2024 | 4:00 PM – 5:00 PM",
    session: "2024-25",
    type: "Coding Challenge",
    description:
      "A coding challenge where teams of 2 members competed in two rounds. Questions were structured based on the participants' academic years to test coding and logical thinking skills.",
    rulesAndRegulation: [
      "Participation required teams of exactly two (2) members.",
      "All competition rounds were held in Lab 5.",
      "The challenge consisted of two mandatory coding rounds.",
      "Questions were differentiated based on the academic year.",
      "Use of external electronic devices or internet searches was strictly prohibited.",
    ],
    leaderboard: [
      { name: "Pratirupa Toppo, Jessica Maria Ekka (2nd YEAR)", prize: "ACM Certificates, Mouse and Laptop cover" },
      { name: "Mrinalee Mishra, Koyena Sutradhar (1st YEAR)", prize: "ACM Certificates, Mouse and Laptop cover" },
    ],
    gallery: [],
  },
  {
    id: "mind-spark-2024",
    title: "Mind Spark",
    posterImg: "/assets/events/legacy/mindspark.png", // Placeholder
    backgroundImg: "/assets/events/legacy/mindspark-bg.jpg", // Placeholder
    venue: "CR – 301, 3rd floor new academic block",
    time: "July 2, 2024 | 4:00 PM – 5:00 PM",
    session: "2024-25",
    type: "Logical Challenge",
    description:
      "An event designed to enhance thinking and logical abilities, focusing on problems that required participants to apply critical reasoning, systematic analysis, and creative problem-solving.",
    rulesAndRegulation: [
      "Participants must focus on applying critical reasoning and creative problem-solving.",
      "All challenges were to be completed through individual effort only.",
      "Use of external electronic devices, the internet, or generative AI tools was strictly prohibited.",
      "Each problem was subject to a strict time limit.",
      "Winners were decided based on accuracy and logical validity.",
    ],
    leaderboard: [
      { name: "Ayush Jha", prize: "1st Place (ACM Certificates, Gold Medal)" },
      { name: "Ashmit Pradhan", prize: "2nd Place (ACM Certificates, Silver Medal)" },
      { name: "Moningi Sai Sumanth", prize: "3rd Place (ACM Certificates, Bronze Medal)" },
    ],
    gallery: [],
  },
  {
    id: "cracking-internships-2024",
    title: "Cracking Summer Internships with Coding Ninjas",
    posterImg: "/assets/events/legacy/internship.png", // Placeholder
    backgroundImg: "/assets/events/legacy/internship-bg.jpg", // Placeholder
    venue: "Zoom Meeting",
    time: "May 27, 2024 | 6:00 PM – 7:00 PM",
    session: "2024-25",
    type: "Speaker Event",
    description:
      "A Speaker event in collaboration with Coding Ninjas, equipping participants with the essential knowledge and skills to excel in their summer internships and future career placements.",
    rulesAndRegulation: [
      "Only pre-registered attendees were granted entry.",
      "Attendees must be seated at the venue prior to the scheduled start time.",
      "All personal electronic devices must be set to silent or switched off.",
      "Attendees were expected to maintain professional and respectful behavior.",
      "Questions were held until the designated Q&A segment.",
    ],
    leaderboard: [
      { name: "Key Takeaway", score: "Enhanced understanding of internship requirements and industry trends." },
      { name: "Key Takeaway", score: "Improved profile-building and resume-writing skills." },
      { name: "Key Takeaway", score: "Effective interview preparation techniques discussed." },
    ],
    gallery: [],
  },
  {
    id: "codesprint-4",
    title: "CodeSprint 4.0",
    posterImg: "/assets/events/legacy/codesprint4.png",
    backgroundImg: "/assets/events/legacy/codesprint4-bg.jpg",
    venue: "Auditorium, Block A",
    time: "February 10, 2024 · 10:00 AM – 4:00 PM",
    session: "2024-25",
    type: "Coding Contest",
    description:
      "The fourth edition of CodeSprint, featuring timed problem-solving rounds, algorithmic challenges, and leaderboard-based competition.",
    rulesAndRegulation: [],
    leaderboard: [],
    gallery: [],
  },
  {
    id: "synchro-3",
    title: "SYNCHRONOISE 3.0 – Tech Fest",
    posterImg: "/assets/events/legacy/synchro3.png",
    backgroundImg: "/assets/events/legacy/synchro3-bg.jpg",
    venue: "Central Courtyard & Labs",
    time: "March 15–16, 2024",
    session: "2024-25",
    type: "Tech Fest",
    description:
      "A two-day flagship tech fest featuring hackathons, design events, gaming competitions, and industry sessions.",
    rulesAndRegulation: [],
    leaderboard: [],
    gallery: [],
  },

  // =========================================================================
  // * 2023-24 Session (Retained)
  // =========================================================================
  {
    id: "dsa-drill-2023",
    title: "DSA Drill Saturdays – Weekly Series",
    posterImg: "/assets/events/legacy/dsa-drill.png",
    backgroundImg: "/assets/events/legacy/dsa-drill-bg.jpg",
    venue: "Lab 101, Block C",
    time: "August – November 2023 · Every Saturday",
    session: "2023-24",
    type: "Practice Series",
    description:
      "A weekly problem-solving series focusing on core data structures and algorithms, preparing students for contests and interviews.",
    rulesAndRegulation: [],
    leaderboard: [],
    gallery: [],
  },
  {
    id: "intro-acm-2023",
    title: "Introduction to ACM & Chapter Orientation",
    posterImg: "/assets/events/legacy/orientation.png",
    backgroundImg: "/assets/events/legacy/orientation-bg.jpg",
    venue: "Auditorium, Block A",
    time: "July 20, 2023 · 3:00 PM – 5:00 PM",
    session: "2023-24",
    type: "Orientation",
    description:
      "A chapter orientation session introducing ACM, the ACM XIM Student Chapter, benefits of membership, and the annual roadmap of activities.",
    rulesAndRegulation: [],
    leaderboard: [],
    gallery: [],
  },
];

export default events;