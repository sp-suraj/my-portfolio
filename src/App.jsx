import React, { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Experience from "./components/Experience.jsx";
import Education from "./components/Education.jsx";
import "./index.css";
import Sidebar from "./components/Sidebar.jsx";

function App() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleSidebar = () => {
		setIsOpen(!isOpen);
	};

	// useEffect for sidebar auto-close on screen resize
	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 1024 && isOpen) {
				// Adjust breakpoint based on your Tailwind configuration
				setIsOpen(false);
			}
		};

		window.addEventListener("resize", handleResize);

		// Cleanup function to remove event listener on component unmount
		return () => window.removeEventListener("resize", handleResize);
	}, [isOpen]);

	return (
		<div className="bg-primary z-50 dark:bg-dark">
			<Header isOpen={isOpen} toggleSidebar={toggleSidebar} />
			<main className="pt-[100px] z-10 p-8 flex flex-col gap-8">
				<Home />
				<Experience />
				<Projects />
				<Education />
				<Contact />
			</main>
			{isOpen && <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />}
		</div>
	);
}

export default App;
