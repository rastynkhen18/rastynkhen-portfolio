import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Menu, X } from "lucide-react";
import DarkModeToggle from "./DarkModeToggle";
import DarkModeIcon from "./DarkModeIcon";
import GithubIcon from "../assets/icons/github.svg"
import TwitterXIcon from '../assets/icons/twitter-x.svg'
import Logo from '../components/Logo'


const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const [activeSection, setActiveSection] = useState("home"); // NEW: track active section
	const mobileMenuRef = useRef(null);
	const sections = ["home", "about", "skills", "projects", "contact"];

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50);

			// Detect active section while scrolling
			const scrollPosition = window.scrollY + 150; // adjust for header height
			let current = "home";
			sections.forEach((section) => {
				const element = document.getElementById(section);
				if (element && element.offsetTop <= scrollPosition) {
					current = section;
				}
			});
			setActiveSection(current);
		};

		const handleClickOutside = (e) => {
			// Close mobile menu
			if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target)) {
				setIsOpen(false);
			}

		};

		window.addEventListener("scroll", handleScroll);
		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			window.removeEventListener("scroll", handleScroll);
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	// Styling function for active link
	const getLinkClass = (section) =>
		`pb-1 transition-all duration-300 ${activeSection === section
			? "border-b-2 border-[var(--primary-color)]"
			: "border-b-2 border-transparent"
		}`;

	return (
		<header
			className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled
				? "bg-[var(--background-color)] text-[var(--text-color)] shadow-md"
				: "bg-[var(--background-color)] text-[var(--text-color)]"
				}`}
		>
			<div className="flex justify-between md:justify-around items-center px-8 py-4">
				<div>
					<Link to="/" reloadDocument>
						<Logo />
					</Link>
				</div>

				{/* Desktop Nav */}
				<nav
					className={`hidden md:flex justify-center items-center gap-10 ${scrolled
						? "text-[var(--text-color)]"
						: "text-[var(--text-color)]"
						}`}
				>
					{sections.map((section) => (
						<HashLink
							key={section}
							smooth
							to={`#${section}`}
							className={getLinkClass(section)}
						>
							{section.charAt(0).toUpperCase() + section.slice(1)}
						</HashLink>
					))}

					<div className="flex justify-center items-center gap-4">
						<a href="https://github.com/rastynkhen18" target="_blank" rel="noopener noreferrer">
							<DarkModeIcon src={GithubIcon} alt="Github" className="w-5 h-5" />
						</a>
						<a
							href="https://x.com/rastynkhen_18"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Twitter"
						>
							<DarkModeIcon src={TwitterXIcon} alt="Twitter/X" className="w-5 h-5" />
						</a>
						<DarkModeToggle />
					</div>
				</nav>

				{/* Burger Icon */}
				<div className="md:hidden z-20">
					{isOpen ? (
						<X
							size={28}
							onClick={() => setIsOpen(false)}
							className={`cursor-pointer ${scrolled
								? "text-[var(--text-gray)]"
								: "text-[var(--text-gray)]"
								}`}
						/>
					) : (
						<Menu
							size={28}
							onClick={() => setIsOpen(true)}
							className={`cursor-pointer ${scrolled
								? "text-[var(--text-gray)]"
								: "text-[var(--text-gray)]"
								}`}
						/>
					)}
				</div>
			</div>

			{/* Mobile Menu */}
			<div
				ref={mobileMenuRef}
				className={`absolute z-40 top-16 left-0 w-full h-screen ${scrolled
					? "bg-[var(--card-color)] text-[var(--text-color)]"
					: "bg-[var(--card-color)] text-[var(--text-color)]"
					} flex flex-col justify-start items-center gap-6 px-10 py-5 text-base transition-all duration-300 md:hidden ${isOpen
						? "translate-x-0 opacity-100"
						: "-translate-x-[-130%] opacity-0 pointer-events-none"
					} ${scrolled
						? "text-[var(--text-color)]"
						: "text-[var(--text-color)]"
					}`}
			>
				{sections.map((section) => (
					<HashLink
						key={section}
						smooth
						to={`#${section}`}
						className={getLinkClass(section)}
						onClick={() => setIsOpen(false)}
					>
						{section.charAt(0).toUpperCase() + section.slice(1)}
					</HashLink>
				))}
				<div className="flex justify-center items-center gap-4">
					<a href="https://github.com/rastynkhen18" target="_blank" rel="noopener noreferrer">
						<DarkModeIcon src={GithubIcon} alt="Github" className="w-5 h-5" />
					</a>
					<a
						href="https://x.com/rastynkhen_18"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Twitter"
					>
						<DarkModeIcon src={TwitterXIcon} alt="Twitter/X" className="w-5 h-5" />
					</a>
					<DarkModeToggle />
				</div>
			</div>
		</header>
	);
};

export default Header;
