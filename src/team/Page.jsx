import React, { useState } from "react";

// --- Data Section: Team Member Data ---
// This data structure defines all members and their roles.

const memberTeamsData = {
    tech: [
        { name: "Sanjay Kumar", email: "sanjay.k@xim.edu.in", imageUrl: "https://ui-avatars.com/api/?name=Sanjay+Kumar&background=3b82f6&color=fff&size=256" },
        { name: "Priya Sharma", email: "priya.sh@xim.edu.in", imageUrl: "https://ui-avatars.com/api/?name=Priya+Sharma&background=3b82f6&color=fff&size=256" },
        { name: "Rohit Varma", email: "rohit.v@xim.edu.in", imageUrl: "https://ui-avatars.com/api/?name=Rohit+Varma&background=3b82f6&color=fff&size=256" },
        { name: "Aarav Singh", email: "aarav.s@xim.edu.in", imageUrl: "https://ui-avatars.com/api/?name=Aarav+Singh&background=3b82f6&color=fff&size=256" },
        { name: "Kirti Rao", email: "kirti.r@xim.edu.in", imageUrl: "https://ui-avatars.com/api/?name=Kirti+Rao&background=3b82f6&color=fff&size=256" },
    ],
    events: [
        { name: "Deepa Menon", email: "deepa.m@xim.edu.in", imageUrl: "https://ui-avatars.com/api/?name=Deepa+Menon&background=ef4444&color=fff&size=256" },
        { name: "Vikas Dubey", email: "vikas.d@xim.edu.in", imageUrl: "https://ui-avatars.com/api/?name=Vikas+Dubey&background=ef4444&color=fff&size=256" },
        { name: "Neha Sahoo", email: "neha.s@xim.edu.in", imageUrl: "https://ui-avatars.com/api/?name=Neha+Sahoo&background=ef4444&color=fff&size=256" },
        { name: "Kunal Ghosh", email: "kunal.g@xim.edu.in", imageUrl: "https://ui-avatars.com/api/?name=Kunal+Ghosh&background=ef4444&color=fff&size=256" },
        { name: "Sara Jacob", email: "sara.j@xim.edu.in", imageUrl: "https://ui-avatars.com/api/?name=Sara+Jacob&background=ef4444&color=fff&size=256" },
    ],
    contentAndSupport: [
        { name: "Anjali Roy", email: "anjali.r@xim.edu.in", imageUrl: "https://ui-avatars.com/api/?name=Anjali+Roy&background=10b981&color=fff&size=256" },
        { name: "Mohit Das", email: "mohit.d@xim.edu.in", imageUrl: "https://ui-avatars.com/api/?name=Mohit+Das&background=10b981&color=fff&size=256" },
        { name: "Tara Singh", email: "tara.s@xim.edu.in", imageUrl: "https://ui-avatars.com/api/?name=Tara+Singh&background=10b981&color=fff&size=256" },
        { name: "Vivek Nair", email: "vivek.n@xim.edu.in", imageUrl: "https://ui-avatars.com/api/?name=Vivek+Nair&background=10b981&color=fff&size=256" },
        { name: "Rina Shah", email: "rina.s@xim.edu.in", imageUrl: "https://ui-avatars.com/api/?name=Rina+Shah&background=10b981&color=fff&size=256" },
    ],
    mediaAndPR: [
        { name: "Gaurav Jena", email: "gaurav.j@xim.edu.in", imageUrl: "https://ui-avatars.com/api/?name=Gaurav+Jena&background=f97316&color=fff&size=256" },
        { name: "Isha Patel", email: "isha.p@xim.edu.in", imageUrl: "https://ui-avatars.com/api/?name=Isha+Patel&background=f97316&color=fff&size=256" },
        { name: "Zafar Khan", email: "zafar.k@xim.edu.in", imageUrl: "https://ui-avatars.com/api/?name=Zafar+Khan&background=f97316&color=fff&size=256" },
        { name: "Lata Rani", email: "lata.r@xim.edu.in", imageUrl: "https://ui-avatars.com/api/?name=Lata+Rani&background=f97316&color=fff&size=256" },
        { name: "David John", email: "david.j@xim.edu.in", imageUrl: "https://ui-avatars.com/api/?name=David+John&background=f97316&color=fff&size=256" },
    ]
};

// Consolidate all general members for the final section
const allGeneralMembers = [
    ...memberTeamsData.tech.map(m => ({ ...m, role: "Tech Team Member" })),
    ...memberTeamsData.events.map(m => ({ ...m, role: "Events Team Member" })),
    ...memberTeamsData.contentAndSupport.map(m => ({ ...m, role: "Content Team Member" })),
    ...memberTeamsData.mediaAndPR.map(m => ({ ...m, role: "Media Team Member" })),
];


// --- Team Sections Configuration ---
const teamSections = [
    {
        title: "Faculty Sponsor & Mentor",
        subtitle: "Academic guidance, strategic direction, and institutional support.",
        accent: "Faculty",
        members: [
            {
                name: "Dr. Chandan Misra",
                role: "Faculty Sponsor",
                tag: "SCSE , XIM UNIVERSITY",
                email: "chandan@xim.edu.in",
                linkedin: "https://linkedin.com/in/ananya-rao",
                googleSite: "https://sites.google.com/view/dr-misra",
                imageUrl:
                    "https://ui-avatars.com/api/?name=Chandan+Misra&background=1d4ed8&color=fff&size=256"
            },
            {
                name: "Prof. Swarup Chattopadhyay",
                role: "Faculty Mentor",
                tag: "SCSE, XIM UNIVERSITY",
                email: "swarup@xim.edu.in",
                linkedin: "https://linkedin.com/in/rohan-mehta",
                googleSite: "https://sites.google.com/view/prof-swarup",
                imageUrl:
                    "https://ui-avatars.com/api/?name=Swarup+Chattopadhyay&background=0f766e&color=fff&size=256"
            }
        ]
    },
    {
        title: "Office Bearers",
        subtitle: "Student leadership responsible for vision, operations, and chapter growth.",
        accent: "Leadership",
        members: [
            {
                name: "Kaif Khurshid",
                role: "Chairperson",
                tag: "Leadership & Strategy",
                email: "ucse23032@stu.xim.edu.in",
                linkedin: "https://www.linkedin.com/in/kaif-khurshid?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                github: "https://github.com/Kaifkhurshid7",
                imageUrl:
                    "https://ui-avatars.com/api/?name=Kaif+Khurshid&background=2563eb&color=fff&size=256"
            },
            {
                name: "Siddhant Pradhan",
                role: "Vice -chairperson",
                tag: "Operations & Outreach",
                email: "ucse23051@stu.xim.edu.in",
                linkedin: "https://www.linkedin.com/in/siddhant-pradhant691/",
                github: "https://github.com/Sidd-ctrl",
                imageUrl:
                    "https://ui-avatars.com/api/?name=Siddhant+Pradhan&background=db2777&color=fff&size=256"
            },
            {
                name: "Priyanshu",
                role: "Secretary",
                tag: "Documentation & Coordination",
                email: "aditya.verma@xim.edu.in",
                linkedin: "https://linkedin.com/in/aditya-verma",
                github: "https://github.com/adiverma",
                imageUrl:
                    "https://ui-avatars.com/api/?name=Aditya+Verma&background=15803d&color=fff&size=256"
            }
        ]
    },
    {
        title: "Supervisors",
        subtitle: "Senior members ensuring continuity, quality, and mentorship.",
        accent: "Supervisors",
        members: [
            {
                name: "Sarthak Jain",
                role: "Senior Supervisor",
                tag: "Alumni – ACM–XIM",
                email: "sarthak.jain@alumni.xim.edu.in",
                linkedin: "https://linkedin.com/in/sarthak-jain",
                github: "https://github.com/sarthakj",
                imageUrl:
                    "https://ui-avatars.com/api/?name=Sarthak+Jain&background=0369a1&color=fff&size=256"
            },
            {
                name: "Meera Thomas",
                role: "Senior Supervisor",
                tag: "Alumni – ACM–XIM",
                email: "meera.thomas@alumni.xim.edu.in",
                linkedin: "https://linkedin.com/in/meera-thomas",
                github: "https://github.com/meerathomas",
                imageUrl:
                    "https://ui-avatars.com/api/?name=Meera+Thomas&background=be123c&color=fff&size=256"
            }
        ]
    },
    {
        title: "Core Team",
        subtitle: "The execution backbone of ACM–XIM across technology, events, content, and media.",
        accent: "Core Team",
        members: [
            {
                name: "Nidhi Patel",
                role: "Treasurer",
                tag: "Finance & Sponsorships",
                email: "nidhi.patel@xim.edu.in",
                linkedin: "https://linkedin.com/in/nidhi-patel",
                github: "https://github.com/nidhipatel",
                imageUrl:
                    "https://ui-avatars.com/api/?name=Nidhi+Patel&background=7c2d12&color=fff&size=256"
            },
            {
                name: "Arjun Nair",
                role: "Convenor – Tech",
                tag: "Technical Strategy",
                email: "arjun.nair@xim.edu.in",
                linkedin: "https://linkedin.com/in/arjun-nair",
                github: "https://github.com/arjunair",
                imageUrl:
                    "https://ui-avatars.com/api/?name=Arjun+Nair&background=2563eb&color=fff&size=256"
            },
            {
                name: "Simran Kaur",
                role: "Deputy Tech Lead",
                tag: "Platforms & Infrastructure",
                email: "simran.kaur@xim.edu.in",
                linkedin: "https://linkedin.com/in/simran-kaur",
                github: "https://github.com/simrank",
                imageUrl:
                    "https://ui-avatars.com/api/?name=Simran+Kaur&background=9f1239&color=fff&size=256"
            },
            {
                name: "Mohammed Ali",
                role: "Events Lead",
                tag: "Flagship & National Events",
                email: "mohammed.ali@xim.edu.in",
                linkedin: "https://linkedin.com/in/mohammed-ali",
                github: "https://github.com/mohdali",
                imageUrl:
                    "https://ui-avatars.com/api/?name=Mohammed+Ali&background=14532d&color=fff&size=256"
            },
            {
                name: "Tanvi Deshpande",
                role: "Deputy Events Lead",
                tag: "Logistics & Coordination",
                email: "tanvi.deshpande@xim.edu.in",
                linkedin: "https://linkedin.com/in/tanvi-deshpande",
                github: "https://github.com/tanvid",
                imageUrl:
                    "https://ui-avatars.com/api/?name=Tanvi+Deshpande&background=ef4444&color=fff&size=256"
            },
            {
                name: "Rahul Iyer",
                role: "Content Lead",
                tag: "Communication & Documentation",
                email: "rahul.iyer@xim.edu.in",
                linkedin: "https://linkedin.com/in/rahul-iyer",
                github: "https://github.com/rahuliyer",
                imageUrl:
                    "https://ui-avatars.com/api/?name=Rahul+Iyer&background=1d4ed8&color=fff&size=256"
            },
            {
                name: "Shruti Das",
                role: "Deputy Content Lead",
                tag: "Outreach & Copies",
                email: "shruti.das@xim.edu.in",
                linkedin: "https://linkedin.com/in/shruti-das",
                github: "https://github.com/shrutid",
                imageUrl:
                    "https://ui-avatars.com/api/?name=Shruti+Das&background=ea580c&color=fff&size=256"
            },
            {
                name: "Vikram Kapoor",
                role: "Media & PR Lead",
                tag: "Design & Social Media",
                email: "vikram.kapoor@xim.edu.in",
                linkedin: "https://linkedin.com/in/vikram-kapoor",
                github: "https://github.com/vikramk",
                imageUrl:
                    "https://ui-avatars.com/api/?name=Vikram+Kapoor&background=047857&color=fff&size=256"
            },
            {
                name: "Ayesha Khan",
                role: "Chapter PoC",
                tag: "ACM India & University Liaison",
                email: "ayesha.khan@xim.edu.in",
                linkedin: "https://linkedin.com/in/ayesha-khan",
                github: "https://github.com/ayeshak",
                imageUrl:
                    "https://ui-avatars.com/api/?name=Ayesha+Khan&background=2563eb&color=fff&size=256"
            },
            {
                name: "Ritvik Rao",
                role: "Event PoC",
                tag: "Inter-College Coordination",
                email: "ritvik.rao@xim.edu.in",
                linkedin: "https://linkedin.com/in/ritvik-rao",
                github: "https://github.com/ritvikrao",
                imageUrl:
                    "https://ui-avatars.com/api/?name=Ritvik+Rao&background=b91c1c&color=fff&size=256"
            }
        ]
    },
    {
        title: "ACM Student Chapter Members",
        subtitle: "The vibrant and dedicated community driving chapter activities through specialized teams.",
        accent: "Members",
        isGeneralMemberSection: true, // Flag for custom layout
        members: allGeneralMembers,
        subTeams: [
            {
                teamName: "Tech Team",
                description: "Developing and maintaining the chapter's digital presence (websites, applications, and tools).",
                members: memberTeamsData.tech,
                colorClass: "text-blue-600 border-blue-200",
                // Gradient property removed as we are using a unified black border
            },
            {
                teamName: "Events Team",
                description: "Planning, logistics, and execution of all workshops, hackathons, and tech talks.",
                members: memberTeamsData.events,
                colorClass: "text-blue-600 border-blue-200",
            },
            {
                teamName: "Content & Support Team",
                description: "Creating engaging content, writing articles, and providing membership support.",
                members: memberTeamsData.contentAndSupport,
                colorClass: "text-blue-600 border-blue-200",
            },
            {
                teamName: "Media & PR Team",
                description: "Managing social media, graphic design, photography, and external communication.",
                members: memberTeamsData.mediaAndPR,
                colorClass: "text-blue-600 border-blue-200",
            }
        ]
    }
];

// --- Component: Social Links ---
// Renders common social media links for members. Uses the primary blue accent.
const SocialLinks = ({ member, isFormal = false }) => (
    <div
        className={`flex flex-wrap items-center justify-center gap-3 text-xs p-4 ${isFormal ? 'bg-transparent' : 'bg-blue-50/50'}`}
    >
        {member.linkedin && (
            <a
                href={member.linkedin}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-1.5 rounded-full border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition duration-200 font-medium whitespace-nowrap"
            >
                LinkedIn
            </a>
        )}
        {member.email && (
            <a
                href={`mailto:${member.email}`}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-1.5 rounded-full border border-neutral-700 text-neutral-700 hover:bg-neutral-800 hover:text-white transition duration-200 font-medium whitespace-nowrap"
            >
                Email
            </a>
        )}
        {member.googleSite && (
            <a
                href={member.googleSite}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-1.5 rounded-full border border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white transition duration-200 font-medium whitespace-nowrap"
            >
                Google Site
            </a>
        )}
        {member.github && (
            <a
                href={member.github}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-1.5 rounded-full border border-neutral-400 text-neutral-500 hover:bg-neutral-600 hover:text-white transition duration-200 font-medium whitespace-nowrap"
            >
                GitHub
            </a>
        )}
    </div>
);


// --- Component: General Member Card ---
// Used for the specialized team members (Tech, Events, etc.).
const GeneralMemberCard = ({ member, colorClass }) => {
    const accentColor = colorClass.split('-')[1];

    return (
        <div className="group relative h-full">
            <div
                className={`
                    relative rounded-2xl bg-white 
                    border border-neutral-200/70 
                    shadow-md 
                    transform transition-all duration-300 
                    flex flex-col items-center p-6 md:p-8 h-full 
                    cursor-default
                    group-hover:translate-y-[-2px]
                    group-hover:shadow-lg
                    group-hover:border-${accentColor}-400
                `}
            >
                {/* Image - UPDATED FOR THIN BLACK CIRCLE */}
                <div className="relative mb-4">
                    {/* p-[1px] creates a very thin border. bg-black creates the black color. */}
                    <div
                        className={`
                            h-20 w-20 rounded-full p-[1px] shadow-sm 
                            bg-black 
                        `}
                    >
                        <div className="h-full w-full rounded-full bg-white overflow-hidden">
                            <img
                                src={member.imageUrl}
                                alt={member.name}
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* Text */}
                <div className="text-center space-y-1 flex-grow">
                    <h3 className="text-lg font-bold tracking-tight text-neutral-900">
                        {member.name}
                    </h3>
                    <div className="mx-auto w-10 h-0.5 bg-neutral-100 mt-1 mb-1" />

                    {/* Role (Team Name) */}
                    <p className={`text-sm font-semibold pt-1 ${colorClass}`}>
                        {member.role || "Member"}
                    </p>
                </div>

                {/* Email Link */}
                <a
                    href={`mailto:${member.email}`}
                    className={`mt-4 px-3 py-1 text-xs rounded-full border border-neutral-400 text-neutral-600 hover:bg-neutral-100 transition duration-200 font-medium whitespace-nowrap`}
                    title={`Email ${member.name}`}
                >
                    Email
                </a>
            </div>
        </div>
    );
};


// --- Component: Team Card (Used for Faculty, Supervisors, Office Bearers, Core Team) ---
const TeamCard = ({ member, sectionTitle }) => {
    const isInteractive = sectionTitle === "Office Bearers" || sectionTitle === "Core Team";
    const isFormal = sectionTitle === "Faculty Sponsor & Mentor" || sectionTitle === "Supervisors";
    const [isExpanded, setIsExpanded] = useState(false);

    // Primary color palette
    const accentPrimary = 'blue-600';
    const accentLight = 'blue-400';

    const toggleExpand = (e) => {
        if (isInteractive) {
            e.stopPropagation();
            setIsExpanded(!isExpanded);
        }
    };

    // Styling for Office Bearers/Core Team (Interactive)
    const interactiveCardClasses = `
        relative rounded-2xl bg-white 
        border border-neutral-200/70 
        shadow-xl 
        transform transition-all duration-300 
        flex flex-col items-center p-10 md:p-12
        
        ${isInteractive ? 'cursor-pointer' : 'cursor-default'} 
        
        group-hover:translate-y-[-4px] 
        group-hover:shadow-2xl 
        group-hover:border-${accentLight} 
    `;

    // Styling for Faculty/Supervisors (Formal) - BG is white as requested
    const formalCardClasses = `
        relative rounded-2xl bg-white 
        shadow-md 
        transform transition-all duration-300 
        flex flex-col items-center p-10 md:p-12 h-full
        
        group-hover:bg-neutral-100/70
        group-hover:shadow-lg
        group-hover:border group-hover:border-${accentLight}
    `;


    const unifiedImageRing = "bg-black p-[2px] shadow-sm";

    // Render Logic for Formal Cards (Faculty/Supervisors)
    if (isFormal) {
        return (
            <div className="group relative h-full">
                <div className={formalCardClasses}>
                    {/* Image - Applying the Unified Black Ring */}
                    <div className="relative mb-6">
                        <div className={`h-28 w-28 md:h-32 md:w-32 rounded-full ${unifiedImageRing}`}>
                            <div className="h-full w-full rounded-full bg-white overflow-hidden">
                                <img
                                    src={member.imageUrl}
                                    alt={member.name}
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                    {/* Text */}
                    <div className="text-center space-y-1 flex-grow mb-6">
                        <h3 className="text-xl md:text-2xl font-black tracking-tight text-neutral-900">
                            {member.name}
                        </h3>
                        {/* Professional role text in emerald green */}
                        <p className="text-lg font-bold text-emerald-800 pt-1">
                            {member.role}
                        </p>
                        <div className="mx-auto w-16 h-0.5 bg-neutral-300 mt-2 mb-2" />
                        {member.tag && (
                            <p className="text-sm text-neutral-600">
                                {member.tag}
                            </p>
                        )}
                    </div>
                    {/* Links - Always visible and clean for formal members */}
                    <SocialLinks member={member} isFormal={true} />
                </div>
            </div>
        );
    }

    // Render Logic for Interactive Cards (Office Bearers/Core Team)
    return (
        <div className="group relative">
            {/* Subtle blue background effect on hover */}
            <div
                className={`
                    absolute inset-0 rounded-2xl 
                    bg-gradient-to-br from-blue-50/50 to-white 
                    opacity-100 group-hover:opacity-10 
                    transition-opacity duration-500 pointer-events-none
                `}
            />

            <div
                className={interactiveCardClasses}
                onClick={toggleExpand}
            >

                {/* Image - Applying the Unified Black Ring (No colored shadow) */}
                <div className="relative mb-6">
                    <div
                        className={`
                            h-28 w-28 md:h-32 md:w-32 rounded-full 
                            ${unifiedImageRing}
                        `}
                    >
                        <div className="h-full w-full rounded-full bg-white overflow-hidden">
                            <img
                                src={member.imageUrl}
                                alt={member.name}
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* Text */}
                <div className="text-center space-y-1 flex-grow mb-6">
                    <h3 className="text-xl md:text-2xl font-black tracking-tight text-neutral-900">
                        {member.name}
                    </h3>
                    {/* Blue accent for Role */}
                    <p className={`text-lg font-bold text-${accentPrimary} pt-1`}>
                        {member.role}
                    </p>
                    <div className="mx-auto w-16 h-0.5 bg-neutral-200 mt-2 mb-2" />
                    {member.tag && (
                        <p className="text-sm text-neutral-500">
                            {member.tag}
                        </p>
                    )}
                </div>

                {/* Toggle Button (Blue accent) */}
                <button
                    onClick={toggleExpand}
                    className={`mt-6 w-10 h-10 rounded-full bg-blue-500 hover:bg-blue-600 text-white flex items-center justify-center shadow-lg transition-all duration-200`}
                    title={isExpanded ? "Hide Links" : "Show Profile Links"}
                >
                    <svg
                        className={`w-6 h-6 transition-transform duration-300 ${isExpanded ? 'rotate-90' : 'rotate-0'}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5.121 17.804A13.934 13.934 0 0012 21c2.327 0 4.512-.646 6.357-1.797M20 10V7a1 1 0 00-1-1h-4.041A7.908 7.908 0 0012 4a7.908 7.908 0 00-2.959.689M12 16a4 4 0 100-8 4 4 0 000 8zM17 17l4 4m0-4l-4 4"
                        />
                    </svg>
                </button>
            </div>

            {/* Slide-Down Link Container */}
            <div
                className={`
                    w-full z-0
                    rounded-b-2xl shadow-xl border border-t-0 border-${accentLight} 
                    overflow-hidden transition-all duration-300
                    
                    ${isExpanded
                        ? 'max-h-96 opacity-100 translate-y-0'
                        : 'max-h-0 opacity-0'}
                `}
                onClick={(e) => e.stopPropagation()}
            >
                <SocialLinks member={member} isFormal={false} />
            </div>
        </div>
    );
};

// --- Main Page Component ---
const Page = () => {
    return (
        <div
            id="team"
            className="min-h-screen w-full flex justify-center bg-neutral-50 py-16 md:py-24"
        >
            <div className="max-w-7xl mx-auto w-full px-4 md:px-10 lg:px-12">

                {/* Main Heading Section */}
                <div className="text-center mb-16 md:mb-24">
                    <p className="text-sm tracking-[0.3em] uppercase text-blue-600 font-bold mb-3">
                        ACM–XIM Student Chapter
                    </p>
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-neutral-900">
                        Meet the <span className="text-blue-600">Leadership</span>
                    </h1>
                    <p className="mt-5 text-base md:text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
                        A dedicated group of faculty mentors, student leaders, and core contributors, committed to advancing the ACM–XIM community through collaboration and excellence.
                    </p>
                </div>

                {/* Sections Loop */}
                <div className="flex flex-col gap-20 md:gap-28">
                    {teamSections.map((section) => {
                        // Logic to determine grid layout based on section type
                        const isTwoMemberSection =
                            section.title === "Faculty Sponsor & Mentor" ||
                            section.title === "Supervisors";
                        const isOfficeBearers = section.title === "Office Bearers";
                        const isCoreTeam = section.title === "Core Team";
                        const isGeneralMemberSection = section.isGeneralMemberSection;

                        let gridClasses = "grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12";
                        let wrapperClasses = "";

                        if (isTwoMemberSection) {
                            // Center two-member sections
                            gridClasses = "grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-4xl w-full";
                            wrapperClasses = "flex justify-center";
                        } else if (isOfficeBearers) {
                            // Center three-member office bearer section
                            gridClasses = "grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-5xl w-full";
                            wrapperClasses = "flex justify-center";
                        } else if (isCoreTeam) {
                            // Standard full-width grid for core team
                            gridClasses = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12";
                            wrapperClasses = "";
                        }

                        // Handle the dedicated General Member Section (Sub-teams)
                        if (isGeneralMemberSection) {
                            return (
                                <section key={section.title} className="space-y-12">
                                    <div className="text-center">
                                        <div className="flex flex-col items-center justify-center">
                                            {/* Icon with Blue accent */}
                                            <div className="h-10 w-10 rounded-full bg-blue-600/10 flex items-center justify-center mb-3">
                                                <svg
                                                    className="h-6 w-6 text-blue-700"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M16 8a4 4 0 11-8 0 4 4 0 018 0zM12 20h10v-2a3 3 0 00-3-3H5a3 3 0 00-3 3v2h10z"
                                                    />
                                                </svg>
                                            </div>

                                            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight">
                                                {section.title}
                                            </h2>
                                            {section.subtitle && (
                                                <p className="text-sm text-neutral-500 mt-2 max-w-xl">
                                                    {section.subtitle}
                                                </p>
                                            )}
                                            {section.accent && (
                                                <span className="mt-4 px-4 py-1.5 rounded-full text-xs font-medium bg-white border border-blue-300 text-blue-700 shadow-sm">
                                                    {section.accent}
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    {/* Sub-Team Containers */}
                                    <div className="space-y-16">
                                        {section.subTeams.map((subTeam) => (
                                            <div key={subTeam.teamName} className="space-y-6">
                                                {/* Sub-team heading uses team color */}
                                                <h3 className={`text-2xl font-bold text-center border-b-2 pb-2 ${subTeam.colorClass}`}>
                                                    {subTeam.teamName}
                                                </h3>
                                                <p className="text-center text-neutral-600 max-w-3xl mx-auto">
                                                    {subTeam.description}
                                                </p>
                                                {/* Grid for General Member Cards (5 columns) */}
                                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                                                    {subTeam.members.map((member) => (
                                                        <GeneralMemberCard
                                                            key={member.name}
                                                            member={{ ...member, role: subTeam.teamName.replace(" Team", "") }}
                                                            colorClass={subTeam.colorClass}
                                                        />
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            );
                        }

                        // Rendering for Faculty, Office Bearers, and Core Team
                        return (
                            <section key={section.title} className="space-y-12">

                                {/* Section Header (Centered) */}
                                <div className="text-center">
                                    <div className="flex flex-col items-center justify-center">

                                        <div className="h-10 w-10 rounded-full bg-blue-600/10 flex items-center justify-center mb-3">
                                            <svg
                                                className="h-6 w-6 text-blue-700"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35-.638.156-.477.307-.477.307l-1.07-1.07M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-5a1 1 0 011 1v2h2a1 1 0 110 2h-2v2a1 1 0 11-2 0v-2H9a1 1 0 010-2h2V8a1 1 0 011-1z"
                                                />
                                            </svg>
                                        </div>

                                        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight">
                                            {section.title}
                                        </h2>
                                        {section.subtitle && (
                                            <p className="text-sm text-neutral-500 mt-2 max-w-xl">
                                                {section.subtitle}
                                            </p>
                                        )}
                                        {section.accent && (
                                            <span className="mt-4 px-4 py-1.5 rounded-full text-xs font-medium bg-white border border-blue-300 text-blue-700 shadow-sm">
                                                {section.accent}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {/* Cards Grid Container */}
                                <div className={wrapperClasses}>
                                    <div className={gridClasses}>
                                        {section.members.map((member) => (
                                            <TeamCard
                                                key={member.name + member.role}
                                                member={member}
                                                sectionTitle={section.title}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </section>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Page;