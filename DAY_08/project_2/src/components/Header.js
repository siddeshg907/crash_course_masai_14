import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

const Header = () => {
  const theme = useContext(ThemeContext);

  return (
    <header style={{ background: theme.background, color: theme.text }}>
      <h1>Theme Switcher App</h1>
    </header>
  );
};

export default Header;