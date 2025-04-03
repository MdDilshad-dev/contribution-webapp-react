import { useState } from "react";

const ChangePassword = () => {
  const [password, setPassword] = useState("");

  const handleChangePassword = () => {
    alert("Password Changed Successfully!");
  };

  return (
    <div className="mb-4">
      <h2 className="text-xl font-bold">Change Password</h2>
      <input 
        type="password" 
        placeholder="New Password" 
        className="border p-2 w-full mb-2"
        value={password} 
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="bg-red-500 text-white p-2 rounded" onClick={handleChangePassword}>
        Change Password
      </button>
    </div>
  );
};

export default ChangePassword;
