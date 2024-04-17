import React from 'react';
import ThemeContext from './ThemeContext';
import Header from './Header';
import ThemeSwitcher from './ThemeSwitcher';
import UserForm from './UserForm';

const themes = {
  light: {
    background: '#ffffff',
    text: '#000000',
  },
  dark: {
    background: '#333333',
    text: '#ffffff',
  },
};

const App = () => {
  return (
    <ThemeContext.Provider value={themes.light}>
      <div>
        <Header />
        <ThemeSwitcher />
        <UserForm />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;