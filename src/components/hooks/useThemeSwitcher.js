import { useEffect, useState } from "react";

const useThemeSwitcher = () => {
  const preferDarkQuery = "(prefers-color-scheme: dark)";
  const [mode, setMode] = useState(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia(preferDarkQuery);
    const userPref = window.localStorage.getItem("theme");

    const handleChange = () => {
      if (userPref) {
        setMode(userPref);
      } else {
        setMode(mediaQuery.matches ? "dark" : "light");
      }
    };

    handleChange();

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined" || mode === null) return;

    if (mode === "dark") {
      document.documentElement.classList.add("dark");
      window.localStorage.setItem("theme", "dark");
    }
    if (mode === "light") {
      document.documentElement.classList.remove("dark");
      window.localStorage.setItem("theme", "light");
    }
  }, [mode]);

  return [mode, setMode];
};

export default useThemeSwitcher;
