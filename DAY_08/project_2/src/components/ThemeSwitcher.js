import React, { useState } from 'react';

const ThemeSwitcher = () => {
  const [currentTheme, setCurrentTheme] = useState('light');

  const toggleTheme = () => {
    setCurrentTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <button onClick={toggleTheme}>
      Toggle Theme
    </button>
  );
};

export default ThemeSwitcher;