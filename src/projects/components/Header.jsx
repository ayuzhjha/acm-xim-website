import React from "react";

const Header = () => {
  return (
    <div className="relative py-10">
      <div className="font-bebas-neue px-2 md:px-0 text-7xl">
        Project Development Hub
      </div>
      <p className="font-inter text-sm md:text-base text-neutral-600 mt-2 mb-10 md:mb-12 max-w-3xl">
        An initiative of the ACM Student Chapter of XIM University.
        A showcase of technical excellence, innovative solutions, and collaborative development from our chapter members.
      </p>
      <div
        className="hidden lg:block relative text-right font-outline-4 font-bebas-neue -top-0 right-0 text-[14rem] text-blue-50 whitespace-nowrap">
        Featured Projects
      </div>
    </div>
  );
};

export default Header;
