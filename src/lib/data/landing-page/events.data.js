import dds from "../../../assets/upcoming_event/dds.png";
import dataVisual from "../../../assets/upcoming_event/data_visual.png";
import codeTiranga from "../../../assets/home_event_pic/code-tiranga.png";
import clashOfCodes from "../../../assets/home_event_pic/clashofcodes.png";
import mindSpark from "../../../assets/home_event_pic/mindspark.png";
import pythonVerse from "../../../assets/home_event_pic/pythonverse.png";

// * Upcoming Events (for landing sections)
export const UpcomingEventsData = [
  {
    id: "Data Visualization",
    image: dataVisual,
    title: "Data Visualization",
    description:
      "Data visualization challenge to sharpen critical thinking for technical interviews.",
    delay: 0.3,
    session: "2025-26",
  },
  {
    id: "DDS",
    image: dds,
    title: "DSA DRILL SATURDAY",
    description:
      "DSA drill Saturday to sharpen critical thinking for technical interviews.",
    delay: 0.45,
    session: "2025-26",
  },
];

export const UpcomingEventsDataMobile = UpcomingEventsData;

// * Previous Events (highlights for older sessions)
export const PreviousEventsData = [
  {
    id: "mind-spark-2-2025",
    image: mindSpark,
    title: "Mind Spark 2.0: Logical Aptitude Challenge",
    description:
      "Advanced aptitude and logical reasoning challenge to sharpen critical thinking for technical interviews.",
    date: "November 8, 2025",
    session: "2025-26",
  },
  {
    id: "code-tiranga-2025",
    image: codeTiranga,
    title: "Code Tiranga: Web Designing Challenge",
    description:
      "An online web design competition challenging participants to build a creative and fully responsive website.",
    date: "October 26, 2025",
    session: "2025-26",
  },
  {
    id: "pythonverse-2025",
    image: pythonVerse,
    title: "PythonVerse: Coding & Project Challenge",
    description:
      "A comprehensive Python competition with tracks for standard coding, DSA, and project debugging.",
    date: "September 25, 2025",
    session: "2025-26",
  },
  {
    id: "Clash of Code",
    image: clashOfCodes,
    title: "Clash of Code",
    description:
      "A competitive coding event testing problem-solving skills, logic, and coding speed in 1v1 and group formats.",
    date: "July 20, 2025",
    session: "2025-26",
  },
];

export const PreviousEventsDataMobile = PreviousEventsData;
