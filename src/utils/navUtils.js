import { FaHome, FaDonate, FaBloggerB } from "react-icons/fa";
import {
	MdSubscriptions,
	MdVolunteerActivism,
	MdEventNote,
} from "react-icons/md";

export const getNavLinkClass = (isActive) => {
	return isActive
		? "border-b-2 border-customBlue px-3 py-2 rounded-md shadow-sm"
		: "";
};

export const navLinks = [
	{
		name: "Home",
		url: "/",
	},
	{
		name: "About Us",
		url: "/about",
	},
	{
		name: "Contact Us",
		url: "/contact",
	},
	// {
	//   name: 'Media',
	//   url: '/media',
	// },
	{
		name: "Volunteer",
		url: "/volunteer",
	},
	{
		name: "News & Events",
		url: "/news-events",
	},
];

export const adminSideNavLinks = [
	{
		name: "Dashboard",
		url: "/admin/dashboard",
		icon: <FaHome className="text-3xl" />,
	},
	{
		name: "Email Subscribers",
		url: "/admin/email-subscribers",
		icon: <MdSubscriptions className="text-3xl" />,
	},
	{
		name: "Volunteers",
		url: "/admin/volunteers",
		icon: <MdVolunteerActivism className="text-3xl" />,
	},
	{
		name: "Events",
		url: "/admin/events",
		icon: <MdEventNote className="text-3xl" />,
	},
	{
		name: "Donations",
		url: "/admin/donations",
		icon: <FaDonate className="text-3xl" />,
	},
	{
		name: "Blog",
		url: "/admin/blog",
		icon: <FaBloggerB className="text-3xl" />,
	},
];
