import React from "react";
import ProjectCard from "./ProjectCard";

const Home = () => {
	return (
		<section id="home" className="grid gird-cols-1 gap-8 md:grid-cols-2 text-primary dark:text-white justify-center">
			<div className="h-full">
				<ProjectCard
					title={"Hi I'm Suraj Prajapati"}
					height={"h-full"}
					link={"#"}
					description={"I am a developer"}
					technologies={["React", "Tailwind"]}
					key={1}
				/>
			</div>
			<div className="h-full flex flex-col gap-8">
				<ProjectCard
					title={"Hi I'm Suraj Prajapati"}
					height={"h-auto"}
					link={"#"}
					description={"I am a developer"}
					technologies={["React", "Tailwind"]}
					key={2}
				/>
				<ProjectCard
					title={"Hi I'm Suraj Prajapati"}
					height={"h-auto"}
					link={"#"}
					description={"I am a developer"}
					technologies={["React", "Tailwind"]}
					key={3}
				/>
				{/*
				 */}
			</div>
		</section>
	);
};

export default Home;
