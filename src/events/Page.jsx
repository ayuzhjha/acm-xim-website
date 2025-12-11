import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from "react";
import events from "../lib/data/events.global.data";

const SESSIONS = [
  { id: "2025-26", label: "2025–26 (Current Session)" },
  { id: "2024-25", label: "2024–25" },
  { id: "2023-24", label: "2023–24" },
];

const Page = () => {
  const [selectedSession, setSelectedSession] = useState("2025-26");

  const filteredEvents = events.filter(
    (event) => event.session === selectedSession
  );

  return (
    <div className="min-h-screen text-2xl w-full p-10 relative pb-60 bg-neutral-950 text-neutral-50">
      {/* Heading */}
      <h1 className="mb-6 text-5xl md:text-7xl font-extrabold text-center font-bebas-neue">
        Events <span className="text-blue-500">Archive</span>
      </h1>
      <p className="text-center text-sm md:text-base text-neutral-400 mb-10 max-w-2xl mx-auto">
        Explore ACM XIM Student Chapter events by academic session. Switch
        between current and past years to view all flagship, technical, and
        professional activities organized by the chapter.
      </p>

      {/* Session filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {SESSIONS.map((session) => (
          <button
            key={session.id}
            onClick={() => setSelectedSession(session.id)}
            className={`text-xs md:text-sm rounded-full px-4 md:px-6 py-2 border transition-all ${
              selectedSession === session.id
                ? "bg-blue-600 text-white border-blue-600 shadow-md"
                : "bg-neutral-900 text-neutral-300 border-neutral-700 hover:bg-neutral-800"
            }`}
          >
            {session.label}
          </button>
        ))}
      </div>

      {/* Events grid */}
      {filteredEvents.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="bg-neutral-900 rounded-xl shadow-lg p-4 flex flex-col justify-between border border-neutral-800 hover:border-blue-600/70 hover:shadow-blue-900/30 transition-all"
            >
              {/* Poster image */}
              {event.posterImg && (
                <div className="mb-4 rounded-lg overflow-hidden h-48">
                  <img
                    src={event.posterImg}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {/* Content */}
              <div className="flex-1 flex flex-col">
                <p className="text-xs uppercase tracking-wide text-neutral-400 mb-1">
                  {event.session} • {event.type || "Chapter Event"}
                </p>

                <h2 className="text-lg md:text-xl font-semibold text-neutral-50 mb-1">
                  {event.title}
                </h2>

                {event.time && (
                  <p className="text-xs text-neutral-400 mb-1">
                    {event.time}
                  </p>
                )}

                {event.venue && (
                  <p className="text-xs text-neutral-400 mb-3">
                    Venue: {event.venue}
                  </p>
                )}

                {event.description && (
                  <p className="text-sm text-neutral-300 mb-4 line-clamp-4">
                    {event.description}
                  </p>
                )}
              </div>

              {/* CTA – if you later make per-event pages */}
              <a
                href={`/events/${event.id}`}
                className="self-start mt-auto text-xs md:text-sm px-4 py-2 rounded-lg text-neutral-50 bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                View Details
              </a>
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-10 text-center text-neutral-400">
          <p className="text-lg mb-2">
            No events found for the{" "}
            <span className="font-semibold">{selectedSession}</span> session.
          </p>
          <p className="text-sm">
            Please try selecting a different academic year or check back later
            for updates.
          </p>
        </div>
      )}

      <FooterNavigation />
    </div>
  );
};

function FooterNavigation() {
  return (
    <div className="absolute w-full bottom-0 left-0 py-5 px-max text-neutral-50 bg-neutral-950 border-t border-neutral-700 z-[9999] text-base md:text-lg">
      <div className="flex justify-between items-center relative top-1">
        <a
          href="/"
          className="font-inter uppercase flex items-center group cursor-pointer"
        >
          <ChevronLeft
            size={18}
            className="group-hover:text-neutral-300 relative -left-0.5 group-hover:-left-2 transition-all ease-in-out duration-300"
          />
          <p>Home</p>
        </a>
        <a
          href="/events"
          className="font-inter uppercase text-lg flex items-center group cursor-pointer"
        >
          <p className="hover:tracking-widest hover:text-neutral-300 transition-all ease-in-out duration-200">
            Events
          </p>
        </a>
        <a
          href="/team"
          className="font-inter uppercase flex items-center group cursor-pointer"
        >
          <p>Team</p>
          <ChevronRight
            size={19}
            className="group-hover:text-neutral-300 relative left-0.5 group-hover:left-2 transition-all ease-in-out duration-300"
          />
        </a>
      </div>
    </div>
  );
}

export default Page;
