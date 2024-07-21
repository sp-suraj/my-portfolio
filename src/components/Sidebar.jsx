import React from "react";

const Sidebar = ({ isOpen, toggleSidebar }) => {
	// <div
	// 	className={`fixed inset-0 top-0 left-0 h-full bg-gray-800 opacity-75 transition duration-300 ease-in-out transform ${
	// 		isOpen ? "translate-x-0" : "-translate-x-full"
	// 	}`}
	// >
	// 	<div className="relative flex flex-col max-w-md shadow-lg rounded-sm bg-white p-8 pt-4">
	// 		<div className="">

	// 		</div>
	// 		<ul className="flex flex-col space-y-4 px-4 py-8 text-white">
	// 			<li>
	// 				<a href="#" className="hover:text-gray-200">
	// 					Home
	// 				</a>
	// 			</li>
	// 			<li>
	// 				<a href="#" className="hover:text-gray-200">
	// 					About
	// 				</a>
	// 			</li>
	// 			<li>
	// 				<a href="#" className="hover:text-gray-200">
	// 					Contact
	// 				</a>
	// 			</li>
	// 		</ul>
	return (
		<>
			{isOpen && (
				<div className="fixed inset-0 z-50 overflow-y-auto w-full h-screen flex">
					<div className="relative flex flex-col w-full sm:w-[60%] md:w-[40%] lg:w-[30%] xl:w-[25%] h-full shadow-xl rounded-sm bg-[#191a1e] p-8 pt-4">
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
								<path d="M6 18L18 6M6 6l12 12"></path>
							</svg>
						</button>
					</div>
					<div className="w-[0%] sm:w-[40%] md:w-[60%] lg:w-[70%] xl:w-[75%] opacity-70 bg-black">Hii</div>
				</div>
			)}
		</>
	);
};

export default Sidebar;
