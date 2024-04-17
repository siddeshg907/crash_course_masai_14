import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

const UserForm = () => {
  const theme = useContext(ThemeContext);

  return (
    <div style={{ background: theme.background, color: theme.text }}>
      <h2>User Form</h2>
      {/* Form content */}
    </div>
  );
};

export default UserForm;