import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between">
      <Link to="/" className="text-xl font-bold">My App</Link>
      <div className="space-x-4">
        {user ? (
            <button onClick={logout} className="bg-red-500 px-3 py-1 rounded-md">Logout</button>        
        ) : (
          <>
            <Link to="/login" className="hover:underline">Login</Link>
            <Link to="/signup" className="hover:underline">Signup</Link>
            <Link to="/profile-settings">Profile & Settings</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
