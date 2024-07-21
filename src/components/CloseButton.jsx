const CloseButton = ({ onClick }) => {
	return (
		<button className="absolute top-4 right-4 focus:outline-none" onClick={onClick}>
			<svg
				className="h-6 w-6 text-white"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				<path d="M6 18L18 6M6 6l12 12"></path>
			</svg>
		</button>
	);
};

export default CloseButton;
