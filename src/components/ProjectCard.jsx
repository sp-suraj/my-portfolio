import React from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ title, description, technologies, link, height }) => {
	return (
		// hover:transform hover:translate-y-1
		<motion.div
			style={{ boxShadow: "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e" }}
			className={`bg-white dark:bg-dark rounded-md p-4 md:p-8 ${height}`}
			whileHover={{ y: "-5px", transition: { duration: 0.2, ease: "easeInOut" } }}
		>
			<div className="w-16 h-16 rounded-full bg-typeRed flex justify-center items-center bg-opacity-20">
				<div className="w-10 h-10 rounded-full bg-typeRed flex justify-center items-center bg-opacity-70">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="white"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
						className=""
					>
						<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
						<circle cx="12" cy="7" r="4"></circle>
					</svg>
				</div>
			</div>
			<h3 className="text-typeRed">{title}</h3>
			<p>{description}</p>
			<p>
				<strong>Technologies:</strong> {technologies.join(", ")}
			</p>
			<a href={link} target="_blank" rel="noopener noreferrer">
				View Project
			</a>
		</motion.div>
	);
};

export default ProjectCard;
