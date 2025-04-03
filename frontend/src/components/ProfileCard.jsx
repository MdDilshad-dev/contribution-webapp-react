const ProfileCard = ({ user }) => {
    return (
      <div className="bg-white shadow-md rounded-lg p-6">
        <img
          src={user?.profilePic || "https://via.placeholder.com/100"}
          alt="Profile"
          className="w-20 h-20 rounded-full mb-4"
        />
        <p><strong>Name:</strong> {user?.name || "John Doe"}</p>
        <p><strong>Email:</strong> {user?.email}</p>
      </div>
    );
  };
  
  export default ProfileCard;
  