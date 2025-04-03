import { useState } from "react";
import ProfileDetails from "../components/ProfileDetails";
import EditProfileForm from "../components/EditProfileForm";
import ChangePassword from "../components/ChangePassword";
import ThemeSettings from "../components/ThemeSettings";
import NotificationSettings from "../components/NotificationSettings";

const ProfileSettings = () => {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-md">
      {/* Tabs */}
      <div className="flex border-b mb-4">
        <button 
          className={`p-2 w-1/2 ${activeTab === "profile" ? "border-b-2 border-blue-500 font-bold" : ""}`}
          onClick={() => setActiveTab("profile")}
        >
          Profile
        </button>
        <button 
          className={`p-2 w-1/2 ${activeTab === "settings" ? "border-b-2 border-blue-500 font-bold" : ""}`}
          onClick={() => setActiveTab("settings")}
        >
          Settings
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === "profile" ? (
        <>
          <ProfileDetails />
          <EditProfileForm />
          <ChangePassword />
        </>
      ) : (
        <>
          <ThemeSettings />
          <NotificationSettings />
        </>
      )}
    </div>
  );
};

export default ProfileSettings;
