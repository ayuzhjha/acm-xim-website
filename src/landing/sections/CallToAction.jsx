import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CallToAction = () => {
	return (
		<div className="h-full py-16 pt-10 w-full mx-auto px-4 lg:px-6 2xl:px-10 ">
			{/* Desktop */}
			<div className="hidden md:block">
				<motion.div className="bg-neutral-950 border-2 border-x-blue-500 px-max font-semibold shadow-xl py-20 xl:py-25 text-center relative rounded-2xl">
					<h1 className="text-shadow-lg text-white text-5xl md:text-7xl 2xl:text-8xl font-bebas-neue">
						Become part of a{" "}
						<span className="text-yellow-400">global</span>
						<br />
						<span className="text-blue-500">ACM student community</span>
					</h1>

					<p className="text-neutral-400 py-8 text-xs font-normal md:text-lg max-w-xl mx-auto">
						Join the ACM XIM Student Chapter and unlock exclusive
						benefits designed to shape your technical and professional
						journey.
					</p>

					<div className="flex justify-center relative top-4 font-inter mx-auto text-neutral-100 border-4 border-blue-600/60 hover:border-blue-600/10 hover:text-neutral-100 hover:bg-blue-600/70 w-fit h-fit rounded-4xl transition-all ease-in-out duration-300">
						<a href="/membership" className="px-8 py-4 flex items-center gap-2">
							Explore Membership
							<ArrowRight size={18} />
						</a>
					</div>
				</motion.div>
			</div>

			{/* Mobile */}
			<div className="block md:hidden">
				<div className="bg-neutral-950 px-max font-semibold shadow-xl py-20 text-center relative rounded-2xl">
					<h1 className="text-shadow-lg text-white text-5xl font-bebas-neue">
						Join the{" "}
						<span className="text-yellow-400">ACM</span>
						<br />
						<span className="text-blue-500">student community</span>
					</h1>

					<p className="text-neutral-500 py-8 text-xs font-normal max-w-7xl mx-auto">
						Discover the benefits of ACM membership technical learning,
						expert sessions, competitions, networking, and opportunities
						that help you grow beyond the classroom and prepare for the
						future of computing.
					</p>

					<div className="flex justify-center mt-4 font-inter mx-auto w-fit h-fit rounded-4xl relative">
						<a
							href="/membership"
							className="w-fit text-neutral-800 font-normal bg-neutral-100 border-4 border-blue-500 hover:bg-blue-500 hover:text-neutral-100 rounded-4xl py-4 px-10 text-sm cursor-pointer hover:scale-105 transition-all duration-200 ease-in-out shadow-2xl flex items-center gap-2"
						>
							View Membership Benefits
							<ArrowRight size={16} />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CallToAction;
