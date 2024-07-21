import { createContext, useContext, useEffect, useState } from "react";

const themeContext = createContext({
	isDarkMode: false,
	setIsDarkMode: () => {},
	transitionDuration: "300ms",
});

export const useTheme = () => useContext(themeContext);

const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState("dark");

	const toggleTheme = () => setTheme((prev) => (prev == "light" ? "dark" : "light"));

	const transitionDuration = "300ms";

	useEffect(() => {
		if (theme === "dark") {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	}, [theme]);

	return <themeContext.Provider value={{ theme, toggleTheme, transitionDuration }}>{children}</themeContext.Provider>;
};

export { ThemeProvider, themeContext };
