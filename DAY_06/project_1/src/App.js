import { useState } from "react";
import { EditProfile } from "./components/EditProfile";
import { UserProfile } from "./components/UserProfile";


function App() {
  const initialUser = {
    name: 'John Doe',
    email: 'john@example.com',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  };

  const [user, setUser] = useState(initialUser);
  const [editMode, setEditMode] = useState(false);

  const toggleMode = () => {
    setEditMode((prevMode) => !prevMode);
  };

  const handleSave = (newData) => {
    setUser(newData);
    setEditMode(false);
  };
  return (
    <div>
      <h1>User Profile App</h1>
      <button onClick={toggleMode}>{editMode ? 'View Mode' : 'Edit Mode'}</button>
      {editMode ? (
        <EditProfile user={user} onSave={handleSave} />
      ) : (
        <UserProfile user={user} />
      )}
    </div>
  );
}

export default App;
