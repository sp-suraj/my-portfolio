import React from "react";
import { Link } from "react-scroll";
import { useTheme } from "../context/ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa";
import HamburgerMenu from "./HamburgerMenu";

const Header = ({ isOpen, toggleSidebar }) => {
	const { theme, toggleTheme, transitionDuration } = useTheme();
	const arr = [
		{ id: "home", name: "home" },
		{ id: "experience", name: "experience" },
		{ id: "projects", name: "projects" },
		{ id: "education", name: "education" },
		{ id: "contact", name: "contact" },
	];
	return (
		<header className="fixed w-full text-white bg-primary dark:bg-dark">
			<nav className="w-full p-8 flex justify-end">
				<ul className="w-1/2 flex justify-end items-center gap-6 space-x-4">
					<button
						className={`rounded-full transition flex justify-end items-center w-auto duration-${transitionDuration} ease-in-out ${
							theme === "dark" ? "text-white" : "text-secondary"
						}`}
						onClick={toggleTheme}
					>
						<span className={`transition duration-${transitionDuration} ease-in-out`}>
							{theme !== "dark" ? <FaMoon size={20} /> : <FaSun size={20} />}
						</span>
					</button>
					<span className="block lg:hidden">
						<HamburgerMenu isOpen={isOpen} toggleSidebar={toggleSidebar} />
					</span>
					<span className="hidden lg:flex justify-end items-center gap-6 md:visible">
						{arr.map((item) => (
							<li key={item.id} className="text-lg text-center font-medium uppercase">
								<Link
									activeClass="text-white"
									to={item.name}
									spy={true}
									smooth={true}
									offset={-100}
									marginHeight={50}
									duration={700}
									className={`x-3 py-2 rounded-md px-3 text-inactive transition duration-500 ease-in-out hover:cursor-pointer text-center`}
								>
									{item.name}
								</Link>
							</li>
						))}
					</span>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
