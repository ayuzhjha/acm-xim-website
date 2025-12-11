import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import {
	SideNavLinks,
	Socials,
} from "../lib/data/landing-page/sideNavbar.data";

function SideNavbar({ isOpen, setIsOpen }) {
	// State keys are preserved
	const [navImage, setNavImage] = useState("bg-neutral-300");
	const [hover, setHover] = useState(false);

	const handleClose = () => {
		setIsOpen(false);
		setNavImage("bg-neutral-300");
	};

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
		return () => {
			document.body.style.overflow = "auto";
		};
	}, [isOpen]);
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
			},
		},
	};

	const itemVariants = {
		hidden: { x: 50, opacity: 0 },
		visible: {
			x: 0,
			opacity: 1,
			transition: {
				type: "spring",
				stiffness: 150,
				damping: 20,
			},
		},
	};

	return (
		<motion.div
			initial={false}
			animate={{
				// Full width, slides from the right
				x: isOpen ? "0%" : "100%",
			}}
			transition={{ type: "tween", duration: 0.5, ease: "easeInOut" }}
			className={`fixed top-0 right-0 w-full h-full bg-white/95 backdrop-blur-xl z-50 overflow-y-auto font-inter shadow-2xl`}
		>
			{/* Main Content Wrapper */}
			<div className="relative w-full mx-auto flex flex-col gap-4 h-full items-start justify-between p-4 sm:p-6 lg:p-10">

				{/* --- HEADER (VISIBLE ON ALL SCREENS) --- */}
				<div className="flex justify-between items-center w-full mb-4 lg:mb-0">
					<a
						href="/"
						className="text-2xl font-extrabold text-neutral-800 tracking-tight"
						onClick={handleClose}
					>
						ACM <span className="text-blue-600">XIM</span>
					</a>

					{/* Unique Mobile Close Button (Visible on SM and below) */}
					<button
						onClick={handleClose}
						className="rounded-full bg-neutral-100 hover:bg-neutral-200 p-2.5 transition duration-300 shadow-sm text-neutral-800 md:hidden"
						aria-label="Close Navigation"
					>
						<X className="size-6" />
					</button>
				</div>


				{/* ---------------------------------------------------- */}
				{/* 1. TOP IMAGE/PLACEHOLDER SECTION (ORIGINAL DESKTOP STRUCTURE) */}
				{/* ---------------------------------------------------- */}
				<motion.div className="w-full md:min-h-[55%] h-full rounded-2xl mt-1 md:mt-2 relative hidden md:block">

					<motion.div
						layout
						key={navImage}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.3 }}
						className={`${navImage} rounded-2xl absolute inset-0 bg-cover bg-center transition-all duration-300`}
						style={
							!navImage.includes('bg-')
								? { backgroundImage: `url(${navImage})` }
								: {}
						}
					></motion.div>

					{/* Desktop Close Button (Original absolute placement) */}
					<div className="absolute top-0 right-0 p-2 md:p-0">
						<span className="hidden md:block">
							<X
								onClick={handleClose}
								className="size-10 lg:size-14 p-2 lg:p-3 bg-white absolute -top-1 -right-0.5 rounded-bl-xl cursor-pointer text-neutral-800 shadow-lg hover:text-red-500 transition-colors"
							/>
						</span>
					</div>
				</motion.div>

				{/* ---------------------------------------------------- */}
				{/* 2. MAIN LINKS SECTION */}
				{/* ---------------------------------------------------- */}

				{/* Mobile Links (Stacked, styled, visible below MD) */}
				<motion.div
					className="flex flex-col w-full h-full justify-center md:hidden"
					variants={containerVariants}
					initial="hidden"
					animate={isOpen ? "visible" : "hidden"}
				>
					<p className="text-sm uppercase tracking-[0.2em] text-neutral-500 font-medium mb-4">Navigation</p>
					<div className="space-y-3">
						{SideNavLinks.map((link, index) => (
							<motion.a
								key={index}
								variants={itemVariants}
								href={link.link}
								onClick={handleClose}
								className={`
                                    group block text-5xl sm:text-6xl uppercase font-extrabold 
                                    text-neutral-900 hover:text-blue-600 transition duration-300
                                    relative overflow-hidden cursor-pointer leading-none
                                `}
							>
								<span className="relative z-10">{link.name}</span>
								{/* Underline Accent */}
								<span className="absolute left-0 bottom-0 h-1 w-0 group-hover:w-full bg-blue-500 transition-all duration-300 ease-out"></span>
							</motion.a>
						))}
					</div>
				</motion.div>


				{/* Desktop Links (Original grid structure, visible on MD+) */}
				<motion.div
					className="hidden md:grid grid-cols-1 h-fit md:grid-cols-2 sm:gap-x-20 w-[90%] uppercase font-bold text-neutral-800/90"
					variants={containerVariants}
					initial="hidden"
					animate={isOpen ? "visible" : "hidden"}
				>
					{SideNavLinks.map((link, index) => (
						<motion.a
							onMouseEnter={() => {
								setNavImage(link.img);
								setHover(true);
							}}
							onMouseLeave={() => setHover(false)}
							variants={itemVariants}
							key={index}
							href={link.link}
							onClick={handleClose}
							className={`group flex p-1 xl:p-2 3xl:p-3 4xl:p-4 items-center relative text-5xl w-fit ${hover
								? "md:hover:text-blue-600 md:text-neutral-500 hover:blur-none blur-[0.5px]"
								: ""
								} transition-all ease-in-out duration-400 cursor-pointer`}
						>
							<span className="relative z-10">{link.name}</span>
							<span className="absolute left-0 bottom-4 h-1 w-0 group-hover:w-full bg-blue-500/80 transition ease-in-out duration-300"></span>
						</motion.a>
					))}
				</motion.div>

				{/* Mobile Socials (At the bottom of the content wrapper) */}
				<div className="w-full pt-6 mt-12 md:mt-auto border-t border-neutral-100 lg:hidden">
					<p className="text-sm uppercase tracking-widest text-neutral-500 font-medium mb-4">
						Connect With Us
					</p>
					<div className="flex items-center gap-4">
						{Socials.map((item, i) => (
							<motion.a
								whileHover={{ y: -3, scale: 1.1 }}
								key={i}
								href={item.link}
								target="_blank"
								rel="noopener noreferrer"
								className={`size-10 rounded-full flex justify-center items-center bg-neutral-100 transition duration-300 shadow-md group relative`}
							>
								<item.icon className={`size-5 text-neutral-600 transition-colors duration-300 group-hover:text-blue-600`} />
								<div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-10 transition duration-300 bg-blue-500"></div>
							</motion.a>
						))}
					</div>
				</div>
			</div>

			{/* ---------------------------------------------------- */}
			{/* 3. SOCIALS FOOTER (ORIGINAL DESKTOP ABSOLUTE POSITIONED STRUCTURE - LG+ ONLY) */}
			{/* ---------------------------------------------------- */}
			<div className="absolute hidden right-0 -bottom-1 lg:flex item-center gap-6 p-4 xl:px-6 rounded-tl-3xl bg-neutral-100 border-t border-l border-neutral-200">
				{Socials.map((item, i) => (
					<motion.a
						whileHover={{ y: -4, scale: 1.1 }}
						key={i}
						href={item.link}
						target="_blank"
						rel="noopener noreferrer"
						className={`size-12 xl:size-14 rounded-full flex justify-center items-center shadow-md/30 hover:shadow-lg/30 relative ease-in-out cursor-pointer bg-white`}
					>
						<item.icon className={`size-6 text-neutral-600 transition-colors duration-300 group-hover:text-blue-600`} />
					</motion.a>
				))}
			</div>
		</motion.div>
	);
}

export default SideNavbar;