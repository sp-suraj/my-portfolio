import React from "react";

const HamburgerMenu = ({ isOpen, toggleSidebar }) => {
	return (
		<>
			<button className="flex items-center focus:outline-none" onClick={toggleSidebar}>
				<svg
					className="h-8 w-8 text-typeRed"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2.1"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<line x1="4" y1="6" x2="24" y2="6"></line>
					<line x1="4" y1="12" x2="24" y2="12"></line>
					<line x1="4" y1="18" x2="24" y2="18"></line>
				</svg>
			</button>
		</>
	);
};

export default HamburgerMenu;
