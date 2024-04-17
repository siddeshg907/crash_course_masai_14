import React, { useState, useRef } from 'react';

const UserForm = () => {
  // Controlled input state
  const [name, setName] = useState('');
  // Ref for uncontrolled input
  const emailInputRef = useRef(null);
  // State for validation message
  const [validationError, setValidationError] = useState('');

  // Handler for controlled input change
  const handleNameChange = (event) => {
    setName(event.target.value);
    // Validate name
    if (event.target.value.length < 3) {
      setValidationError('Name must be at least 3 characters long');
    } else {
      setValidationError('');
    }
  };

  // Handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Access value of uncontrolled input using ref
    const email = emailInputRef.current.value;
    // Log values to console
    console.log('Name:', name);
    console.log('Email:', email);
  };

  return (
    <div>
      <h2>User Form</h2>
      <form onSubmit={handleSubmit}>
        {/* Controlled input */}
        <div>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
            />
          </label>
          
          {validationError && <p style={{ color: 'red' }}>{validationError}</p>}
        </div>
        {/* Uncontrolled input using ref */}
        <div>
          <label>
            Email:
            <input
              type="text"
              ref={emailInputRef}
            />
          </label>
        </div>
       
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UserForm;