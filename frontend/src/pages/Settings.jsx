import { useState } from "react";

const Settings = () => {
  const [password, setPassword] = useState("");

  const handleUpdate = () => {
    alert("Password updated successfully!");
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">Settings</h2>
      <input 
        type="password" 
        placeholder="New Password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        className="border p-2 w-full rounded-md mb-4"
      />
      <button onClick={handleUpdate} className="bg-blue-500 text-white p-2 rounded-md">
        Update Password
      </button>
    </div>
  );
};

export default Settings;
