import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/Avatar";
import { storage } from "../firebaseConfig";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const Profile = () => {
  const { user, updateUser } = useAuth();
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    profilePic: user?.profilePic || "",
  });
  const [uploading, setUploading] = useState(false);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);
    const storageRef = ref(storage, `profile_pictures/${user?.email}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      null,
      (error) => {
        console.error("Upload failed", error);
        setUploading(false);
      },
      async () => {
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        setFormData({ ...formData, profilePic: downloadURL });
        setUploading(false);
      }
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(formData);
    setEditMode(false);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Profile</h2>
      <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
        <Avatar className="w-24 h-24">
          <AvatarImage src={formData.profilePic || "https://via.placeholder.com/100"} alt="Profile" />
          <AvatarFallback>{user?.name?.charAt(0) || "U"}</AvatarFallback>
        </Avatar>

        {editMode ? (
          <form onSubmit={handleSubmit} className="space-y-3 mt-4 w-full">
            <input type="text" name="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="border p-2 rounded w-full" />
            <input type="file" onChange={handleFileChange} className="border p-2 rounded w-full" />
            {uploading && <p className="text-blue-500">Uploading...</p>}
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded w-full">Save Changes</button>
          </form>
        ) : (
          <>
            <p className="mt-4"><strong>Name:</strong> {user?.name || "John Doe"}</p>
            <p><strong>Email:</strong> {user?.email}</p>
            <button onClick={() => setEditMode(true)} className="mt-4 bg-green-500 text-white px-4 py-2 rounded">Edit Profile</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Profile;
