import { useEffect, useState } from "react";
import ReactAnimatedWeather from "react-animated-weather";
import nightIcon from "../assets/icons/moon.svg";
import lightIcon from "../assets/icons/sun.svg";
import githubLight from "../assets/icons/github-mark-white.svg";
import githubDark from "../assets/icons/github-mark.svg";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isToggling, setIsToggling] = useState(false);
  const [themeIcon, setThemeIcon] = useState(lightIcon);

  const toggleDarkMode = () => {
    setIsToggling(true);
    setDarkMode(!darkMode);
    setThemeIcon(darkMode ? lightIcon : nightIcon);
  };

  const [timeOfDay, setTimeOfDay] = useState({
    icon: "",
    color: "",
    size: 40,
    animate: true,
    greeting: "",
  });
  
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      setTimeOfDay({
        ...timeOfDay,
        color: "white"
      });
    } else {
      document.documentElement.classList.remove("dark");
      setTimeOfDay({
        ...timeOfDay,
        color: "black"
      });
    }
  }, [darkMode]);
  
  useEffect(() => {
    const updateTimeOfDay = () => {
      const hour = new Date().getHours();
      if (hour >= 5 && hour < 12) {
        setTimeOfDay({
          ...timeOfDay,
          icon: "CLEAR_DAY",
          greeting: "Good Morning",
        });
      } else if (hour >= 12 && hour < 17) {
        setTimeOfDay({
          ...timeOfDay,
          icon: "PARTLY_CLOUDY_DAY",
          greeting: "Good Afternoon",
        });
      } else if (hour >= 17 && hour < 21) {
        setTimeOfDay({
          ...timeOfDay,
          icon: "PARTLY_CLOUDY_NIGHT",
          greeting: "Good Evening",
        });
      } else {
        setTimeOfDay({
          ...timeOfDay,
          icon: "CLEAR_NIGHT",
          greeting: "Good Night",
        });
      }
    };

    updateTimeOfDay();
  }, []);

  return (
    <>
      <div className="flex justify-between">
        {/* Weather icon */}
        <div className="flex items-center gap-2">
          <ReactAnimatedWeather
            icon={timeOfDay.icon}
            color={timeOfDay.color}
            size={timeOfDay.size}
            animate={timeOfDay.animate}
          />
          <p>{timeOfDay.greeting}</p>
        </div>
        {/* Github and darkmode toggle */}
        <div className="flex items-center gap-3">
          {/* Github Profile */}
          <a
            href="https://github.com/bagasnugrha"
            className="flex gap-2 items-center hover:text-accent transition-colors duration-200"
          >
            <img
              src={darkMode ? githubLight : githubDark}
              alt="github logo"
              className="rounded-full w-8 h-8"
            />
            <span className="hidden md:block">bagasnugrha</span>
          </a>
          <button
            onClick={toggleDarkMode}
            className="p-1 w-8
            h-8 rounded-md cursor-pointer border-2 border-background-inverse hover:bg-background-inverse/15"
          >
            <img
              src={themeIcon}
              alt=""
              className={isToggling ? "rotate" : ""}
              onAnimationEnd={() => setIsToggling(false)}
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
