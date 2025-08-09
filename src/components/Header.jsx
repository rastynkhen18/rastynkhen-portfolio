import React, { useState, useEffect, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const services = [
	{ to: "/services/airfreight", label: "Air Freight" },
	{ to: "/services/seafreight", label: "Sea Freight" },
	{ to: "/services/landfreight", label: "Land Freight" },
	{ to: "/services/custombrokerage", label: "Custom Brokerage" },
	{ to: "/services/fcl_lcl", label: "FCL/LCL" },
	{ to: "/services/domestic-transfer-services", label: "Domestic Transport" },
	{ to: "/services/freight-&-tariff-consultation", label: "Freight & Tariff Consultation" },
	{ to: "/services/amo-certificate", label: "Renewal of AMO Certificate" },
	{ to: "/services/import-license", label: "Accreditation of Import License" },
];

const getLinkClass = ({ isActive }) => (isActive ? "border-b-2 border-[var(--primary-color)] m-0 p-0" : "text-inherit");

const getDropdownLinkClass = ({ isActive }) =>
	`block w-full text-left py-2 transition-colors ${isActive ? "text-[var(--primary-color)] bg-gray-50 font-bold text-sm px-5" : "text-[#1e1e1e] hover:bg-gray-100 font-normal text-sm leading-[1] px-5"
	}`;

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const [servicesOpen, setServicesOpen] = useState(false); // desktop dropdown
	const [mobileServicesOpen, setMobileServicesOpen] = useState(false); // mobile accordion

	const mobileMenuRef = useRef(null);
	const desktopServicesRef = useRef(null);
	const dropdownRef = useRef(null);

	useEffect(() => {
		const handleScroll = () => setScrolled(window.scrollY > 50);

		const handleClickOutside = (e) => {
			// Close mobile menu
			if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target)) {
				setIsOpen(false);
			}
			// Close desktop services dropdown
			if (servicesOpen && desktopServicesRef.current && !desktopServicesRef.current.contains(e.target) && dropdownRef.current && !dropdownRef.current.contains(e.target)) {
				setServicesOpen(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			window.removeEventListener("scroll", handleScroll);
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [servicesOpen]);

	return (
		<header className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled ? "bg-[var(--black-color)] shadow-md" : "text-[var(--white-color)]"}`}>
			<div className="flex justify-between md:justify-around items-center h-16 px-5">
				<div>
					<Link to="/" reloadDocument>
						{/* <img src={Logo} alt="Digo Traders Incorporated Logo" className="cursor-pointer w-18" /> */}
						<h1>RK</h1>
					</Link>
				</div>

				{/* Desktop Nav */}
				<nav className={`hidden md:flex justify-center items-center gap-10 ${scrolled ? "text-[var(--white-color)]" : "text-[var(--secondary-color)]"}`}>
					<NavLink to="/" className={getLinkClass} reloadDocument>
						Home
					</NavLink>
					<NavLink to="/about" className={getLinkClass} reloadDocument>
						About
					</NavLink>

					<NavLink to="/skills" className={getLinkClass} reloadDocument>
						Skills
					</NavLink>

					<NavLink to="/projects" className={getLinkClass} reloadDocument>
						Projects
					</NavLink>

					<NavLink to="/contact" className={getLinkClass} reloadDocument>
						Contact
					</NavLink>

				</nav>

				{/* Burger Icon */}
				<div className="md:hidden z-20">
					{isOpen ? (
						<X size={28} onClick={() => setIsOpen(false)} className={`cursor-pointer ${scrolled ? "text-[var(--secondary-color)]" : "text-[var(--secondary-color)]"}`} />
					) : (
						<Menu size={28} onClick={() => setIsOpen(true)} className={`cursor-pointer ${scrolled ? "text-[var(--secondary-color)]" : "text-[var(--secondary-color)]"}`} />
					)}
				</div>
			</div>

			{/* Mobile Menu */}
			<div
				ref={mobileMenuRef}
				className={`absolute z-40 top-16 left-0 w-full ${scrolled ? "bg-[var(--white-color)] text-[var(--secondary-color)]" : "bg-[var(--white-color)] text-[var(--secondary-color)]"
					} flex flex-col items-start gap-6 px-10 py-5  transition-all duration-300 md:hidden ${isOpen ? "translate-x-0 opacity-100" : "-translate-x-[-130%] opacity-0 pointer-events-none"} ${scrolled ? "text-[var(--secondary-color)]" : "text-[var(--secondary-color)]"
					}`}
			>
				<NavLink to="/" className={getLinkClass} onClick={() => setIsOpen(false)} reloadDocument>
					Home
				</NavLink>

				<NavLink to="/about" className={getLinkClass} onClick={() => setIsOpen(false)} reloadDocument>
					About
				</NavLink>

				<NavLink to="/skills" className={getLinkClass} reloadDocument>
					Skills
				</NavLink>

				<NavLink to="/projects" className={getLinkClass} reloadDocument>
					Projects
				</NavLink>

				<NavLink to="/contact" className={getLinkClass} onClick={() => setIsOpen(false)} reloadDocument>
					Contact
				</NavLink>
			</div>
		</header>
	);
};

export default Header;
