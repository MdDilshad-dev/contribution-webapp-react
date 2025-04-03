import { useState } from "react";

const EditProfileForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleUpdate = () => {
    alert("Profile Updated!");
  };

  return (
    <div className="mb-4">
      <h2 className="text-xl font-bold">Edit Profile</h2>
      <input 
        type="text" 
        placeholder="Name" 
        className="border p-2 w-full mb-2"
        value={name} 
        onChange={(e) => setName(e.target.value)}
      />
      <input 
        type="email" 
        placeholder="Email" 
        className="border p-2 w-full mb-2"
        value={email} 
        onChange={(e) => setEmail(e.target.value)}
      />
      <button className="bg-blue-500 text-white p-2 rounded" onClick={handleUpdate}>
        Update Profile
      </button>
    </div>
  );
};

export default EditProfileForm;
