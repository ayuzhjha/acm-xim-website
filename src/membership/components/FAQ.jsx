import React from "react";

const FAQ = () => {
  const faqData = [
    {
      question: "What is ACM?",
      answer:
        "ACM (Association for Computing Machinery) is the world’s largest international professional organization dedicated to advancing computing as a science and a profession. It connects students, educators, researchers, and professionals globally.",
    },
    {
      question: "What is the ACM Student Chapter of XIM University?",
      answer:
        "The ACM Student Chapter of XIM University (ACM-XIM) is the officially recognized student chapter under ACM Global and ACM India. It aims to foster a strong technical culture through workshops, competitions, projects, and industry interactions.",
    },
    {
      question: "Who can join the ACM-XIM Student Chapter?",
      answer:
        "All students of XIM University with an interest in computing, technology, and innovation are eligible to join the ACM-XIM Student Chapter, irrespective of their academic background.",
    },
    {
      question: "What is ACM Membership?",
      answer:
        "ACM membership offers access to learning resources, technical publications, career support, global networking opportunities, and professional development programs in the field of computing.",
    },
    {
      question: "Is ACM membership mandatory to join ACM-XIM?",
      answer:
        "No. Students can participate in ACM-XIM activities without global ACM membership. However, ACM members receive additional benefits such as priority access, official recognition, and certifications.",
    },
    {
      question: "Are ACM-XIM events free for members?",
      answer:
        "Yes. All official ACM-XIM events are completely free for registered ACM-XIM members. Non-members may be required to pay a nominal registration fee for certain events.",
    },
    {
      question: "What types of events does ACM-XIM organize?",
      answer:
        "ACM-XIM conducts coding contests, DSA challenges, technical workshops, hackathons, expert talks, project showcases, research discussions, and flagship tech events.",
    },
    {
      question: "How can I join the ACM-XIM Student Chapter?",
      answer:
        "Students can join by registering through the official ACM-XIM website or by enrolling during the chapter membership drives conducted each academic year.",
    },
  ];

  const [openIndex, setOpenIndex] = React.useState(null);

  const toggleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="h-full py-6">
      <h1 className="text-4xl md:text-9xl font-bebas-neue">FAQ</h1>

      <div className="mt-12 mx-auto max-w-4xl">
        {faqData.map((item, idx) => (
          <div className="border-b border-neutral-300" key={idx}>
            <button
              className="w-full text-left py-5 font-semibold flex justify-between items-center hover:text-neutral-700 transition"
              onClick={() => toggleAccordion(idx)}
            >
              <span className="text-lg md:text-xl">
                {item.question}
              </span>
              <span className="text-2xl">
                {openIndex === idx ? "−" : "+"}
              </span>
            </button>

            {openIndex === idx && (
              <div className="pb-5 px-2 text-sm md:text-lg font-inter text-neutral-600 leading-relaxed">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
