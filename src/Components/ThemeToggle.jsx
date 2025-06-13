import { useEffect, useState } from 'react';
import { IoIosSunny } from "react-icons/io";
import { FaMoon } from "react-icons/fa";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

useEffect(() => {
  document.querySelector('html').setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}, [theme]);


  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <button onClick={toggleTheme} className="text-xl">
      {theme === 'light' ? <FaMoon /> : <IoIosSunny />}
    </button>
  );
};

export default ThemeToggle;
