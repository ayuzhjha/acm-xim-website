import React from "react";
import { ArrowUpRight } from "lucide-react";

const membershipData = {
  benefits: [
    {
      title: "ACM Digital Library",
      description:
        "Access thousands of peer-reviewed computing journals, magazines, and conference proceedings from leading researchers worldwide.",
      link: "https://dl.acm.org",
    },
    {
      title: "ACM Career & Job Center",
      description:
        "Explore exclusive academic, research, and industry job opportunities tailored for computing professionals and students.",
      link: "https://jobs.acm.org",
    },
    {
      title: "ACM TechNews & Career Insights",
      description:
        "Stay informed with curated technology news, career guidance, and research highlights delivered directly to members.",
      link: "https://www.acm.org/articles/technews",
    },
    {
      title: "Local Chapters & Global ACM Community",
      description:
        "Engage with a global network of computing professionals through local chapters, conferences, special interest groups, and events.",
      link: "https://www.acm.org/chapters",
    },
  ],

  plans: {
    studentMembership: {
      name: "Student Chapter Membership",
      price: 200,
      description:
        "This is the local chapter membership under the ACM XIM Student Chapter.",
      benefits: [
        "Free access to all ACM XIM events",
        "Monthly webinars by ACM India",
        "Involvement in Project Development Hubs",
        "Chapter-level tech initiatives",
        "Collaboration opportunities with other ACM chapters",
        "Summer and Winter School opportunities",
      ],
    },

    globalStudentMembership: {
      name: "Global ACM Student Membership",
      price: 1475,
      description: "This is the Global ACM Student Membership.",
      benefits: [
        "Unlimited access to Percipio & Skillsoft courses on tech and soft skills",
        "Over 9,700 eBooks and digital learning resources",
        "Globally recognized ACM Membership ID and acm.org email address",
        "Free registration for ACM webinars, career talks, and tech news",
        "Opportunities to join ACM SIGs in AI, ML, Security, and more",
        "Full access to the ACM Digital Library for research and publications",
        "Discounts on 170+ ACM conferences, workshops, and symposia",
        "Subscription to ACM flagship publications like CACM and Ubiquity",
        "Networking through ACM Local Chapters and global events",
        "Support and visibility via ACM-W initiatives for women in computing",
      ],
    },
  },
};

const Main = () => {
  return (
    <div className="min-h-screen h-full w-full flex flex-col gap-14">
      <h2 className="text-neutral-500 text-lg md:text-2xl px-2">
        Join XIM ACM Student Chapter and unlock a world of opportunities
        in technology and professional development.
      </h2>

      {/* Benefits Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 justify-between gap-5">
        {membershipData.benefits.map((data, i) => (
          <a
            key={i}
            href={data.link}
            target="_blank"
            rel="noreferrer"
            className="flex flex-col justify-between gap-8 md:gap-18 hover:outline outline-1 outline-blue-600/60 outline-offset-4 font-inter border border-neutral-300 rounded-2xl p-6 cursor-pointer transition"
          >
            <div className="flex gap-4 justify-between items-start">
              <p className="text-2xl md:text-3xl font-semibold">
                {data.title}
              </p>
              <ArrowUpRight
                size={32}
                strokeWidth={1.4}
                className="text-neutral-600 shrink-0"
              />
            </div>

            <p className="text-base md:text-lg text-neutral-500">
              {data.description}
            </p>
          </a>
        ))}
      </div>

      {/* Pricing Section */}
      <div className="md:py-24 px-2">
        <h1 className="text-8xl md:text-9xl font-bebas-neue">Pricing</h1>

        <div className="flex flex-col lg:flex-row gap-10 py-8 justify-center items-center max-w-7xl mx-auto">
          {/* Local Student Chapter Membership */}
          <div className="text-neutral-500 w-full relative border border-neutral-600 rounded-4xl p-10 shadow-lg">
            <h2 className="text-4xl text-neutral-700 font-semibold">
              {membershipData.plans.studentMembership.name}
            </h2>
            <p className="text-2xl font-semibold text-neutral-600 border-b py-4">
              {membershipData.plans.studentMembership.price} INR
            </p>
            <p className="text-lg text-neutral-600 py-6">
              {membershipData.plans.studentMembership.description}
              <br /> It includes:
            </p>
            <ul className="text-base flex flex-col gap-2">
              {membershipData.plans.studentMembership.benefits.map(
                (benefit, i) => (
                  <li key={i}>✓&nbsp;{benefit}</li>
                )
              )}
            </ul>

            <button className="group mt-10 text-xl py-4 px-5 rounded-4xl border-4 border-neutral-700 cursor-pointer text-neutral-700 hover:bg-neutral-800 hover:text-neutral-200 flex items-center gap-4 transition-all ease-in-out duration-300">
              <p className="relative font-medium">Get the Membership</p>
              <ArrowUpRight size={18} className="relative" />
            </button>
          </div>

          {/* Global ACM Student Membership */}
          <div className="text-neutral-500 text-xs w-full border border-blue-600 rounded-4xl p-10 pb-11 shadow-lg shadow-blue-200">
            <h2 className="text-4xl text-neutral-700 font-semibold">
              {membershipData.plans.globalStudentMembership.name}
            </h2>
            <p className="text-2xl font-semibold text-neutral-600 border-b py-4">
              {membershipData.plans.globalStudentMembership.price} INR
            </p>
            <p className="text-lg text-neutral-600 py-6">
              {membershipData.plans.globalStudentMembership.description}
              <br /> This includes all benefits of the Student
              Chapter Membership, plus:
            </p>
            <ul className="text-base flex flex-col gap-2">
              {membershipData.plans.globalStudentMembership.benefits.map(
                (benefit, i) => (
                  <li key={i}>✓&nbsp;{benefit}</li>
                )
              )}
            </ul>

            <button className="mt-10 text-xl py-4 px-5 rounded-4xl border-4 border-neutral-700 cursor-pointer text-neutral-700 hover:bg-neutral-800 hover:text-neutral-200 flex items-center gap-4 transition-all ease-in-out duration-300">
              <p className="relative font-medium">Get the Membership</p>
              <ArrowUpRight size={18} className="relative" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
