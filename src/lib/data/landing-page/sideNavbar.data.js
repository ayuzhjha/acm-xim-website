import {
	InstagramIcon,
	X,
	LinkedinIcon,
	TwitterIcon,
	YoutubeIcon,
} from "lucide-react";

import nav1 from "../../../assets/navbar_img/nav1.jpg";
import nav2 from "../../../assets/navbar_img/nav2.jpg";
import nav3 from "../../../assets/navbar_img/nav3.jpg";
import nav4 from "../../../assets/navbar_img/nav4.jpg";
import nav5 from "../../../assets/navbar_img/nav5.jpg";
import nav6 from "../../../assets/navbar_img/nav6.jpg";

export const SideNavLinks = [
	{ name: "Home", link: "/", img: nav1 },
	{ name: "Events", link: "/events", img: nav2 },
	{ name: "Team", link: "/team", img: nav3 },
	{ name: "Projects", link: "/projects", img: nav4 },
	{ name: "Gallery", link: "/gallery", img: nav6 },
	{ name: "DDS Platform", link: "https://acc-seven-theta.vercel.app/", img: nav1 },
	// { name: "Roadmap", link: "/roadmap", img: nav5 },

	{ name: "Membership", link: "/membership", img: nav2 },
	{ name: "Contact Us", link: "/contact", img: nav1 },
];

export const Socials = [
	{ icon: LinkedinIcon, hoverColor: "hover:text-sky-600", link: "" },
	{ icon: InstagramIcon, hoverColor: "hover:text-pink-500", link: "" },
	{ icon: TwitterIcon, hoverColor: "hover:text-blue-600", link: "" },
	{ icon: YoutubeIcon, hoverColor: "hover:text-red-500", link: "" },
];
