import React, { useState } from "react";
import DarkModeToggle from "react-dark-mode-toggle";

const DayNightToggler = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => false);
    return (
        <DarkModeToggle
            onChange={setIsDarkMode}
            checked={isDarkMode}
            size={80}
            className="day-night-toggle"
        />
    );
}

export default DayNightToggler;